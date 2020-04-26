import Link from 'next/link';

const SiteLayout = ({ children }) => (
    <div className="">
        <h1>Hello Site Layout</h1>
        <div>{children}</div>
    </div>
);

export default SiteLayout;
