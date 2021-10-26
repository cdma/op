1. fetchNameServerAddr:
1000 * 10, 1000 * 60 * 2, TimeUnit.MILLISECONDS

2. updateTopicRouteInfoFromNameServer:
10, 1000 * 30, TimeUnit.MILLISECONDS

3. cleanOfflineBroker && sendHeartbeatToAllBrokerWithLock
1000, 1000 * 30, TimeUnit.MILLISECONDS

4. persistAllConsumerOffset
1000 * 10, 1000 * 5, TimeUnit.MILLISECONDS

5. adjustThreadPool
1, 1, TimeUnit.MINUTES




