import Navbar from '../components/Navbar.jsx';
import Breadcrumb from '../components/Breadcrumb ';
// import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="px-10">
            <Breadcrumb />
            <main>{children}</main>
            {/* <Sidebar /> */}
            </div>
        </div>
    );
}
