export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "mainImage",
            title: "Main Image",
            type: "image"
        },
        {
            name: "screenshots",
            title: "Screenshots",
            type: "array",
            of: [{type: "image"}]
        },
        {
            name: "repoLink",
            title: "Repo Link",
            type: "url"
        },
        {
            name: "liveSite",
            title: "Live Site",
            type: "url"
        },
        {
            name: "shortDescription",
            title: "Short Description",
            type: "text"
        },
        {
            name: "techStack",
            title: "Tech Stack",
            type: "array",
            of: [{type: "string"}]
        },
        {
            name: "associatedBlogPosts",
            title: "Associated Blog Posts",
            type: "array",
            of: [{type: "reference", to: {type: "post"}}]
        },
        {
            name: "longerDescription",
            title: "LongerDescription",
            type: "blockContent"
        }
    ]
}