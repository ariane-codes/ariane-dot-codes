import styles from '../../../styles/pages/Home.module.scss'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";

const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae lectus lectus. Donec sit amet nulla eget nunc egestas dapibus. Suspendisse potenti. Pellentesque ultrices, elit sed ullamcorper pretium."
const paragraph2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae lectus lectus."


const Presentation = ({ paragraph1 }) => {
    console.log("Paragraph 1")
    console.log(paragraph1)
    return (
        <section className={styles["presentation-wrapper"]}>

            <aside className={styles["title-wrapper"]}>
                <div className={styles["inner"]}>
                    <h1 className={styles.h1}>
                        <span className={styles.hello}>{"<"}Hello world, I am</span>
                        <span className={styles.ariane}>Ariane.{"/>"}</span>
                    </h1>
                </div>
            </aside>

            <div className={styles["presentation-text-wrapper"]}>
                <div className={styles["inner"]}>
                    <p className={styles.p1}>{paragraph1.text}</p>
                    <p className={styles.p2}>{paragraph2}</p>
                    <div className={styles["icon-wrapper"]}>
                        <a aria-label="Twitter" title="Twitter" href="https://www.twitter.com/ArianeCodes">
                        <AiFillTwitterCircle/>
                        </a>
                        <a aria-label="Github" title="Github" href="https://github.com/ariane-codes">
                        <IoLogoGithub/>
                        </a>
                        <a aria-label="LinkedIn" title="LinkedIn" href="https://www.linkedin.com/in/ariane-ernandorena-64475979/">
                        <IoLogoLinkedin/>
                        </a>
                    </div> 
                </div>
                
            </div>
        </section>
    )
}

export default Presentation;