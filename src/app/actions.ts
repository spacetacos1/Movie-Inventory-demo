"use server";

import { writeClient } from "@/sanity/lib/writeClient";

export async function createMovie(formData: FormData) {
    console.log("Server received form data");

    const title = formData.get("title");
    const director = formData.get("director");
    const rating = formData.get("rating");
    const budget = formData.get("budget");
    const releaseDate = formData.get("releaseDate");
    const description = formData.get("description");
    const poster = formData.get("poster");

    if (!(poster instanceof File)) {
        throw new Error("Poster is required");
    }

    const posterBuffer = Buffer.from(await poster.arrayBuffer());

    //Creates an image asset in Sanity
    const posterAsset = await writeClient.assets.upload(
        "image",
        posterBuffer,
    );

    const movie = await writeClient.create({
    _type: "movie",
    title,
    director,
    rating,
    budget: Number(budget),
    releaseDate,
    description,
    poster: {
        _type: "image",
        asset: {
            _type: "reference",
            _ref: posterAsset._id,
        },
    },
});

    console.log(movie);

    console.log(posterAsset);
}