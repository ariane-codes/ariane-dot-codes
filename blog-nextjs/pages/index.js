import HomeLayout from '../components/layouts/HomeLayout';
import Presentation from '../components/pages/home/Presentation';

import styles from '../styles/pages/Home.module.scss'

export default function Home() {
    return (
        <>
            <Presentation/>
        </>
    )
}


// I'm leaving this here in case I wanna change the description or title of the page.
Home.getLayout = function getLayout(page) {
    return (
        <HomeLayout metaDescription="Ariane.codes" metaTitle="Ariane">
            {page}
        </HomeLayout>
    )
}
