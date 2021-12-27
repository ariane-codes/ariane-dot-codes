import sanityClient from "@sanity/client";

const SanityClient = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2021-12-27",
    useCdn: true,
})

export default SanityClient;