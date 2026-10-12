"use client";

type DeleteMovieModalProps = {
    movieTitle: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function DeleteMovieModal({
    movieTitle,
    onConfirm,
    onCancel,
}: DeleteMovieModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg=black/50p p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 text-black shadow-x1 dark:bg-gray-900 dark:text-white">
                <h2 className="mb-3 text-x1 font-bold">
                    Delete Movie?
                </h2>

                <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">{movieTitle}</span>?
                    This action cannot be undone.
                </p>

                <div className="flex justify-end gap-3">
                    <button onClick={onCancel}
                    className="rounded-lg border pc-4 py-2 px-2">
                        Cancel
                    </button>

                    <button onClick={onConfirm}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}