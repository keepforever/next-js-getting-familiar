import Link from 'next/link';
import fs from 'fs';
import { Grid } from '@material-ui/core';

// locals
import SiteLayout from '../comps/SiteLayout';
import '../scss/styles.scss';

const Home = ({ slugs }) => (
    <SiteLayout>
        <Grid container spacing={3}>
            {slugs.map(slug => {
                return (
                    <Grid key={slug} item xs={4}>
                        <Link href={'/blog/' + slug}>
                            <a>{'/blog/' + slug}</a>
                        </Link>
                    </Grid>
                );
            })}
        </Grid>
    </SiteLayout>
);

export const getStaticProps = async () => {
    const files = fs.readdirSync('posts');
    return {
        props: {
            slugs: files.map(filename => filename.replace('.md', ''))
        }
    };
};

export default Home;
