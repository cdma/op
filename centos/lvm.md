https://serverfault.com/questions/861517/centos-7-extend-partition-with-unallocated-space

lsblk

parted ---pretend-input-tty /dev/sda resizepart 2 100%;
partx -u /dev/sda; pvresize /dev/sda2;
lvextend -r centos/root /dev/sda2

