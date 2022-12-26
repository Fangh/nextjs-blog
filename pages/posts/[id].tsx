import Layout from "../../components/layout";
import { getAllPostIDs, getPostData } from "../../lib/postsGenerator";
import Head from 'next/head';
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';
import { GetStaticPaths, GetStaticProps } from "next";

///postData = what getStaticProps returns
export default function Post({ postData })
{
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
            </article>
        </Layout>)
}

export const getStaticPaths: GetStaticPaths = async () =>
{
    const paths = getAllPostIDs();
    console.log(paths);
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) =>
{
    const postData = await getPostData(params?.id as string);
    return { props: { postData } };
}