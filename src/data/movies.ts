import type { Movie } from "@/types/movie";

export const movies: Movie[] = [
  {
    title: "The Matrix",
    director: "The Wachowskis",
    rating: "R",
    budget: 63000000,
    releaseDate: "1999-03-31",
    description:
      "A computer hacker discovers that the world he knows is an elaborate simulation and joins a rebellion against the machines controlling humanity.",
    poster: "/posters/the-matrix.jpg",
  },
  {
    title: "Jurassic Park",
    director: "Steven Spielberg",
    rating: "PG-13",
    budget: 63000000,
    releaseDate: "1993-06-11",
    description:
      "A group of visitors become trapped on an island where genetically engineered dinosaurs have escaped from their enclosures.",
    poster: "/posters/jurassic-park.jpg",
  },
  {
    title: "Back to the Future",
    director: "Robert Zemeckis",
    rating: "PG",
    budget: 19000000,
    releaseDate: "1985-07-03",
    description:
        "A teenager accidentally travels back in time to 1955 and must make sure his parents fall in love before finding a way back to the future.",
    poster: "/posters/back-to-the-future.jpg",
  },
];