import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
    
    // Use the layout defined at page level, if available.
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps}/>)
}


export default MyApp
