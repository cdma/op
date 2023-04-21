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
        this.startTime = this.readMicros();
        this.setRate(permitsPerSecond);
    }
    public  setRate(permitsPerSecond:number)
    {
        var stableIntervalMicros = this.seconds2Micros(1) / permitsPerSecond;
        this.stableIntervalMicros = stableIntervalMicros;
        this.doSetRate(permitsPerSecond, this.readMicros());
    }
    private number seconds2Micros(duration:number)
    {
        return duration * 1000 * 1000;
    }
    public  doSetRate(permitsPerSecond:number, nowMicros:number)
    {
        var stableIntervalMicros = this.seconds2Micros(1) / permitsPerSecond;
        this.stableIntervalMicros = stableIntervalMicros;
        this.doSetRate(permitsPerSecond, stableIntervalMicros);
        this.resync(nowMicros);
    }
    public  doSetRate(permitsPerSecond:number, stableIntervalMicros:number)
    {
        this.maxPermits = this.maxBurstSeconds * permitsPerSecond;
        this.storedPermits = (this.maxPermits == 0.0) ? 0.0 : this.storedPermits * this.maxPermits / this.maxPermits;
    }
    public boolean tryAcquire(permits:number)
    {
        var nowMicros = this.readMicros();
        if (!this.canAcquire(nowMicros))
        {
            return false;
        }
        else
        {
            this.reserveAndGetWaitLength(permits, nowMicros);
        }
        return true;
    }
    private number readMicros()
    {
        return System.currentTimeMillis() * 1000;
    }
    private boolean canAcquire(nowMicros:number)
    {
        return this.queryEarliestAvailable(nowMicros) <= nowMicros;
    }
    public number queryEarliestAvailable(nowMicros:number)
    {
        console.log("queryEarliestAvailable nextFreeTicketMicros: " + (this.nextFreeTicketMicros - this.startTime) / 1000 + ", nowMicros: " + (nowMicros - this.startTime) / 1000);
        return this.nextFreeTicketMicros;
    }
    public number reserveAndGetWaitLength(permits:number, nowMicros:number)
    {
        var momentAvailable = this.reserveEarliestAvailable(permits, nowMicros);
        return Math.max(momentAvailable - nowMicros,0);
    }
    public number reserveEarliestAvailable(requiredPermits:number, nowMicros:number)
    {
        this.resync(nowMicros);
        var returnValue = this.nextFreeTicketMicros;
        var storedPermitsToSpend = Math.min(requiredPermits,this.storedPermits);
        var freshPermits = requiredPermits - storedPermitsToSpend;
        var waitMicros = parseInt((freshPermits * this.stableIntervalMicros));
        this.nextFreeTicketMicros = this.nextFreeTicketMicros + waitMicros;
        console.log("reserveEarliestAvailable nextFreeTicketMicros: " + (this.nextFreeTicketMicros - this.startTime) / 1000 + ", nowMicros: " + (nowMicros - this.startTime) / 1000 + ", storedPermits: " + this.storedPermits + ", waitMicros: " + (waitMicros - this.startTime) / 1000);
        this.storedPermits -= storedPermitsToSpend;
        return returnValue;
    }
    public  resync(nowMicros:number)
    {
        if (nowMicros > this.nextFreeTicketMicros)
        {
            var newPermits = (nowMicros - this.nextFreeTicketMicros) / this.stableIntervalMicros;
            console.log("resync nextFreeTicketMicros: " + (this.nextFreeTicketMicros - this.startTime) / 1000 + ", nowMicros: " + (nowMicros - this.startTime) / 1000 + ", storedPermits: " + this.storedPermits + ", newPermits: " + newPermits);
            this.storedPermits = Math.min(this.maxPermits,this.storedPermits + newPermits);
            this.nextFreeTicketMicros = nowMicros;
        }
    }
}
