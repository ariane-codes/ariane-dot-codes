import HomeLayout from '../components/layouts/HomeLayout';
import Presentation from '../components/pages/home/Presentation';

import { fetchPlainTexts } from '../lib/sanity/fetchPlainTexts';

import styles from '../styles/pages/Home.module.scss'

const Home = ({ paragraph1 }) => {
    return (
        <>
            <Presentation paragraph1={paragraph1}/>
        </>
    )
}

export const getStaticProps = async () => {
    const paragraph1 = await fetchPlainTexts("04512455-a84a-48f4-a96d-5d26ce16be33")

    return {
        props: {
            paragraph1
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