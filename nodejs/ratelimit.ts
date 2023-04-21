class RateLimiter
{
    private nextFreeTicketMicros:number = 0;
    private startTime:number;
    private storedPermits:number;
    private maxPermits:number;
    private stableIntervalMicros:number;
    private maxBurstSeconds:number;
    constructor()
    {
        this.maxBurstSeconds = 1.0;
    }
    public  init(permitsPerSecond:number)
    {
        this.startTime = System.currentTimeMillis() * 1000;
        this.setRate(permitsPerSecond);
    }
    public  setRate(permitsPerSecond:number)
    {
        var stableIntervalMicros = this.seconds2Micros(1) / permitsPerSecond;
        this.stableIntervalMicros = stableIntervalMicros;
        this.storedPermits = permitsPerSecond;
        this.maxPermits = this.maxBurstSeconds * permitsPerSecond;
        this.syncState(this.currentMicros());
    }
    private number seconds2Micros(duration:number)
    {
        return duration * 1000 * 1000;
    }
    public boolean tryAcquire(permits:number)
    {
        var nowMicros = this.currentMicros();
        if (!this.canAcquire(nowMicros))
        {
            return false;
        }
        else
        {
            this.reserveEarliestAvailable(permits, nowMicros);
        }
        return true;
    }
    private number currentMicros()
    {
        return System.currentTimeMillis() * 1000 - this.startTime;
    }
    private boolean canAcquire(nowMicros:number)
    {
        return this.nextFreeTicketMicros <= nowMicros;
    }
    public number reserveEarliestAvailable(requiredPermits:number, nowMicros:number)
    {
        this.syncState(nowMicros);
        var momentAvailable = this.nextFreeTicketMicros;
        var storedPermitsToSpend = Math.min(requiredPermits,this.storedPermits);
        var freshPermits = requiredPermits - storedPermitsToSpend;
        var waitMicros = parseInt((freshPermits * this.stableIntervalMicros));
        this.nextFreeTicketMicros = this.nextFreeTicketMicros + waitMicros;
        this.storedPermits -= storedPermitsToSpend;
        return Math.max(momentAvailable - nowMicros,0);
    }
    public  syncState(nowMicros:number)
    {
        if (nowMicros > this.nextFreeTicketMicros)
        {
            var newPermits = (nowMicros - this.nextFreeTicketMicros) / this.stableIntervalMicros;
            this.storedPermits = Math.min(this.maxPermits,this.storedPermits + newPermits);
            this.nextFreeTicketMicros = nowMicros;
        }
    }
}