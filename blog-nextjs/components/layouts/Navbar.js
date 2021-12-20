import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../../styles/components/layouts/Navbar.module.scss";

const Navbar = () => {

    const { asPath } = useRouter();

    return (
        <nav className={styles["navbar-outer"]}>
            <div className={styles["navbar-inner"]}>

                <NavLink href="/" >
                    <strong>Ariane.</strong>codes
                </NavLink>
            
                <div className={styles["buttons-wrapper"]}>
                    <NavLink className={styles.navlink} href="/projects" >projects</NavLink>
                    <NavLink className={styles.navlink} href="/blog" >blog</NavLink>
                    <NavLink className={styles.navlink} href="/about" >about</NavLink>
                    <NavLink className={styles.navlink} href="/contact" >contact</NavLink>
                </div>
            </div>
            
        </nav>
    )

}

const NavLink = ({ href, children }) => {


    return (
        <Link href={href} passHref>
            <a className={styles.links}>
                {children}
            </a>
        </Link>
    )
}

export default Navbar;