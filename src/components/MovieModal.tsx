"use client";

import MovieForm from "@/components/MovieForm";

type MovieModalProps = {
    onClose: () => void; //onClose is the name of the prop, () => void , means it's a functions
};

export default function MovieModal({ onClose }: MovieModalProps) { //takes the onClose prop and makes it available inside the component
    return(
        <div className="fixed inset-0 bg-black/50">
            <div className="mx-auto mt-20 w-full max-w-lg rounded-lg bg-white p-6 text-black">
                <button onClick={onClose} className="absolute left-4 top-4">
                    X
                </button>

                <MovieForm />

            </div>
        </div>
    );
}