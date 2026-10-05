"use client";

import React from "react";
import {createMovie} from "@/app/actions";
import {useState} from "react";

export default function MovieForm() { //Note: Because this is a component, is must be a function

    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const formData = new FormData(event.currentTarget as HTMLFormElement);

        //Data submited by the user
        const data = Object.fromEntries(formData.entries());

        //Check title, director, and description
        if(!data.title || !data.director || !data.description) {
            console.log("Title, Director, and Description are required");
            return;
        }

        //Valid Ratings
        const validRatings = ["G", "PG", "PG-13", "R", "NC-17"];

        //Rating validation
        if(!validRatings.includes(data.rating as string)) {
            console.log("Invalid Rating");
            return;
        }

        //Budget validation
        const budget = Number(data.budget); //must convert to number because data.budget is a string

        if (!budget || budget < 0) {
            console.log("Budget must be a valid number");
            return;
        }

        //Release Data validation
        if(!data.releaseDate) {
            console.log("Release Date is required");
            return;
        }

        //Poster validation
        const poster = data.poster;

        if(!(poster instanceof File) || poster.size === 0) {
            console.log("Poster is required");
            return;
        }

        console.log(data);

        const result = await createMovie(formData);
        
        if(result.success) {
            setSuccess(true);
        }
    }
    return(
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
            <label htmlFor="title">
                Title
            </label>
            <input id="title" name="title" type="text" required className="rounded-md border bg-white px-3 py-2 text-black dark:bg-gray-900 dark:text-white" />
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="director">
                Director
            </label>
            <input id="director" name="director" type="text" required className="rounded-md border bg-white px-3 py-2 text-black dark:bg-gray-900 dark:text-white"/>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="rating">
                Rating
            </label>
            <select id="rating" name="rating" required className="rounded-md border bg-white px-3 py-2 text-black dark:bg-gray-900 dark:text-white">
                <option value="">Select a rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="budget">
                Budget
            </label>
            <input id="budget" name="budget" type="number" min="0" required className="rounded-md border bg-white px-3 py-2 text-black dark:bg-gray-900 dark:text-white"/>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="releaseDate">
                Release Date
            </label>
            <input id="releaseDate" name="releaseDate" type="date" required className="rounded-md border bg-white px-3 py-2 text-black dark:bg-gray-900 dark:text-white"/>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="description">
                Description
            </label>
            <input id="description" name="description" type="textarea" required className="rounded-md border bg-white px-3 py-2 text-black dark:bg-gray-900 dark:text-white"/>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="poster">
                Poster
            </label>
            <input id="poster" name="poster" type="file" accept="image/*" required className="rounded-md border bg-white px-3 py-2 text-black dark:bg-gray-900 dark:text-white"/>
            </div>

            {success && (
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    Movie added successfully!
                </p>
            )}
            <div className="flex flex-col gap-2">
            <button type="submit" className="rounded-md bg-blue-600 px-5 py-2 text-lg font-semibold text-white hover:bg-blue-700">
                Add Movie
            </button>
            </div>
        </form>
    );
}