import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Paper, Typography, Avatar } from '@mui/material';
import ButtonAppBar from './appbar';

const name = "Fangh";
export const siteTitle = 'Le super Blog de moi';

export default function Layout({ children, home }: { children: React.ReactNode, home?: boolean })
{
    return (
        <>
            <ButtonAppBar />
            <Container sx={{ width: 900 }}>
                <Head>
                    <link rel="icon" href='/favicon.ico' />
                    <meta name='description' content='Un Blog qui parle de rien' />
                    <meta property='og:image' content='https://6freedom.studio/wp-content/uploads/2022/08/Morgan-Portrait.jpg' />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <Box marginTop={5}>
                    <Paper elevation={3}>
                        {
                            home ? (
                                <Box paddingY={2} sx={{ display: "flex", justifyContent: 'center' }}>
                                    <Avatar
                                        alt="Fangh's Avatar"
                                        src="/avatar.jpg"
                                        sx={{ width: 144, height: 144 }}>
                                    </Avatar>
                                    <Typography paddingY={2} paddingX={2} variant={'h1'} component={'h1'}>{name}</Typography>
                                </Box>
                            ) : (
                                <Box paddingY={2} sx={{ display: "flex", justifyContent: 'center' }}>
                                    <Link href="/">
                                        <Avatar
                                            alt="Fangh's Avatar"
                                            src="/avatar.jpg"
                                            sx={{ width: 100, height: 100 }}>
                                        </Avatar>
                                    </Link>
                                    <Link style={{ textDecoration: "none" }} href="/" ><Typography paddingY={2} paddingX={2} variant='h2' component='h2' color="primary">{name}</Typography></Link>
                                </Box>
                            )}
                    </Paper>
                </Box>
                <main>{children}</main>
            </Container >
        </>
    );
}