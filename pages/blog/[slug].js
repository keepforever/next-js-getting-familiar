import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';

const Post = ({ htmlString, data }) => {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description} />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </>
    );
};

export const getStaticPaths = async () => {
    //  could also readdirAsync async if we needed a promise
    const files = fs.readdirSync('posts'); // files is an array of filename strings.
    console.log('files: ', files);
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    console.log('paths: ', paths);

    return {
        paths,
        fallback: false
    };
};

// in this function, we fetch CONTENT of the posts.
export const getStaticProps = async ({ params: { slug } }) => {
    // the path lib helps assure that the file path is built correctly regardless as to whether
    // you're on mac or pc because pc would use \ instead of /
    const markdownWithMetadata = fs.readFileSync(path.join('posts', slug + '.md')).toString();

    // marked and matter are helper libs for processing out post markdown files

    const parsedMarkdown = matter(markdownWithMetadata);

    const htmlString = marked(parsedMarkdown.content);

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    };
};

export default Post;
