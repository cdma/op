1.  https://studygolang.com/dl

https://go.dev/dl/

2.  https://goproxy.cn/

go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct

export GO111MODULE=on
export GOPROXY=https://goproxy.cn





https://www.geeksforgeeks.org/how-to-install-golang-on-centos-7/

rm -rf /usr/local/go && tar -C /usr/local -xzf go1.17.2.linux-amd64.tar.gz

export PATH=$PATH:/usr/local/go/bin

go version

go env -w GOPROXY=https://goproxy.cn,direct



go clean -modcache


/usr/local/go

go/src/runtime/internal/sys/zversion.go
const theVersion = `go1.20.3`
