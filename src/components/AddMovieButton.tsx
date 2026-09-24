"use client";

import { useState } from "react";
import MovieModal from "@/components/MovieModal"

export default function AddMovieButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                Add Movie
            </button>

            { isOpen && <MovieModal onClose={() => setIsOpen(false)} />}
        </>
    );
}