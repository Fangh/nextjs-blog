import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


export default function BlogCard({ date, title, link })
{
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {date}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={link} style={{ textDecoration: "none" }}>
                    <Button size="small">Read this post</Button>
                </Link>
            </CardActions>
        </Card>
    );
}