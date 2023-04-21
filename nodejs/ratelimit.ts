class BurstRateLimiter
{
    private maxBurstSeconds:number = 1.0;
    private nextFreeTicketMillis:number = -1;
    private startTime:number;
    private storedPermits:number;
    private maxPermits:number;
    private stableIntervalMillis:number;
    public  init(permitsPerSecond:number)
    {
        this.startTime = System.currentTimeMillis();
        this.stableIntervalMillis = this.seconds2Millis(1) / permitsPerSecond;
        this.storedPermits = 0.0;
        this.maxPermits = this.maxBurstSeconds * permitsPerSecond;
        this.syncState(this.currentMillis());
    }
    private number seconds2Millis(duration:number)
    {
        return duration * 1000;
    }
    public boolean tryAcquire(permits:number)
    {
        var nowMillis = this.currentMillis();
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
    private number currentMillis()
    {
        return System.currentTimeMillis() - this.startTime;
    }
    private boolean canAcquire(nowMillis:number)
    {
        return this.nextFreeTicketMillis <= nowMillis;
    }
    public number reserveEarliestAvailable(requiredPermits:number, nowMillis:number)
    {
        this.syncState(nowMillis);
        var momentAvailable = this.nextFreeTicketMillis;
        var storedPermitsToSpend = Math.min(requiredPermits,this.storedPermits);
        var freshPermits = requiredPermits - storedPermitsToSpend;
        var waitMillis = parseInt((freshPermits * this.stableIntervalMillis));
        this.nextFreeTicketMillis = this.nextFreeTicketMillis + waitMillis;
        console.log("reserveEarliestAvailable nextFreeTicketMillis: " + (momentAvailable) / 1000 + ", nextFreeTicketMillis: " + (this.nextFreeTicketMillis) / 1000 + ", nowMillis: " + (nowMillis) / 1000 + ", storedPermits: " + this.storedPermits + ", waitMillis: " + (waitMillis) / 1000);
        this.storedPermits -= storedPermitsToSpend;
        return Math.max(momentAvailable - nowMillis,0);
    }
    public  syncState(nowMillis:number)
    {
        if (nowMillis > this.nextFreeTicketMillis)
        {
            var newPermits = (nowMillis - this.nextFreeTicketMillis) / this.stableIntervalMillis;
            console.log("syncState nextFreeTicketMillis: " + (this.nextFreeTicketMillis) / 1000 + ", nowMillis: " + (nowMillis) / 1000 + ", storedPermits: " + this.storedPermits + ", newPermits: " + newPermits);
            this.storedPermits = Math.min(this.maxPermits,this.storedPermits + newPermits);
            this.nextFreeTicketMillis = nowMillis;
        }
    }
}