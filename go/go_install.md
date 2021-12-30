1.  https://studygolang.com/dl

2.  https://goproxy.cn/

go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct

export GO111MODULE=on
export GOPROXY=https://goproxy.cn





http://docs.studygolang.com/doc/install

linux:

rm -rf /usr/local/go

tar -C /usr/local -xzf go1.14.3.linux-amd64.tar.gz

export PATH=$PATH:/usr/local/go/bin

go version


