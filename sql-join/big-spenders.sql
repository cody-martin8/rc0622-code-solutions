select "cust"."firstName",
       "cust"."lastName",
       "pay"."amount"
  from "customers" as "cust"
  join "payments" as "pay" using ("customerId")
  order by "pay"."amount" DESC
  limit 10;
