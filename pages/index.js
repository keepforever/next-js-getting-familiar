import Link from 'next/link';
import fs from 'fs';
// locals
import SiteLayout from '../comps/SiteLayout';

const Home = ({ slugs }) => (
    <SiteLayout>
        <div>
            slugs:
            {slugs.map(slug => {
                return (
                    <div key={slug}>
                        <Link href={'/blog/' + slug}>
                            <a>{'/blog/' + slug}</a>
                        </Link>
                    </div>
                );
            })}
        </div>
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
