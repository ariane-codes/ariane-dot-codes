import sanityClient from "./sanityClient"

export const fetchPlainTexts = async (uuid) => {

    if (!uuid || uuid === "") throw Error("No UUID for the Sanity request.")

    try {
        let groq = `*[_type == 'plainText' && uuid == "${uuid}"]`;
        const plainTextResult = await sanityClient.fetch(groq);
        
        if (plainTextResult.length === 0) {
            throw Error(`No plain text found for UUID ${uuid}`);
        }

        return plainTextResult[0];

    } catch (err) {
        console.log(err);
        throw err;

    }

}