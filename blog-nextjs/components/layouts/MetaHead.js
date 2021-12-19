import Head from 'next/head';


const MetaHead = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="theme-color" content="#2a1b35"/>
            <link rel="icon" href="/images/AIcon.svg"/>
            <link rel="mask-icon" href="/images/AIcon.svg" color="#000000"/>
            <link rel="apple-touch-icon" href="/images/AIcon.svg"/>
            <link rel="manifest" href="manifest.json"/>
        </Head>
    )
}

export default MetaHead;