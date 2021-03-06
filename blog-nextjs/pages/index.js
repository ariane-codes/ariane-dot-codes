import HomeLayout from '../components/layouts/HomeLayout';
import Presentation from '../components/pages/home/Presentation';
import Projects from '../components/pages/home/Projects';

import { fetchPlainTexts } from '../lib/sanity/fetchPlainTexts';
import { fetchProjects } from '../lib/sanity/fetchProjects';

import styles from '../styles/pages/Home.module.scss'

const Home = ({ paragraph1, paragraph2, projectsDescription, projects }) => {
    return (
        <>
            <Presentation paragraph1={paragraph1} paragraph2={paragraph2}/>
            <Projects description={projectsDescription} projects={projects}/>
        </>
    )
}

export const getServerSideProps = async context => {
    // Fetching the two paragraphs for the Presentation page.
    const paragraph1 = await fetchPlainTexts("04512455-a84a-48f4-a96d-5d26ce16be33");
    const paragraph2 = await fetchPlainTexts("be2d5898-1fe3-4c25-9873-1d05345062df");
    const projectsDescription = await fetchPlainTexts("dbc47859-bf5d-4e7c-b2eb-7a85d68a9fb7");
    const projects = await fetchProjects();

    // Returning props for the Home() component.
    return {
        props: {
            paragraph1,
            paragraph2,
            projectsDescription,
            projects
        }
    }
}

// I'm leaving this here in case I wanna change the description or title of the page.
Home.getLayout = function getLayout(page) {
    return (
        <HomeLayout metaDescription="Ariane.codes" metaTitle="Ariane">
            {page}
        </HomeLayout>
    )
}

export default Home;