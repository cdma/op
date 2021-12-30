https://www.cnblogs.com/zhaoshizi/p/12154518.html

bin/zookeeper-server-start.sh -daemon config/zookeeper.properties

bin/zookeeper-server-stop.sh config/zookeeper.properties


bin/kafka-server-start.sh -daemon config/server.properties

bin/kafka-server-stop.sh config/server.properties


use:

1. 创建topic

bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test


2. 查看主题

bin/kafka-topics.sh --list --zookeeper localhost:2181

3. 发送消息

bin/kafka-console-producer.sh --broker-list localhost:9094 --topic test

 4. 接收消息

bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning

5. 查看特定主题的详细信息

bin/kafka-topics.sh --zookeeper localhost:2181 --describe  --topic test

6. 删除主题

bin/kafka-topics.sh --zookeeper localhost:2181 --delete  --topic test

