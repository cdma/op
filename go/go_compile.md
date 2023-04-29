CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build


go mod download -x


go mod download golang.org/x/mod


go test -v ws_client_test.go











