"use client";

import { useState } from "react";
import type { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";
import MovieModal from "@/components/MovieModal";
import { deleteMovie } from "@/app/actions";
import DeleteMovieModal from "./DeleteMovieModal";

type MovieSearchProps = {
  movies: Movie[];
};

export default function MovieSearch({ movies }: MovieSearchProps) {
  const [search, setSearch] = useState("");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);
  const [movieToDelete, setMovieToDelete] = useState<Movie | null>(null);

  const nowShowingMovies = movies.filter(
    (movie) => movie.status === "nowShowing"
  );

  const comingSoonMovies = movies.filter(
    (movie) => movie.status === "comingSoon"
  );

  const filteredNowShowing = nowShowingMovies.filter((movie) =>
  movie.title.toLowerCase().includes(search.toLowerCase()) ||
  movie.director.toLowerCase().includes(search.toLowerCase()));

  const filteredComingSoon = comingSoonMovies.filter((movie) =>
  movie.title.toLowerCase().includes(search.toLowerCase()) ||
  movie.director.toLowerCase().includes(search.toLowerCase()));

  const hasSearchResults = filteredNowShowing.length > 0 || filteredComingSoon.length > 0;

async function handleDelete(movie:Movie) {
  setMovieToDelete(movie);
  setOpenMenuId(null);
}

async function confirmDelete() {
  if(!movieToDelete) return;

  const result = await deleteMovie(movieToDelete._id);

  if(result.success) {
    setMovieToDelete(null);
  }
}

  return (
    <div className="w-full min-w-0">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="mb-6 w-full rounded-lg border p-3"
      />

      {filteredNowShowing.length > 0 && (
      <section className="mb-10">
        <h2 className="mb-4 text-2x1 font-bold">
          Now Showing
        </h2>
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredNowShowing.length > 0 ? ( //Did the user type something?
        filteredNowShowing.map((movie) => ( //If they did then search for it and display

          <MovieCard key={movie._id} movie={movie} menuOpen={openMenuId === movie._id}
          onMenuToggle={() => setOpenMenuId(openMenuId === movie._id ? null : movie._id)}
          onEdit={() => {
            setEditingMovie(movie)
            setOpenMenuId(null)
          }}
          onDelete={() => handleDelete(movie)}/>
        )) //Did you find what the user typed?
        ) : null}
      </div>
      </section> )}

      {filteredComingSoon.length > 0 && (
      <section className="mb-10">
        <h2 className="mb-4 text-2x1 font-bold">
          Coming Soon
        </h2>
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredComingSoon.length > 0 ? ( //Did the user type something?
        filteredComingSoon.map((movie) => ( //If they did then search for it and display

          <MovieCard key={movie._id} movie={movie} menuOpen={openMenuId === movie._id}
          onMenuToggle={() => setOpenMenuId(openMenuId === movie._id ? null : movie._id)}
          onEdit={() => {
            setEditingMovie(movie)
            setOpenMenuId(null)
          }}
          onDelete={() => handleDelete(movie)}/>
        )) //Did you find what the user typed?
        ) : null}
      </div>
      </section>)}

      {search && !hasSearchResults && (
        <p className="mt-4 text-gray-600">
          No Movies Found.
        </p>
      )}

      {editingMovie && (
        <MovieModal
            movie={editingMovie}
            onClose={() => setEditingMovie(null)}
        />
      )}

      {movieToDelete && (
        <DeleteMovieModal movieTitle={movieToDelete.title} onConfirm={confirmDelete} onCancel={() => setMovieToDelete(null)}
        />
      )}
    </div>
  );
}