dev_tools

GET /_cat/nodes

GET kibana_sample_data_ecommerce

GET kibana_sample_data_ecommerce/_count

GET _cluster/health

GET /_cat/shards


uri search和 Query String 一般不用
Query Match经常使用

指定字段 q=title：2012
泛查询   q=2012

Term Query      Beautiful Mind 等效于  Beautiful OR Mind, 不对查询目标做分词
keyword Query

Match Phrase Query   "Beautiful Mind" 等效于  Beautiful AND Mind 并保持前后顺序， 对查询目标做分词， slop指定中间可以有多少个无关term

Match Query    对查询目标做分词， operator缺省是OR

Bool Query     布尔组合查询
boosting Query 算分组合查询
DisMaxQuery
multi_match best_fields, cross_fields



https://www.jianshu.com/p/eb1b22e865ff
