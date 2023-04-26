import { useState } from 'react';

// icons
import { IoMdHome } from 'react-icons/io';
import { FaPhoneAlt, FaSave } from 'react-icons/fa';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { HiPhone } from 'react-icons/hi';
import { MdFax, MdComputer } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';

export default function ManageCard() {
    const [showContact, setShowContact] = useState(true);

    const handleContactClick = () => {
        setShowContact(true);
    };

    const handleAddressClick = () => {
        setShowContact(false);
    };

    return (
        <main className="w-full flex flex-col-reverse lg:flex-row justify-center px-4 md:px-0 gap-5 2xl:space-x-2 lg:px-6">
            {/* Left Card */}
            <form className="w-full sm:w-screen h-full bg-white lg:w-3/4 rounded-xl text-end flex flex-col p-4">
                <div className="mb-5">
                    <h4 className="text-gray-700 font-semibold">
                        مشخصات شرکت / سازمان
                    </h4>
                </div>
                <div className="grid sm:flex sm:flex-row-reverse sm:justify-between space-y-10 md:space-y-0">
                    <label className="flex flex-row-reverse text-sm md:w-[10rem] xl:w-[15rem] 2xl:w-[20rem]">
                        <input
                            type="text"
                            name="title"
                            title="عنوان"
                            maxLength="50"
                            minLength="3"
                            placeholder="عنوان شرکت"
                            className="text-end border-b-2 w-full focus:outline-none"
                        />
                    </label>
                    <label className="flex flex-row-reverse text-sm md:w-[10rem] xl:w-[15rem] 2xl:w-[20rem]">
                        <input
                            type="text"
                            name="company-name"
                            title="نام شرکت، سازمان، فروشگاه"
                            maxLength="50"
                            minLength="3"
                            placeholder="نام شرکت، سازمان، فروشگاه"
                            className="text-end border-b-2  w-full focus:outline-none"
                        />
                    </label>
                    <label className="flex flex-row-reverse text-sm md:w-[10rem] xl:w-[15rem] 2xl:w-[20rem]">
                        <input
                            type="text"
                            name="registered-number"
                            title="شماره ثبت"
                            maxLength="50"
                            minLength="3"
                            placeholder="شماره ثبت"
                            className="text-end border-b-2 w-full focus:outline-none"
                        />
                    </label>
                </div>
                <div className="flex flex-row-reverse text-sm my-10">
                    <textarea
                        type="text"
                        name="description"
                        title="توضیحات"
                        maxLength="200"
                        minLength="3"
                        placeholder="توضیحات"
                        className="text-end h-[52px] border-b-2 w-full focus:outline-none"
                    ></textarea>
                </div>
                <hr />
                <div className="flex space-x-4 self-center my-4">
                    <button
                        type="button"
                        onClick={handleContactClick}
                        className="flex items-center cursor-pointer border-b-2 border-gray-500 text-gray-500 space-x-1 sm:space-x-2 text-md  focus:text-black focus:outline-none"
                    >
                        <span className="">اطلاعات تماس</span>
                        <FaPhoneAlt className="text-md sm:text-md lg:text-xl" />
                    </button>
                    <button
                        type="button"
                        onClick={handleAddressClick}
                        className="flex items-center cursor-pointer border-b-2 border-gray-500 text-gray-500 space-x-1 sm:space-x-2 text-md  focus:text-black focus:outline-none"
                    >
                        <span className="">اطلاعات آدرس</span>
                        <IoMdHome className="text-md sm:text-md lg:text-xl" />
                    </button>
                </div>
                <hr />
                {!showContact ? (
                    <div className="mt-10 space-y-14">
                        <div className="grid sm:flex sm:justify-evenly md:space-x-[5rem] lg:space-x-[3rem] space-y-10 sm:space-y-0">
                            <label className="flex flex-row-reverse text-sm w-full">
                                <input
                                    type="text"
                                    name="country"
                                    title="کشور"
                                    maxLength="50"
                                    minLength="3"
                                    placeholder="کشور"
                                    className="text-end border-b-2 w-full focus:outline-none"
                                />
                            </label>
                            <label className="flex flex-row-reverse text-sm w-full">
                                <input
                                    type="text"
                                    name="state"
                                    title="استان"
                                    maxLength="50"
                                    minLength="3"
                                    placeholder="استان"
                                    className="text-end border-b-2 w-full focus:outline-none"
                                />
                            </label>
                            <label className="flex flex-row-reverse text-sm w-full">
                                <input
                                    type="text"
                                    name="city"
                                    title="شهر"
                                    maxLength="50"
                                    minLength="3"
                                    placeholder="شهر"
                                    className="text-end border-b-2 w-full focus:outline-none"
                                />
                            </label>
                        </div>
                        <div className="grid sm:flex sm:justify-evenly md:space-x-[5rem] lg:space-x-[4rem] space-y-10 sm:space-y-0">
                            <label className="flex flex-row-reverse text-sm w-full">
                                <input
                                    type="text"
                                    name="address"
                                    title="آدرس"
                                    maxLength="50"
                                    minLength="3"
                                    placeholder="آدرس"
                                    className="text-end border-b-2 w-full focus:outline-none"
                                />
                            </label>
                            <label className="flex flex-row-reverse text-sm w-full">
                                <input
                                    type="text"
                                    name="postal-code"
                                    title="کد پستی"
                                    maxLength="50"
                                    minLength="3"
                                    placeholder="کد پستی"
                                    className="text-end border-b-2 w-full focus:outline-none"
                                />
                            </label>
                        </div>
                    </div>
                ) : (
                    <div className="mt-10 grid sm:grid-cols-2 w-full space-y-10 sm:space-y-0 gap-10">
                        <div className="flex flex-row-reverse text-sm border-none text-gray-500">
                            <div className="mb-[20px] flex w-full pr-[15px] pl-[15px] flex-row-reverse items-center">
                                <div className="flex flex-col place-items-end mb-6">
                                    <div className="truncate">
                                        <b className="text-sm">شماره فکس</b>
                                    </div>
                                    <div className="mb-[20px]">
                                        <span>
                                            <i className="text-lg">
                                                <MdFax />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        name="fax"
                                        title="شهر"
                                        maxLength="50"
                                        minLength="3"
                                        placeholder="مثل: 99999999-021"
                                        className="text-end border-b-2 w-full focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse text-sm border-none text-gray-500">
                            <div className="mb-[20px] flex w-full pr-[15px] pl-[15px] flex-row-reverse items-center">
                                <div className="flex flex-col place-items-end mb-6">
                                    <div className="truncate">
                                        <b className="text-sm">شماره تلفن</b>
                                    </div>
                                    <div className="mb-[20px]">
                                        <span>
                                            <i className="text-lg">
                                                <HiPhone />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        name="fax"
                                        title="شهر"
                                        maxLength="50"
                                        minLength="3"
                                        placeholder="مثل: 99999999-021"
                                        className="text-end border-b-2 w-full focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse text-sm border-none text-gray-500">
                            <div className="mb-[20px] flex w-full pr-[15px] pl-[15px] flex-row-reverse items-center">
                                <div className="flex flex-col place-items-end mb-6">
                                    <div className="truncate">
                                        <b className="text-sm">آدرس وبسایت</b>
                                    </div>
                                    <div className="mb-[20px]">
                                        <span>
                                            <i className="text-lg">
                                                <MdComputer />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        name="fax"
                                        title="شهر"
                                        maxLength="50"
                                        minLength="3"
                                        placeholder="https://example.com"
                                        className="text-end border-b-2 w-full focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse text-sm border-none text-gray-500">
                            <div className="mb-[20px] flex w-full pr-[15px] pl-[15px] flex-row-reverse items-center">
                                <div className="flex flex-col place-items-end mb-6">
                                    <div className="truncate">
                                        <b className="text-sm">آدرس ایمیل</b>
                                    </div>
                                    <div className="mb-[20px]">
                                        <span>
                                            <i className="text-lg">
                                                <GrMail />
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        name="fax"
                                        title="شهر"
                                        maxLength="50"
                                        minLength="3"
                                        placeholder="example@example.com"
                                        className="text-end border-b-2 w-full focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="mt-10 mb-0">
                    <button className="flex items-center space-x-2 bg-slate-700 text-white px-3 py-2 hover:bg-gray-500">
                        <span className="text-sm">افزودن شرکت</span>
                        <FaSave className="text-xl" />
                    </button>
                </div>
            </form>
            {/* Right Card */}
            <div className="relative w-full h-full flex justify-items-center sm:w-screen lg:w-1/3 flex-col items-center border border-transparent justify-center text-white">
                <div className="bg-[#343a40] w-full text-center flex justify-center h-[8rem] items-center z-10 pb-10">
                    <div className="items-center flex flex-col space-y-2 font-semibold">
                        <h4>شرکت جدید</h4>
                        <span className="text-xs">لوگو شرکت / سازمان</span>
                    </div>
                </div>
                <div className="w-fit h-fit text-white absolute z-30 bg-blue-800 rounded-full p-4 border shadow-md">
                    <BsFillBuildingsFill className="text-5xl" />
                </div>
                <div className="bg-white text-center flex justify-center w-full h-[8rem] items-center pt-10">
                    <button className="bg-sky-600 text-white px-4 hover:bg-sky-800 py-2 shadow-md w-fit h-fit z-20">
                        <span className=" text-sm">انتخاب لوگو</span>
                    </button>
                </div>
            </div>
        </main>
    );
}
