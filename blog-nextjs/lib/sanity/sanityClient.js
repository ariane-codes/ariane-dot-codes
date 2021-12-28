import sanityClient from "@sanity/client";

const SanityClient = sanityClient({
    projectId: "q9kwn69s",
    dataset: "production",
    apiVersion: "2021-12-27",
    useCdn: true,
})

export default SanityClient;