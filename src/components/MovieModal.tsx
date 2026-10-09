"use client";

import MovieForm from "@/components/MovieForm";
import type { Movie } from "@/types/movie";

type MovieModalProps = {
    onClose: () => void; //onClose is the name of the prop, () => void , means it's a functions
    movie?: Movie;
};

export default function MovieModal({ onClose,movie }: MovieModalProps) { //takes the onClose prop and makes it available inside the component
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 pb-20"> 
            <div className="relative w-full max-w-lg rounded-lg bg-white p-6 text-black dark:bg-gray-900 dark:text-white">
                <button onClick={onClose} className="absolute right-4 top-4" aria-label="Close">
                        
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                        </svg>

                </button>

                <MovieForm movie={movie} />

            </div>
        </div>
    );
}