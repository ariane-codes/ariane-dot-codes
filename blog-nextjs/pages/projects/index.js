import HomeLayout from '../../components/layouts/HomeLayout';

const Projects = () => {
    return (
        <div>
            This is a projects route.
        </div>
    )
}

Projects.getLayout = function getLayout(page) {
    return (
        <HomeLayout metaDescription="Ariane.codes" metaTitle="Ariane">
            {page}
        </HomeLayout>
    )
}

export default Projects;