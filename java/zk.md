https://zookeeper.apache.org/doc/current/zookeeperStarted.html

cp conf/zoo_sample.cfg conf/zoo.cfg

bin/zkServer.sh start

bin/zkCli.sh -server 127.0.0.1:2181

bin/zkServer.sh stop

