import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

console.log("Sanity token loaded:", !!process.env.SANITY_API_TOKEN);

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});