https://hub.fastgit.org/alibaba/TairString

https://hub.fastgit.org/alibaba/TairHash


mkdir build_  
cd build_  
cmake ../ && make -j


redis.conf:
loadmodule /opt/redis/tairhash_module.so
loadmodule /opt/redis/tairstring_module.so
loadmodule /opt/redis/redisbloom.so

