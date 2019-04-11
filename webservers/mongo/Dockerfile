FROM mongo

LABEL maintainer="Zhqqiu <qiuxiaoweioo@gmail.com>"

# 将本地的setup.js映射到Docker容器中
COPY conf/setup.js /docker-entrypoint-initdb.d/setup.js
# 复制配置文件
COPY conf/mongodb.conf /usr/local/mongodb/mongo.conf
# running
CMD mongod --config mongo.conf