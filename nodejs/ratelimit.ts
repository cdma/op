import { verifyAddress } from '@litentry/invite-list';
import type { NextApiRequest, NextApiResponse } from 'next';


// export default verifyAddress;

const maxBurstSeconds: number = 1.0;


export class BurstRateLimiter {
    // can take permit unit deadline
    private nextFreeTicketMillis: number = 0;

    // limit startup time
    private startTime: number;

    // remain permits
    private storedPermits: number;

    // max permits stored
    private maxPermits: number;

    // interval for one permit 
    private stableIntervalMillis: number;

    public  constructor(permitsPerSecond: number) {
        this.startTime = Date.now();
        this.stableIntervalMillis = 1 * 1000 / permitsPerSecond;
        this.storedPermits = 0.0;
        this.maxPermits = maxBurstSeconds * permitsPerSecond;
        this.syncState(this.currentMillis());
    }
    
    // take permit
    public  tryAcquire(permits: number): boolean {
        let nowMillis = this.currentMillis();
        if (!this.canAcquire(nowMillis))
        {
            return false;
        }
        else
        {
            this.reserveEarliestAvailable(permits, nowMillis);
        }
        return true;
    }
    
    // check need wait
    private  canAcquire(nowMillis:number):boolean {
        return this.nextFreeTicketMillis <= nowMillis;
    }

    // can borrow permit at first, but wait full time next
    private  reserveEarliestAvailable(requiredPermits:number, nowMillis:number): number {
        this.syncState(nowMillis);
        const momentAvailable = this.nextFreeTicketMillis;
        const storedPermitsToSpend = Math.min(requiredPermits, this.storedPermits);
        const freshPermits = requiredPermits - storedPermitsToSpend;
        const waitMillis = freshPermits * this.stableIntervalMillis;
        this.nextFreeTicketMillis = this.nextFreeTicketMillis + waitMillis;
        this.storedPermits -= storedPermitsToSpend;
        return Math.max(momentAvailable - nowMillis, 0);
    }

    private  syncState(nowMillis:number) {
        if (nowMillis > this.nextFreeTicketMillis) {
            const newPermits = (nowMillis - this.nextFreeTicketMillis) / this.stableIntervalMillis;
            this.storedPermits = Math.min(this.maxPermits,this.storedPermits + newPermits);
            this.nextFreeTicketMillis = nowMillis;
        }
    }

    // current time relative to startTime
    private  currentMillis(): number {
      return Date.now() - this.startTime;
  }
}


let permitsPerSecond: number = 3;   // default dev env
if (process.env.NODE_ENV === 'production'  && !process.env.PERMITS_PER_SECOND) {
  const tmpPermitsPerSecond: number = parseInt(process.env.PERMITS_PER_SECOND as string);
  if (!isNaN(tmpPermitsPerSecond)) {
    permitsPerSecond = tmpPermitsPerSecond;
  }
}

const limiter = new BurstRateLimiter(permitsPerSecond);

export default function (req: NextApiRequest, res: NextApiResponse) {
  const pass = limiter.tryAcquire(1);
  if (pass) {
     verifyAddress(req, res);
  } else {
    return res.status(503).send('request too many');
  }
}







import { BurstRateLimiter } from './verify-address';


describe('BurstRateLimiter', () => {
    it('should success when initial permit burst ', () => {
        const limiter = new BurstRateLimiter(1);
    
        expect(limiter.tryAcquire(1)).toBe(true);
    });

    it('should fail when second permit burst ', () => {
        const limiter = new BurstRateLimiter(2);
    
        expect(limiter.tryAcquire(1)).toBe(true);
        expect(limiter.tryAcquire(1)).toBe(false);
    });

    it('should success when wait full max capacity reached ', async  () => {
        const limiter = new BurstRateLimiter(3);

        // fake sleep 1 second
        await new Promise((r) => setTimeout(r, 1000));
    
        expect(limiter.tryAcquire(1)).toBe(true);
        expect(limiter.tryAcquire(1)).toBe(true);
        expect(limiter.tryAcquire(1)).toBe(true);

        // burst will success
        expect(limiter.tryAcquire(1)).toBe(true);

        // fail when consumer off all permit, must wait next duration
        expect(limiter.tryAcquire(1)).toBe(false);
    });

  
  });
  
