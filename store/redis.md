1. https://www.linode.com/docs/guides/install-and-configure-redis-on-centos-7/

2. yum install epel-release

3. yum install redis

4. systemctl start redis

5. systemctl enable redis

6. redis-cli ping


redis 4.0
1. https://computingforgeeks.com/how-to-install-latest-redis-on-centos-7/

2. sudo yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm

3. sudo yum --enablerepo=remi install redis

4. rpm -qi redis 

5. sudo systemctl enable --now redis

6. sudo systemctl restart redis

7. sudo systemctl status  redis

8. sudo ss -tunelp | grep 6379



https://hub.fastgit.org/alibaba/TairHash

1. mkdir build_ &&  cd build_

2. cmake -DSORT_MODE=yes ../ && make -j

3. https://redis.io/topics/modules-intro
redis.conf:
loadmodule /path/to/mymodule.so

dynamic:
MODULE LIST

MODULE LOAD ../TairHash/lib/tairhash_module.so





