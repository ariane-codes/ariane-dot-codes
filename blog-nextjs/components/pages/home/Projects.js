import { useEffect  } from "react";
import Image from "next/image";
import WaveA from "../../../public/images/wave-dividers/purple-wave-a.svg";
import WaveB from "../../../public/images/wave-dividers/purple-wave-b.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

import styles from "../../../styles/pages/Home.module.scss";

const Projects = () => {

    const isAtLeastMd = useMediaQuery(768);
    
    return (
        <>
        <div className={styles["wave-divider"]}>
            { isAtLeastMd ? <WaveA/> : <WaveB/>}
        </div>
        <section className={styles["projects-wrapper"]}>
            Projects here
        </section>
        </>
        
    )
}

export default Projects;