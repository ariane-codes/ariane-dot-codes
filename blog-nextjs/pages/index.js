import Layout from '../components/layouts/HomeLayout';
import MetaHead from '../components/layouts/MetaHead';
import Navbar from '../components/layouts/Navbar';

import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <>
        <section className={styles.firstsection}>
        Home
        </section>
        
    </>
  )
}


// I'm leaving this here in case I wanna change the description or title of the page.
Home.getLayout = function getLayout(page) {
    return (
        <Layout metaDescription="Ariane.codes" metaTitle="Ariane">
            {page}
        </Layout>
    )
}
