import Layout from '../components/layouts/HomeLayout';
import MetaHead from '../components/layouts/MetaHead';
import Navbar from '../components/layouts/Navbar';

const Blog = () => {
    return (
        <div>
            This is a blog route.
        </div>
    )
}

Blog.getLayout = function getLayout(page) {
    return (
        <Layout>
            <MetaHead description="Ariane.codes" title="Ariane.codes"/>
            <Navbar />
            {page}
        </Layout>
    )
}

export default Blog;