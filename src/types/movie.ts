export type Movie = {
    _id: string;
    title: string;
    status: "nowShowing" | "comingSoon";
    director: string;
    rating: string;
    budget: number;
    releaseDate: string;
    description: string;
    poster: string;
    slug: string;
};