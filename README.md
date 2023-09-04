### stocks

Typescript stocks downloader with metrics processing for ML

# env setup (dev)

$ sudo -u postgres psql
postgres=# create database stockstest;
postgres=# create user stockstest with encrypted password 'password';
postgres=# CREATE DATABASE stockstest;
postgres=# grant all privileges on database stockstest to stockstest;

$ npm run setup-test

# env setup (prod)

$ sudo -u postgres psql
postgres=# create database stocks;
postgres=# create user stocks with encrypted password 'password';
postgres=# CREATE DATABASE stocks;
postgres=# grant all privileges on database stocks to stocks;

$ npm run setup-prod
