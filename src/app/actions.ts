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
    slug: {
    _type: "slug",
    current: String(title).toLowerCase().replace(/\s+/g, "-"),
    },
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

    return { success: true };
}

export async function updateMovie(id: string, formData: FormData) {
    const title = formData.get("title");
    const director = formData.get("director");
    const rating = formData.get("rating");
    const budget = formData.get("budget");
    const releaseDate = formData.get("releaseDate");
    const description = formData.get("description");
    const poster = formData.get("poster");

    const updatedFields = {
        title,
        slug: {
            _type: "slug" as const,
            current: String(title).toLowerCase().replace(/\s+/g, "-"),
        },
        director,
        rating,
        budget: Number(budget),
        releaseDate,
        description,
    };

    // Update the movie's text fields first.
    let update = writeClient.patch(id).set(updatedFields);

    // Only upload a new poster if the user selected one.
    if (poster instanceof File && poster.size > 0) {
        const posterBuffer = Buffer.from(await poster.arrayBuffer());

        const posterAsset = await writeClient.assets.upload(
            "image",
            posterBuffer,
        );

        update = update.set({
            poster: {
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: posterAsset._id,
                },
            },
        });
    }

    await update.commit();

    return { success: true };
}