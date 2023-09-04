# stocks

Typescript stocks downloader with metrics processing for ML

# env setup (dev)
$ sudo -u postgres psql 
(psql)
$ CREATEUSER -P stocks-test;
(Enter PASSWORD FOR the NEW ROLE: password)

$ CREATEDB -O stocks-test stocks-test;

$ ALTER USER stocks-test SET search_path='stocks-test, "$user", public';

$ ALTER DEFAULT PRIVILEGES IN SCHEMA stocks-test GRANT ALL
ON TABLES TO ADMIN;

$ npm run setup-dev

# env setup (prod)
$ sudo -u postgres psql 
(psql)
$ CREATEUSER -P stocks;
(Enter PASSWORD FOR the NEW ROLE: password)

$ CREATEDB -O stocks stocks;

$ ALTER USER stocks SET search_path='stocks, "$user", public';

$ ALTER DEFAULT PRIVILEGES IN SCHEMA stocks GRANT ALL
ON TABLES TO ADMIN;

$ npm run setup-dev
