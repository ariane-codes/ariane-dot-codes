import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { HiMenu } from "react-icons/hi";

import { capitalizeFirstLetter } from "../../utils/capitalize";

import cx from "classnames";
import styles from "../../styles/components/layouts/Navbar.module.scss";

const Navbar = () => {

    const { asPath } = useRouter();
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    const NavLink = ({ href, children }) => {

        let isCurrent = asPath === href ? "page" : false

        return (
            <Link href={href} passHref>
                <a 
                title={href === "/" ? "Ariane.codes" : capitalizeFirstLetter(href.substring(1))}
                className={cx(styles.links, { [styles["current-links"]]: isCurrent })} 
                onClick={() => setIsMenuOpen(false)}
                aria-current={isCurrent}
                >
                    {children}
                </a>
            </Link>
        )
    }

    return (
        <nav className={styles["navbar-outer"]} aria-label="Main Navigation Bar">
            <div className={styles["navbar-inner"]}>

                <NavLink  href="/" >
                    <div className={styles.ariane}><strong>Ariane.</strong>codes</div>
                </NavLink>
            
                <div className={styles["buttons-wrapper"]}>
                    <ul>
                        <li><NavLink href="/projects" >projects</NavLink></li>
                        <li><NavLink href="/blog" >blog</NavLink></li>
                        <li><NavLink href="/about" >about</NavLink></li>
                        <li><NavLink href="/contact" >contact</NavLink></li>
                    </ul>                    
                </div>

                <button className={styles["menu-icon"]} onClick={handleMenu}>
                    <HiMenu/>
                </button>
            </div>

            <ul className={cx(styles["dropdown-wrapper"], { [styles["open"]]: isMenuOpen })}>
                <li className="item-1"><NavLink href="/projects" >projects</NavLink></li>
                <li className="item-2"><NavLink href="/blog" >blog</NavLink></li>
                <li className="item-3"><NavLink href="/about" >about</NavLink></li>
                <li className="item-4"><NavLink href="/contact" >contact</NavLink></li>
            </ul>
            
        </nav>
    )

}



export default Navbar;