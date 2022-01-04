
import Link from "next/link";
import useMediaQuery from "../../../hooks/useMediaQuery";
import styles from "../../../styles/pages/Home.module.scss";
import swiperStyles from "../../../styles/components/Swiper.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

// Assets
import WaveA from "../../../public/images/wave-dividers/purple-wave-a.svg";
import WaveB from "../../../public/images/wave-dividers/purple-wave-b.svg";
import WaveC from "../../../public/images/wave-dividers/purple-wave-c.svg";
import { FaCircle } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = ({ description, projects }) => {

    const isAtLeastMd = useMediaQuery(768);
    console.log(projects);
    
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

                <div className={styles["projects-display"]}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{"delay": 4500, "disableOnInteraction": true}}
                        navigation={true}
                        pagination={{"clickable": true} }
                        className={swiperStyles["swiper"]}
                    >
                        { projects && projects.map((project, index) => (
                            <SwiperSlide key={index} className={swiperStyles["swiper-slide"]}>{project.title}</SwiperSlide>
                        ))}

                    </Swiper>
                </div>

            </div>    
        </section>
        </>
        
    )
}

export default Projects;