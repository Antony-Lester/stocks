import db from '../../db/connection';

export default async function createTickerTimeFrameTable(name: string) {
  const query = `CREATE TABLE IF NOT EXISTS public.${name}
  (
      "timestamp" timestamp with time zone NOT NULL,
      open numeric NOT NULL,
      low numeric NOT NULL,
      high numeric NOT NULL,
      close numeric NOT NULL,
      vol numeric NOT NULL,
      metric_adx_a numeric,
      metric_adx_b numeric,
      metric_di_minus_a numeric,
      metric_di_minus_b numeric,
      metric_di_plus_a numeric,
      metric_di_plus_b numeric,
      metric_eom_a numeric,
      metric_eom_b numeric,
      metric_mfi_a numeric,
      metric_mfi_b numeric,
      metric_rsi_a numeric,
      metric_rsi_b numeric,
      metric_sar_a numeric,
      metric_sar_b numeric,
      metric_sc_a numeric,
      metric_sc_b numeric,
      metric_time numeric,
      metric_cp_s3 numeric,
      metric_cp_s2 numeric,
      metric_cp_s1 numeric,
      metric_cp_r1 numeric,
      metric_cp_r2 numeric,
      metric_cp_r3 numeric,
      metric_fpp_s3 numeric,
      metric_fpp_s2 numeric,
      metric_fpp_s1 numeric,
      metric_fpp_r1 numeric,
      metric_fpp_r2 numeric,
      metric_fpp_r3 numeric,
      metric_td_r numeric,
      metric_td_s numeric,
      result_long_1 numeric,
      result_long_2 numeric,
      result_long_3 numeric,
      result_long_4 numeric,
      result_long_5 numeric,
      result_real_1 numeric,
      result_real_2 numeric,
      result_real_3 numeric,
      result_real_4 numeric,
      result_real_5 numeric,
      result_short_1 numeric,
      result_short_2 numeric,
      result_short_3 numeric,
      result_short_4 numeric,
      result_short_5 numeric,
      CONSTRAINT ${name}_pkey PRIMARY KEY ("timestamp")
  )
  
  TABLESPACE pg_default;
  
  ALTER TABLE IF EXISTS public.${name}
      OWNER to postgres;`;

  return await db.query(query).catch(e => {
    console.error(e);
    return null;
  });
}
//.replace(/"/g, "'")
