https://hub.fastgit.org/alibaba/TairString

https://hub.fastgit.org/alibaba/TairHash


mkdir build_  
cd build_  
cmake ../ && make -j


redis.conf:
loadmodule /home/op/soft/cache/TairHash/lib/tairhash_module.so
loadmodule /home/op/soft/cache/TairString/lib/tairstring_module.so
