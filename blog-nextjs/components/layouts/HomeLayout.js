import MetaHead from './MetaHead';
import Navbar from './Navbar';

import styles from "../../styles/components/layouts/HomeLayout.module.scss"


const HomeLayout = ({ children, metaDescription, metaTitle }) => {
    return (
        <>
            <MetaHead description={metaDescription} title={metaTitle}/>
            <Navbar />
            <main className={styles.main}>{children}</main>
        </>
    )
}

export default HomeLayout;