( cd ~/soft/mq/rocketmq-all-4.6.1-bin-release &&  sh bin/mqshutdown broker && sh bin/mqshutdown namesrv )

( cd ~/logs/rocketmqlogs && rm -f *.log && rm -rf otherdays )

( cd ~/logs/babel/otherdays && rm -f *.log.gz )

( cd ~/logs/nacos && rm -f naming.log.* )

( cd ~/soft/mq/rocketmq-all-4.6.1-bin-release ; eval 'nohup sh bin/mqnamesrv &' ; eval 'nohup sh bin/mqbroker -n localhost:9876  -c ./conf/brokerA.conf &' )
