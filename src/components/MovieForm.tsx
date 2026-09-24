"use client";

import React from "react";
import {createMovie} from "@/app/actions";

export default function MovieForm() { //Note: Because this is a component, is must be a function

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

        await createMovie(formData);
    }
    return(
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title">
                Title
            </label>
            <input id="title" name="title" type="text" />
            </div>

            <div>
            <label htmlFor="director">
                Director
            </label>
            <input id="director" name="director" type="text" />
            </div>

            <div>
            <label htmlFor="rating">
                Rating
            </label>
            <select id="rating" name="rating">
                <option value="">Select a rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            </div>

            <div>
            <label htmlFor="budget">
                Budget
            </label>
            <input id="budget" name="budget" type="number" />
            </div>

            <div>
            <label htmlFor="releaseDate">
                Release Date
            </label>
            <input id="releaseDate" name="releaseDate" type="date" />
            </div>

            <div>
            <label htmlFor="description">
                Description
            </label>
            <input id="description" name="description" type="textarea" />
            </div>

            <div>
            <label htmlFor="poster">
                Poster
            </label>
            <input id="poster" name="poster" type="file" accept="image/*"/>
            </div>

            <div>
            <button type="submit">
                Add Movie
            </button>
            </div>
        </form>
    );
}