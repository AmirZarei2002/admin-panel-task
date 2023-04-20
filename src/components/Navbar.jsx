import hesabyarLogo from '../assets/logo.png';

// icons
import adminIcon from '../assets/admin-icon-8.png';
import { BiMenuAltRight } from 'react-icons/bi';
import { TfiLayoutGrid2, TfiFullscreen } from 'react-icons/tfi';
import { FiBell } from 'react-icons/fi';

export default function Navbar() {
    return (
        <nav className="bg-[#343d45] flex justify-between h-[54px] items-center">
            <div className="bg-[#304967] h-full hidden place-items-center w-[50px] sm:flex order-last justify-center ml-5">
                <img src={hesabyarLogo} alt="hesab-yar-logo" className="pl-1" />
            </div>
            <div className="space-x-5 items-center pl-6 hidden sm:flex">
                <i className="text-xl text-white hover:cursor-pointer">
                    <TfiLayoutGrid2 />
                </i>
                <img
                    src={adminIcon}
                    alt="admin-logo"
                    className="rounded-full w-[40px] h-[40px]"
                />
                <i className="text-xl text-white hover:cursor-pointer">
                    <FiBell />
                </i>
                <i className="text-xl text-white hover:cursor-pointer">
                    <TfiFullscreen className="text-md text-white" />
                </i>
            </div>
            <div className="flex-grow"></div>
            <div>
                <i className="text-white text-4xl hover:cursor-pointer">
                    <BiMenuAltRight />
                </i>
            </div>
        </nav>
    );
}
