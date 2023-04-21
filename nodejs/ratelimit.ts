class BurstyRateLimiter
{
    private maxBurstSeconds:number = 1.0;
    private nextFreeTicketMicros:number = -1;
    private startTime:number;
    private storedPermits:number;
    private maxPermits:number;
    private stableIntervalMicros:number;
    public  init(permitsPerSecond:number)
    {
        this.startTime = System.currentTimeMillis() * 1000;
        this.stableIntervalMicros = this.seconds2Micros(1) / permitsPerSecond;
        this.storedPermits = 0.0;
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
        console.log("reserveEarliestAvailable nextFreeTicketMicros: " + (momentAvailable) / 1000 + ", nextFreeTicketMicros: " + (this.nextFreeTicketMicros) / 1000 + ", nowMicros: " + (nowMicros) / 1000 + ", storedPermits: " + this.storedPermits + ", waitMicros: " + (waitMicros) / 1000);
        this.storedPermits -= storedPermitsToSpend;
        return Math.max(momentAvailable - nowMicros,0);
    }
    public  syncState(nowMicros:number)
    {
        if (nowMicros > this.nextFreeTicketMicros)
        {
            var newPermits = (nowMicros - this.nextFreeTicketMicros) / this.stableIntervalMicros;
            console.log("syncState nextFreeTicketMicros: " + (this.nextFreeTicketMicros) / 1000 + ", nowMicros: " + (nowMicros) / 1000 + ", storedPermits: " + this.storedPermits + ", newPermits: " + newPermits);
            this.storedPermits = Math.min(this.maxPermits,this.storedPermits + newPermits);
            this.nextFreeTicketMicros = nowMicros;
        }
    }
}
