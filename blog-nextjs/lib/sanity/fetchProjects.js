import SanityClient from "./sanityClient";

export const fetchProjects = async () => {
    try {
        let groq = "*[_type == 'project']";
        const fetchedProjects = await SanityClient.fetch(groq);
        return fetchedProjects;

    } catch (err) {
        
        console.log(err);
        throw err;
    }
}