wget https://artifacts.elastic.co/downloads/logstash/logstash-7.1.0.tar.gz

bin/logstash -f conf.d/babel.conf --config.reload.automatic

