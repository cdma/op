https://www.jianshu.com/p/79807449da2d

_ "net/http/pprof"

log.Fatal(http.ListenAndServe("0.0.0.0:8080", nil))

go tool pprof http://localhost:8081/debug/pprof/profile

