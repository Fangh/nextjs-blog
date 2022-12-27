import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIDs, getPostData } from "../../lib/postsGenerator";
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Typography } from "@mui/material";

///postData = what getStaticProps returns
export default function Post({ postData })
{
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Box marginTop={5}>
                <article>
                    <Typography variant={"h2"} component={"h2"}>{postData.title}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <Date dateString={postData.date} />
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
                    </Typography>
                </article>
            </Box>
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