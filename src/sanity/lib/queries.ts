export const moviesQuery = `*[_type == "movie"]{
  _id,
  title,
  director,
  rating,
  budget,
  releaseDate,
  description,
  "poster": poster.asset->url,
  "slug": slug.current
}`;

export const movieBySlugQuery = `*[_type == "movie" && slug.current == $slug][0]{
  _id,
  title,
  director,
  rating,
  budget,
  releaseDate,
  description,
  "poster": poster.asset->url,
  "slug": slug.current
}`;