
1. https://hub.fastgit.org/alibaba/tair/wiki/Tair-编译安装方法

git clone https://github.com/alibaba/tair.git

sudo yum install -y openssl-devel libcurl-devel


sudo yum install automake libtool gcc-c++

./configure --prefix=/home/op/soft/tair_bin

./bootstrap.sh


make -j && make install


2. https://hub.fastgit.org/alibaba/tair/wiki/Tair-最小化配置方法


tree tair_bin

cat /etc/fstab | grep /dev/shm

df -h | grep /dev/shm

cp etc/configserver.conf.default etc/configserver.conf

cp etc/group.conf.default etc/group.conf

cp etc/dataserver.conf.default etc/dataserver.conf



./tair.sh start_ds

./tair.sh start_cs

ps aux | grep tair


3. sbin/tairclient -c 127.0.0.1:5198 -g group_test

 put key value

 get key

 remove key

 delall 0 all

 ./tair.sh stop_ds

 ./tair.sh stop_cs













mvn install:install-file -DgroupId=com.taobao.tair -DartifactId=tair-client -Dversion=2.3.5 -Dpackaging=jar -Dfile=./target/tair-client-2.3.5-sources.jar
