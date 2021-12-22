import HomeLayout from "../components/layouts/HomeLayout";

const About = () => {
    return (
        <div>
            The about page.
        </div>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <HomeLayout metaDescription={"Ariane.codes"} metaTitle={"Ariane"}>
            {page}
        </HomeLayout>
    )
}

export default About;