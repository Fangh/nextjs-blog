import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = "Fangh";
export const siteTitle = 'Le super Blog de moi';

export default function Layout({ children, home })
{
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href='/favicon.ico' />
                <meta name='description' content='Un Blog qui parle de rien' />
                <meta property='og:image' content='https://6freedom.studio/wp-content/uploads/2022/08/Morgan-Portrait.jpg' />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {
                    home ? (
                        <>
                            <Image
                                priority
                                src="/avatar.jpg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt="avatar"
                            />
                            <h1 className={utilStyles.heading2X1}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <Image
                                    priority
                                    src="/avatar.jpg"
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
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>);
}