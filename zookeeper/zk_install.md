https://zookeeper.apache.org/doc/current/zookeeperStarted.html

conf/zoo.cfg

cp conf/zoo_sample.cfg conf/zoo.cfg

tickTime=2000
dataDir=/var/lib/zookeeper
clientPort=2181


bin/zkServer.sh start

bin/zkCli.sh -server 127.0.0.1:2181


