select "genres"."name" as "genreName",
       count("filmGenre"."filmId") as "filmCount"
  from "genres"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
 where "actors"."firstName" = 'Lisa'
 group by "genreId"
