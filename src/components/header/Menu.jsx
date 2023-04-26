import React, { useState } from 'react';

import adminIcon from '../../assets/admin-icon-8.png';

// icons
import { ImHome } from 'react-icons/im';
import { FiPackage, FiSettings } from 'react-icons/fi';
import { BiMenuAltRight, BiPlus } from 'react-icons/bi';
import { IoMdMenu } from 'react-icons/io';

import { HiArrowNarrowRight } from 'react-icons/hi';
import {
    FaUserTie,
    FaUserLock,
    FaUserTag,
    FaWarehouse,
    FaUniversity,
    FaWordpressSimple,
} from 'react-icons/fa';
import {
    BsFillBuildingFill,
    BsReceipt,
    BsBarChartLine,
    BsPieChartFill,
} from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { BiMoney } from 'react-icons/bi';

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="relative">
            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 transition duration-300 ease-in-out z-40 ${
                    isMenuOpen ? '' : 'hidden'
                }`}
                onClick={() => setIsMenuOpen(false)}
            ></div>
            {/* The menu icon inside the menu */}
            <div className={`relative pr-3 ${isMenuOpen ? 'hidden' : ''}`}>
                <i
                    className="flex text-black/70 lg:text-white text-2xl hover:cursor-pointer"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <IoMdMenu />
                </i>
            </div>
            <div
                className={`fixed top-0 right-0 w-52 sm:w-64 h-screen bg-[#f4f5f8] text-gray-800 transition duration-300 ease-in-out transform overflow-y-scroll xl:overflow-visible ${
                    isMenuOpen ? '' : 'translate-x-full'
                } z-50`}
            >
                <div className="p-[11px] bg-[#304967] pb-[1.20rem] mb-3 font-bold flex items-center border border-transparent">
                    {/* The menu icon to close the menu */}
                    <i
                        className="text-black/70 lg:text-white text-2xl pt-1 hover:cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <HiArrowNarrowRight />
                    </i>
                    <span className="text-white font-bold ml-auto sm:block hidden">
                        پنل مدیریت حسابیار
                    </span>
                </div>
                <ul className="text-lg text-end flex flex-col items-end space-y-5 xl:space-y-0">
                    <div className="flex space-x-2 px-4 sm:mb-4">
                        <div className="flex flex-col">
                            <h4 className="text-sm font-semibold">
                                مدیر برنامه
                            </h4>
                            <span className="text-xs">!خوش آمدید </span>
                        </div>
                        <div className="shadow-xl">
                            <img
                                src={adminIcon}
                                alt="admin"
                                className="rounded-md w-10 h-10"
                            />
                        </div>
                    </div>{' '}
                    <div className="w-full text-sm space-y-4">
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <ImHome className="text-lg" />
                                <a href="/" className="font-bold">
                                    داشبورد مدیریت
                                </a>
                            </div>
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <FaUserTie className="text-lg text-[#2f79bd]" />
                                <a href="/">مدیریت اشخاص</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <BsFillBuildingFill className="text-lg text-[#2f79bd]" />
                                <a href="/">مدیریت شرکت ها</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer   justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <FaUserTag className="text-lg text-[#2f79bd]" />
                                <a href="/">مدیریت فروشندگان</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <FiPackage className="text-lg text-[#2f79bd]" />
                                <a href="/">مدیریت محصولات</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <BsReceipt className="text-lg text-[#2f79bd]" />
                                <a href="/">خرید محصولات</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <GiShoppingCart className="text-lg text-[#2f79bd]" />
                                <a href="/">فروش محصولات</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <BsBarChartLine className="text-lg text-[#2f79bd]" />
                                <a href="/">درآمد و هزینه های جانبی</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <FaWarehouse className="text-lg text-[#2f79bd]" />
                                <a href="/">مدیریت انبار</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <FaUniversity className="text-lg text-[#2f79bd]" />
                                <a href="/">بانکداری</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <BiMoney className="text-lg text-[#2f79bd]" />
                                <a href="/">اسناد و حسابداری</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <FaUserLock className="text-lg text-[#2f79bd]" />
                                <a href="/">مدیریت کاربران</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <BsPieChartFill className="text-lg text-[#2f79bd]" />
                                <a href="/">گزارش های مالی</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <FaWordpressSimple className="text-lg text-[#2f79bd]" />
                                <a href="/">مدیریت ووکامرس</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                        <li className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer  justify-between">
                            <div className="flex flex-row-reverse gap-2">
                                <FiSettings className="text-lg text-[#2f79bd]" />
                                <a href="/">تنظیمات برنامه</a>
                            </div>
                            <BiPlus className="text-lg" />
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}