https://developer.aliyun.com/article/671003?spm=a2c6h.17698244.wenzhang.1.65a02d20kqtGyE

mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

更改CentOS-Media.repo使其为不生效：
enabled=0

yum clean all

yum makecache

