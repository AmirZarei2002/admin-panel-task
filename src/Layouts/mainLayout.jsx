import Navbar from '../components/Navbar.jsx';
import Breadcrumb from '../components/Breadcrumb ';

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="px-4 sm:px-10">
                <Breadcrumb />
                <main>{children}</main>
            </div>
        </div>
    );
}
