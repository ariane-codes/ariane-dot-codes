
import Link from "next/link";
import useMediaQuery from "../../../hooks/useMediaQuery";
import styles from "../../../styles/pages/Home.module.scss";

// Assets
import WaveA from "../../../public/images/wave-dividers/purple-wave-a.svg";
import WaveB from "../../../public/images/wave-dividers/purple-wave-b.svg";
import WaveC from "../../../public/images/wave-dividers/purple-wave-c.svg";
import { FaCircle } from "react-icons/fa";

const Projects = ({ description }) => {

    const isAtLeastMd = useMediaQuery(768);
    
    return (
        <>
        <div className={styles["wave-divider"]}>
            { isAtLeastMd ? <WaveA/> : <WaveB/>}
        </div>

        <section className={styles["projects-wrapper"]}>
            <div className={styles["inner"]}>

                <div className={styles["section-title-wrapper"]}>
                    <div className={styles["dots"]}><FaCircle/></div>
                    <div className={styles["title"]}>
                        <Link href="/projects">
                            <a><h2>Projects</h2></a>
                        </Link>
                    </div>
                    <div className={styles["description"]}>
                        <p>{description.text}</p>
                    </div>
                    
                    
                </div>                
            </div>    
        </section>
        </>
        
    )
}

export default Projects;