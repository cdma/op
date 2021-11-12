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




RebalanceService:
waitInterval = 20000

this.mqClientFactory.doRebalance();

RebalancePullImpl
RebalanceImpl:
public void doRebalance(final boolean isOrder) {
        Map<String, SubscriptionData> subTable = this.getSubscriptionInner();
        if (subTable != null) {
            for (final Map.Entry<String, SubscriptionData> entry : subTable.entrySet()) {
                final String topic = entry.getKey();
                try {
                    this.rebalanceByTopic(topic, isOrder);
                } catch (Throwable e) {
                    if (!topic.startsWith(MixAll.RETRY_GROUP_TOPIC_PREFIX)) {
                        log.warn("rebalanceByTopic Exception", e);
                    }
                }
            }
        }

        this.truncateMessageQueueNotMyTopic();
    }



