import React, { useState } from 'react';

import adminIcon from '../../assets/admin-icon-8.png';

// icons
import { ImHome } from 'react-icons/im';
import { FiPackage, FiSettings } from 'react-icons/fi';
import { BiPlus } from 'react-icons/bi';
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
    const [isOpen, setIsOpen] = useState('');

    function handleButtonClick(button) {
        setIsOpen((prev) => (prev === button ? '' : button));
    }

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

                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('people')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <FaUserTie className="text-lg text-[#2f79bd]" />
                                    <span>مدیریت اشخاص</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'people' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">شخص جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="/user-list">لیست اشخاص</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">دسته بندی جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست دسته بندی ها</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('companies')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <BsFillBuildingFill className="text-lg text-[#2f79bd]" />
                                    <span>مدیریت شرکت ها</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'companies' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="/create/company">شرکت جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست شرکت</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('customer')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <FaUserTag className="text-lg text-[#2f79bd]" />
                                    <span>مدیریت فروشندگان</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'customer' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">فروشنده جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست فروشندگان</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() =>
                                    handleButtonClick('products-manage')
                                }
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <FiPackage className="text-lg text-[#2f79bd]" />
                                    <span>مدیریت محصولات</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'products-manage' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">افزودن محصول جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست محصولات</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">افزودن دسته بندی جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست دسته بندی ها</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('buy-product')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <BsReceipt className="text-lg text-[#2f79bd]" />
                                    <span>خرید محصولات</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'buy-product' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">ثبت خرید جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست خریدها</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() =>
                                    handleButtonClick('sell-product')
                                }
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <GiShoppingCart className="text-lg text-[#2f79bd]" />
                                    <span>فروش محصولات</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'sell-product' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">ثبت فروش جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست فروش</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('salary')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <BsBarChartLine className="text-lg text-[#2f79bd]" />
                                    <span>درآمد و هزینه های جانبی</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'salary' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">ثبت درآمد جانبی</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست درآمد های جانبی</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">ثبت هزینه های جانبی</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست درآمدهای جانبی</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('ware')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <FaWarehouse className="text-lg text-[#2f79bd]" />
                                    <span>مدیریت انبار</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'ware' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">موجودی محصولات</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">محصولات فروخته شده</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">محصولات خریداری شده</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('bank')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <FaUniversity className="text-lg text-[#2f79bd]" />
                                    <span>بانکداری</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'bank' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">افزودن صندوق</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست صندوق ها</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">افزودن بانک</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست بانک ها</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('docs')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <BiMoney className="text-lg text-[#2f79bd]" />
                                    <span>اسناد و حسابداری</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'docs' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">دریات چک</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست چک های دریافتی</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">پرداخت چک</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست چک های پرداختی</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('manage-user')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <FaUserLock className="text-lg text-[#2f79bd]" />
                                    <span>مدیریت کاربران</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'manage-user' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">ثبت مدیر جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست کاربران</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('pay-report')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <BsPieChartFill className="text-lg text-[#2f79bd]" />
                                    <span>گذارش های مالی</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'pay-report' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">تمام گذارش ها</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">ترازنامه</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست تراکنش های بانکی</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('wordpress')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <FaWordpressSimple className="text-lg text-[#2f79bd]" />
                                    <span>مدیریت ووکامرس</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'wordpress' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">افزودن محصول جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست محصولات</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">افزودن دسته بندی جدید</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست دسته بندی ها</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">لیست سفارش ها</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">گزارش فروش</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href=""> گزارش پرفروش ترین ها</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">گزارش سفارشات</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">گذارش سفارشات</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">گذارش نظرات</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex flex-row-reverse items-center py-2 px-2 hover:bg-gray-200 cursor-pointer justify-between w-full"
                                onClick={() => handleButtonClick('setting')}
                            >
                                <div className="flex flex-row-reverse gap-2">
                                    <FiSettings className="text-lg text-[#2f79bd]" />
                                    <span>تنظیمات برنامه</span>
                                </div>
                                <BiPlus className="text-lg" />
                            </button>
                            {isOpen === 'setting' && (
                                <ul className="absolute py-4 bg-gray-300 top-full z-50 right-0 border border-gray-400 w-full space-y-5">
                                    {/* Add your dropdown options here */}
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">مدیریت سطوح دسترسی</a>
                                    </li>
                                    <li className="hover:bg-white/70 pr-8 text-sm h-[25px]">
                                        <a href="">مشخصات لایسنس</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}
