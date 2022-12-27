import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/postsGenerator';
import { GetStaticProps } from 'next';
import { List, Typography, Paper, Box, ListItem } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import BlogCard from '../components/blogcard';
import ButtonAppBar from '../components/appbar';

export default function Home({ allPostsData }: { allPostsData: { date: string, title: string, id: string }[] })
{
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>


      <Box marginTop={5}>
        <Paper elevation={3}>
          <Typography marginX={3} padding={1} variant='h4' component='h4'>Ma super vie</Typography>
          <Typography marginX={6} padding={2}>
            Ceci est un super blog fait. Je bosse chez <a href="https://6freedom.studio">6freedom</a>.
          </Typography>
        </Paper>
      </Box>
      <Box marginTop={5}>
        <Typography variant="h2" component="h2">Blog</Typography>
        <Grid container spacing={2}>
          {
            allPostsData.map(({ id, date, title }) =>
            (
              <Grid xs={4}>
                <BlogCard date={date} title={title} link={`/posts/${id}`} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () =>
{
  const allPostsData = getSortedPostsData();
  return {
    props:
    {
      allPostsData
    }
  }
}