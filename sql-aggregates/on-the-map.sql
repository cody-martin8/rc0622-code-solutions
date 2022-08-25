select "countries"."name" as "country",
       count("cities".*) as "cityCount"
  from "countries"
  join "cities" using ("countryId")
  group by "countryId";
