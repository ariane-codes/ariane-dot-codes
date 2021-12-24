import HomeLayout from "../components/layouts/HomeLayout";

const Contact = () => {
    return (
        <div>
            The contact page.
        </div>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <HomeLayout metaDescription={"Ariane.codes"} metaTitle={"Ariane"}>
            {page}
        </HomeLayout>
    )
}

export default Contact;