import Link from 'next/link';
import TopNavBar from '../comps/TopNavBar';
import '../scss/styles.scss';

const SiteLayout = ({ children }) => (
    <div>
        <TopNavBar />
        <h1>Hello Site Layout</h1>
        <div className="row">
            <div className="btn btn-primary">Test Button</div>
        </div>
        <div>{children}</div>
    </div>
);

export default SiteLayout;
