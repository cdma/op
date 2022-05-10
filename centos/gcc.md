https://www.zhangfangzhou.cn/centos7-devtoolset8-gcc.html

yum install centos-release-scl -y
yum install devtoolset-8 -y

scl enable devtoolset-8 -- bash
source /opt/rh/devtoolset-8/enable

or
export CC=/opt/rh/devtoolset-8/root/usr/bin/gcc
export CPP=/opt/rh/devtoolset-8/root/usr/bin/cpp
export CXX=/opt/rh/devtoolset-8/root/usr/bin/c++

