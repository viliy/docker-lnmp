FROM php:5.6-fpm-alpine

LABEL maintainer="Zhqqiu <qiuxiaoweioo@gmail.com>"

# 安装扩展
RUN docker-php-ext-install bcmath pdo pdo_mysql mysql mysqli pcntl

# 安装 redis 扩展
RUN apk add --no-cache --update libmemcached-libs zlib \
    && set -xe \
    && apk add --no-cache --update --virtual .phpize-deps $PHPIZE_DEPS \
    && pecl install -o -f redis \
    && docker-php-ext-enable redis

# 安装 gd 扩展
RUN apk add --no-cache freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev \
    && docker-php-ext-install gd

# 安装 zip bz2 扩展
RUN apk add --no-cache bzip2-dev \
    && docker-php-ext-install zip bz2

# 安装 xdebug
RUN pecl install xdebug-2.5.5 \
    && docker-php-ext-enable xdebug

# 安装 memcached
RUN apk add --update --no-cache libmemcached-dev \
    && pecl install memcached-2.2.0 \
    && docker-php-ext-enable memcached

# 安装 mongodb
RUN pecl install mongodb-1.5.3 \
    && docker-php-ext-enable mongodb

# 安装 xhprof
RUN wget https://github.com/phacility/xhprof/archive/master.zip \
    && unzip master.zip \
    && cd xhprof-master/extension \
    && phpize \
    && ./configure --with-php-config=php-config \
    && make && make install \
    && docker-php-ext-enable xhprof \
    && unlink ../../master.zip \
    && rm -rf ../../xhprof-master


# 安装 composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && unlink composer-setup.php \
    && mv composer.phar /usr/local/bin/composer

# 镜像源：laravel
#RUN composer config -g repo.packagist composer https://packagist.laravel-china.org
# 清理
RUN rm -rf /usr/local/src/* \
    && rm -rf /tmp/pear/download/* \
    && rm -rf /tmp/pear/cache/*

EXPOSE 9000
