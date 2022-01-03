import MetaHead from './MetaHead';
import Navbar from './Navbar';
import Footer from './Footer';

import styles from "../../styles/components/layouts/HomeLayout.module.scss"


const HomeLayout = ({ children, metaDescription, metaTitle }) => {
    return (
        <>
            <MetaHead description={metaDescription} title={metaTitle}/>
            <Navbar />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <span>© 2021 Ariane.codes</span>
            </footer>
        </>
    )
}

export default HomeLayout;