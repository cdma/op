http://dev.mysql.com/downloads/repo/yum/ 
wget http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm
yum localinstall mysql57-community-release-el7-8.noarch.rpm
yum repolist enabled | grep "mysql.*-community.*"
yum install mysql-community-server
yum install mysql-devel

systemctl start mysqld
grep 'temporary password' /var/log/mysqld.log
SET PASSWORD = PASSWORD('Abc1234!');
mysqladmin -uroot -p123456 status   

use mysql
GRANT ALL ON *.* to root@'%' IDENTIFIED BY 'Abc1234!';
FLUSH PRIVILEGES;



show status like 'Threads%';
select sleep(2);

SET GLOBAL validate_password_policy=LOW;
uninstall plugin validate_password;
GRANT ALL PRIVILEGES ON shop.* TO 'shop'@'%' IDENTIFIED BY '123456';
GRANT select,insert,update ON db_xtime.* TO 'xtime'@'%' IDENTIFIED BY '123456';
set password for root@localhost = password('123456');
flush privileges;


ALTER TABLE user_customer_permission MODIFY id INT NOT NULL;
ALTER TABLE user_customer_permission DROP PRIMARY KEY;
show global variables like 'general_log';
show variables like 'general_log_file';
show variables like '%general%'
SET GLOBAL general_log = 'On';
SET GLOBAL general_log_file = 'E:/my.log';
alter table busiid_counter AUTO_INCREMENT=3000000;
ALTER TABLE busiid_counter ENGINE=InnoDB;
SHOW INDEX FROM config_info;
show table status\G
mysqldump -u root -p --no-data dbname > schema.sql
mysqld --verbose --help|grep -A 1 'Default options'


mysql -uroot -p --default-character-set=utf8mb4


mysqldump -uxxx -p --flush-logs --delete-master-logs --single-transaction  --all-databases > alldb.sql






SHOW STATUS WHERE `variable_name` = 'Threads_connected'
show variables like '%max_connections%';
set global validate_password_length=1;
show variables like ‘max_allowed_packet'

systemctl stop mysqld
sudo mysqld_safe --skip-grant-tables --skip-networking &
/usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid --skip-grant-tables --skip-networking --user=root

ALTER table t_small_video add like_num int(11)  GENERATED ALWAYS as (like_num_recent+like_num_has) VIRTUAL

