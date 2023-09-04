import db from '../../db/connection';

export default async function createTickersTable() {
  return await db
    .query(
      `CREATE TABLE IF NOT EXISTS public.tickers
      (
          ticker text COLLATE pg_catalog."default" NOT NULL,
          exchange text COLLATE pg_catalog."default" NOT NULL,
          class text COLLATE pg_catalog."default",
          name text COLLATE pg_catalog."default",
          id text COLLATE pg_catalog."default" NOT NULL,
          status text COLLATE pg_catalog."default",
          tradable boolean DEFAULT false,
          marginable boolean DEFAULT false,
          shortable boolean DEFAULT false,
          easy_to_borrow boolean DEFAULT false,
          fractionable boolean DEFAULT false,
          maintenance_margin_requirement numeric DEFAULT 100,
          min_order_size numeric,
          min_trade_increment numeric,
          price_increment numeric,
          CONSTRAINT tickers_pkey PRIMARY KEY (id)
      )
      
      TABLESPACE pg_default;
      
      ALTER TABLE IF EXISTS public.tickers
          OWNER to postgres;`
    )
    .catch(e => console.warn(e));
}
