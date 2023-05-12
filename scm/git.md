git config --system core.longpaths true

git clone -c core.longpaths=true <repo-url>

  

https://www.jianshu.com/p/739f139cf13c

git config --global https.proxy http://192.168.0.100:8080
//https
git config --global https.proxy https://192.168.0.100:8080
//使用socks5代理的 例如ss，ssr 1080是windows下ss的默认代理端口,mac下不同，或者有自定义的，根据自己的改
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080

//只对github.com使用代理，其他仓库不走代理
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
git config --global https.https://github.com.proxy socks5://127.0.0.1:1080
//取消github代理
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy

//取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy


git init
git st
git add .
 git commit -am"comment"

 git co -b branch