import MetaHead from './MetaHead';
import Navbar from './Navbar';

import styles from "../../styles/components/layouts/HomeLayout.module.scss"


const Layout = ({ children, metaDescription, metaTitle }) => {
    return (
        <>
            <MetaHead description={metaDescription} title={metaTitle}/>
            <Navbar />
            <main >{children}</main>
        </>
    )
}

export default Layout;