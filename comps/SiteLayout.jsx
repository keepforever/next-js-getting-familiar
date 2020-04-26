import Link from 'next/link';
import TopNavBar from '../comps/TopNavBar';

const SiteLayout = ({ children }) => (
    <div>
        <TopNavBar />
        <h1>Hello Site Layout</h1>
        <div>{children}</div>
    </div>
);

export default SiteLayout;
