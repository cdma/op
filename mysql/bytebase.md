https://www.bytebase.com/docs/install/install-with-docker

docker run --init \
  --name bytebase \
  --restart always \
  --add-host host.docker.internal:host-gateway \
  --publish 5678:5678 \
  --volume ~/.bytebase/data:/var/opt/bytebase \
  bytebase/bytebase:1.1.1 \
  --data /var/opt/bytebase \
  --host http://192.168.0.106 \
  --port 5678 
  



docker restart bytebase

docker ps  -a|grep bytebase

docker rm bytebase


https://www.bytebase.com/zh


http://192.168.0.106:5678/
