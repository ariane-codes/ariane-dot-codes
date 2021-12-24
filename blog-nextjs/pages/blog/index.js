import HomeLayout from '../../components/layouts/HomeLayout';

const Blog = () => {
    return (
        <div>
            This is a blog route.
        </div>
    )
}

Blog.getLayout = function getLayout(page) {
    return (
        <HomeLayout metaDescription="Ariane.codes" metaTitle="Ariane">
            {page}
        </HomeLayout>
    )
}

export default Blog;