"use client";

import { useState } from "react";
import MovieModal from "@/components/MovieModal"

export default function AddMovieButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}
                className="px-5 py-2 text-4x1 font-bold">
                Add Movie
            </button>

            { isOpen && <MovieModal onClose={() => setIsOpen(false)} />}
        </>
    );
}