https://github.com/alibaba/canal/wiki/QuickStart

对于自建 MySQL , 需要先开启 Binlog 写入功能，配置 binlog-format 为 ROW 模式，my.cnf 中配置如下

[mysqld]
log-bin=mysql-bin # 开启 binlog
binlog-format=ROW # 选择 ROW 模式
server_id=1 # 配置 MySQL replaction 需要定义，不要和 canal 的 slaveId 重复
注意：针对阿里云 RDS for MySQL , 默认打开了 binlog , 并且账号默认具有 binlog dump 权限 , 不需要任何权限或者 binlog 设置,可以直接跳过这一步
授权 canal 链接 MySQL 账号具有作为 MySQL slave 的权限, 如果已有账户可直接 grant

CREATE USER canal IDENTIFIED BY 'canal';  
GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'canal'@'%';
-- GRANT ALL PRIVILEGES ON *.* TO 'canal'@'%' ;
FLUSH PRIVILEGES;

deploy:
mkdir /tmp/canal
tar zxvf canal.deployer-$version.tar.gz  -C /tmp/canal

conf/example/instance.properties

## mysql serverId
canal.instance.mysql.slaveId = 1234
#position info，需要改成自己的数据库信息
canal.instance.master.address = 127.0.0.1:3306 
canal.instance.master.journal.name = 
canal.instance.master.position = 
canal.instance.master.timestamp = 
#canal.instance.standby.address = 
#canal.instance.standby.journal.name =
#canal.instance.standby.position = 
#canal.instance.standby.timestamp = 
#username/password，需要改成自己的数据库信息
canal.instance.dbUsername = canal  
canal.instance.dbPassword = canal
canal.instance.defaultDatabaseName =
canal.instance.connectionCharset = UTF-8
#table regex
canal.instance.filter.regex = .\*\\\\..\*

sh bin/startup.sh

sh bin/stop.sh




https://github.com/alibaba/canal/wiki/Canal-Kafka-RocketMQ-QuickStart



https://www.2cto.com/database/201609/547661.html

canal.instance.filter.regex	mysql 数据解析关注的表，Perl正则表达式.多个正则之间以逗号(,)分隔，转义符需要双斜杠(\\)
常见例子：
1. 所有表：.* or .*\\..*
2. canal schema下所有表： canal\\..*
3. canal下的以canal打头的表：canal\\.canal.*
4. canal schema下的一张表：canal.test1
5. 多个规则组合使用：canal\\..*,mysql.test1,mysql.test2 (逗号分隔)
注意：此过滤条件只针对row模式的数据有效(ps. mixed/statement因为不解析sql，所以无法准确提取tableName进行过滤)



mq:

export NAMESRV_ADDR="127.0.0.1:9876;127.0.0.1:9876"

sh bin/mqadmin updateTopic -c DefaultCluster -t babel_msg -r 1 -w 1

sh bin/mqadmin updateTopic -c DefaultCluster -t babel_msg_version -r 1 -w 1

sh bin/mqadmin updateTopic -c DefaultCluster -t babel_team_msg -r 1 -w 1

sh bin/mqadmin updateTopic -c DefaultCluster -t babel_team_msg_version -r 1 -w 1





