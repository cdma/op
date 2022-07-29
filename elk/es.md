wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.1.0-linux-x86_64.tar.gz

bin/elasticsearch -d

curl 'localhost:9200/_cat/indices?v'


tar -xf elasticsearch-7.1.0-linux-x86_64.tar.gz

config/jvm.options
-Xms512m
-Xmx512m


ingest.geoip.downloader.enabled: false

# Enable security features
# xpack.security.enabled: true
xpack.security.enabled: false

# xpack.security.enrollment.enabled: true
xpack.security.enrollment.enabled: false

# Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents
xpack.security.http.ssl:
  enabled: false
  keystore.path: certs/http.p12

# Enable encryption and mutual authentication between cluster nodes
xpack.security.transport.ssl:
  enabled: false


bin/elasticsearch

curl 'localhost:9200'

bin/elasticsearch-plugin list

bin/elasticsearch-plugin install analysis-icu

curl 'localhost:9200/_cat/plugins'

bin/elasticsearch -E node.name=node0 -E cluster.name=geektime -E path.data=node0_data

curl 'localhost:9200/_cat/nodes'

curl 'localhost:9200/_cluster/health'

ps grep|elasticsearch | kill



