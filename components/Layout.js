import Head from 'next/head';
import Header from './Header';
import styles from '@/styles/Layout.module.css';
import Banner from './Banner';
import { useRouter } from 'next/router';
import Footer from './Footer';

export default function Layout({title, description, keywords, children}) {
    const route = useRouter();
    console.log(route.route)
    
    return (
        <section>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>
            <Header />
            { route.route === "/" && <Banner />}
            <main className={styles.main}>
            { children }    
            </main>

          <Footer></Footer>
       
        </section>
    )
}

Layout.defaultProps ={
    title: 'Online Store',
    description: 'Find best product',
    keywords: 'buy sneakers'
}