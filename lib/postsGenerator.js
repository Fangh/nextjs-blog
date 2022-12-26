import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData()
{
    //get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) =>
    {
        //remove .md from file name to generate id
        const id = fileName.replace(/\.md$/, '');

        //read Markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf8');

        //use gray matter to parse the metadata
        const matterResult = matter(fileContent);

        return {
            id,
            ...matterResult.data
        };
    });

    //return posts by date
    return allPostsData.sort(({ date: a }, { date: b }) =>
    {
        if (a < b)
            return 1;
        else if (a > b)
            return -1;
        else
            return 0;
    });
}

export function getAllPostIDs()
{
    const fileNames = fs.readdirSync(postsDirectory);
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'slug'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'snails'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) =>
    {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id)
{
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHTML = processedContent.toString();

    return { id, contentHTML, ...matterResult.data };
}
