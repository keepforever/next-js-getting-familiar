import Link from 'next/link';
import TopNavBar from '../comps/TopNavBar';

const SiteLayout = ({ children }) => (
    <>
        <TopNavBar />
        <>{children}</>
    </>
);

export default SiteLayout;
