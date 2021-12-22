import styles from '../../../styles/pages/Home.module.scss'


const Presentation = () => {

    return (
        <section className={styles["presentation-wrapper"]}>
            <aside className={styles["title-container"]}>
                {"< Hello world, I am "}
                <h1>
                    Ariane.
                </h1>
                {" />"}
            </aside>
            <div className={styles["presentation-container"]}>
                <p>Paragraph 1</p>
                <span>Paragraph 2</span>
                <div>Social media</div>
            </div>
        </section>
    )
}

export default Presentation;