在Spring中使用GraphQL Java
https://juejin.cn/post/7071501583632039966

https://juejin.cn/post/7066790731892916238
mkdir my-first-graphql
cd my-first-graphql
npm init
npm i express graphql express-graphql

node ./index.js
http://localhost:4000/graphql


query{
  hello   
}

query{
  books {
    id,
    name,
    author,
  }
}

query{
  authors {
    id,
    name,
    desc,
  }   
}

query{
  books {
    id,
    name,
    author,
  },
  authors {
    id,
    name,
    desc,
  }
}

query{
  booksByAuthor(name: "张三") {
    id,
    name,
    author,
  }
}

mutation {
  addBook(name: "宇宙镜头", authorId:1) {
    name,
    id
  }
}


postman:
http://localhost:4000/graphql
post, raw, json
{
    "query": "{books {id,name,author}}"
}





Nest+GrqphQL+Prisma+React全栈开发(一)-Graphql篇
https://juejin.cn/post/7066613652920467487

使用速率限制和深度限制确保GraphQL API的安全
https://juejin.cn/post/7067112051440615460

用GraphQL API网关改进微服务架构
https://juejin.cn/post/7062548653864550431

为GraphQL设计一个基于URL的查询语法
https://juejin.cn/post/6977183882718216199

Graphql+SpringBoot看这一篇就够了
https://juejin.cn/post/7066694688090095652

