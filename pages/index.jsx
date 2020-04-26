import Link from 'next/link';
import fs from 'fs';
// locals
import SiteLayout from '../comps/SiteLayout';
import '../scss/styles.scss';

const Home = ({ slugs }) => (
    <SiteLayout>
        <div className="container-fluid">
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
