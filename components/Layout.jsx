import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name = "Dcuartas"
export default function Layout({children,title,description,home}){
    console.log(home)
    return(
        <div className={styles.container}>
            <Head>
            <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta name="description" content={description}></meta>
            </Head>
            <header className={styles.header}>
                {home ? (
                <>
                    <Image
                    priority
                    src="/img/img1.jpeg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt=""
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <Image
                        priority
                        src="/img/img1.jpeg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt=""
                    />
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/" className={utilStyles.colorInherit}>
                        {name}
                    </Link>
                    </h2>
                </>
                )}
            </header>
            <nav>
                <Link href="/">
                    Inicio |
                </Link>
                <Link href="/blog">
                    Blog |
                </Link>
                <Link href="/about">
                    About |
                </Link>
                <Link href="/contact">
                    Contacto
                </Link>
            </nav>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    )
}

Layout.defaultProps = {
    title: "NextJs | My Site",
    description: "This is My site"
};