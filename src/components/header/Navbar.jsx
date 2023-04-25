import React, { useState } from 'react';

// icons and images
import hesabyarLogo from '../../assets/logo.png';
import adminIcon from '../../assets/admin-icon-8.png';

import { TfiLayoutGrid2, TfiFullscreen } from 'react-icons/tfi';
import { FiBell } from 'react-icons/fi';
import { BsArrowDownUp } from 'react-icons/bs';

import Menu from './Menu';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <nav className="bg-[#304967] sm:bg-[#343d45] flex w-full justify-between h-[60px] items-center">
            <div className="bg-[#304967] h-full hidden place-items-center w-[50px] sm:flex order-last justify-center ml-3">
                <img src={hesabyarLogo} alt="hesab-yar-logo" className="pl-1" />
            </div>
            <div className="space-x-5 items-center pl-6 hidden sm:flex">
                <i className="text-xl text-white text- hover:cursor-pointer">
                    <TfiLayoutGrid2 />
                </i>
                <img
                    src={adminIcon}
                    alt="admin-logo"
                    className="rounded-full w-[35px] h-[35px] mb-2"
                />
                <i className="text-xl text-white hover:cursor-pointer">
                    <FiBell />
                </i>
                <i className="text-xl text-white hover:cursor-pointer">
                    <TfiFullscreen className="text-md text-white" />
                </i>
            </div>

            {/* navbar in small devices */}
            <div className="flex w-full sm:flex-row-reverse items-center justify-between space-x-10">
                <div className="sm:hidden block">
                    <div
                        className={`relative pl-3 ${
                            isSidebarOpen ? 'block' : ''
                        }`}
                    >
                        <button
                            type="button"
                            className="flex text-black/70 text-2xl hover:cursor-pointer"
                            onClick={handleToggleSidebar}
                        >
                            <BsArrowDownUp className="text-xl cursor-pointer" />
                        </button>
                    </div>
                    <div
                        className={`absolute top-[3.76rem] left-0 bg-[#343a40] h-[4.5rem] w-screen  ${
                            isSidebarOpen ? 'block' : 'hidden'
                        } z-50`}
                    >
                        <div className="space-x-5 items-center flex px-5 py-4">
                            <i className="text-xl text-white hover:cursor-pointer">
                                <TfiLayoutGrid2 />
                            </i>
                            <img
                                src={adminIcon}
                                alt="admin-logo"
                                className="rounded-full w-[35px] h-[35px] mb-2"
                            />
                            <i className="text-xl text-white hover:cursor-pointer">
                                <FiBell />
                            </i>
                        </div>
                    </div>
                </div>
                <div className="text-white text-center sm:hidden flex">
                    {/* <span className="font-semibold text-md">
                        پنل مدیریت حسابیار
                    </span> */}
                </div>
                {/* The menu */}
                    <Menu />
            </div>
        </nav>
    );
}
