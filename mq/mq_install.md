1. brokerA.conf
brokerClusterName = DefaultCluster
brokerName = broker-a
brokerId = 0
deleteWhen = 04
fileReservedTime = 48
brokerRole = ASYNC_MASTER
flushDiskType = ASYNC_FLUSH
mappedFileSizeCommitLog = 1048576
waitTimeMillsInSendQueue = 400

2. diff bin/runbroker.sh bin.orig/runbroker.sh
67,68c67
< # JAVA_OPT="${JAVA_OPT} -server -Xms8g -Xmx8g -Xmn4g"
< JAVA_OPT="${JAVA_OPT} -server -Xms64m -Xmx64m -Xmn32m"
---
> JAVA_OPT="${JAVA_OPT} -server -Xms8g -Xmx8g -Xmn4g"
74,75c73
< #JAVA_OPT="${JAVA_OPT} -XX:MaxDirectMemorySize=15g"
< JAVA_OPT="${JAVA_OPT} -XX:MaxDirectMemorySize=8m"
---
> JAVA_OPT="${JAVA_OPT} -XX:MaxDirectMemorySize=15g"

3. diff bin/runserver.sh bin.orig/runserver.sh
67,68c67
< #JAVA_OPT="${JAVA_OPT} -server -Xms4g -Xmx4g -Xmn2g -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"
< JAVA_OPT="${JAVA_OPT} -server -Xms64m -Xmx64m -Xmn32m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"
---
> JAVA_OPT="${JAVA_OPT} -server -Xms4g -Xmx4g -Xmn2g -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"

4. diff bin/tools.sh bin.orig/tools.sh
39,40c39
< #JAVA_OPT="${JAVA_OPT} -server -Xms1g -Xmx1g -Xmn256m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m"
< JAVA_OPT="${JAVA_OPT} -server -Xms32m -Xmx32m -Xmn16m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m"
---
> JAVA_OPT="${JAVA_OPT} -server -Xms1g -Xmx1g -Xmn256m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=128m"


5. .bashrc
export JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:/bin/java::")

6. source .bashrc

7. nohup sh bin/mqnamesrv &
tail -f ~/logs/rocketmqlogs/namesrv.log

8. nohup sh bin/mqbroker -n localhost:9876  -c ./conf/brokerA.conf &
tail -f ~/logs/rocketmqlogs/broker.log


9. export NAMESRV_ADDR="127.0.0.1:9876;127.0.0.1:9876"

10. sh bin/mqadmin topicList
    sh bin/mqadmin topicList|grep ^Topic



11. sh bin/mqadmin updateTopic -c DefaultCluster -t TopicMsgP2P -r 1 -w 1
    sh bin/mqadmin updateTopic -c DefaultCluster -t TopicMsgTeam -r 1 -w 1

13. sh bin/mqadmin updateTopic -c DefaultCluster -t TopicMsgP2PShard0 -r 1 -w 1
    sh bin/mqadmin updateTopic -c DefaultCluster -t TopicMsgP2PShard1 -r 1 -w 1

14. sh bin/mqadmin updateTopic -c DefaultCluster -t TopicMsgTeamShard0 -r 1 -w 1
    sh bin/mqadmin updateTopic -c DefaultCluster -t TopicMsgTeamShard1 -r 1 -w 1

15. sh bin/mqadmin updateTopic -c DefaultCluster -t TopicMsgBad -r 1 -w 1

16. sh bin/mqadmin updateTopic -c DefaultCluster -t TopicCursorLazy -r 1 -w 1
    sh bin/mqadmin updateTopic -c DefaultCluster -t TopicCursorTail -r 1 -w 1

17. sh bin/mqadmin updateTopic -c DefaultCluster -t TopicUserRegister -r 1 -w 1
    sh bin/mqadmin updateTopic -c DefaultCluster -t TopicUserSocial -r 1 -w 1

sh bin/mqadmin updateTopic -c DefaultCluster -t TopicTeamMember -r 1 -w 1


//////////

18. sh bin/mqshutdown broker

19. sh bin/mqshutdown namesrv

20. sh bin/mqadmin deleteTopic -c DefaultCluster -t TopicCursorHead

21. sh bin/mqadmin consumerProgress

22. sh bin/mqadmin resetOffsetByTime  -t TopicCursorLazy -g ConsumerApiCursor -s 2021-02-14#11:15:00:000

23. sh bin/mqadmin brokerStatus -b localhost:10911

24. sh bin/mqadmin getBrokerConfig -b localhost:10911









