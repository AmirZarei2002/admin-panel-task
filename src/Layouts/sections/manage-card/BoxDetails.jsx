// icons
import { BsFillBuildingsFill } from 'react-icons/bs';

export default function BoxDetails({ name, title, subtitle }) {
    return (
        <div className="relative w-full h-full flex justify-items-center sm:w-screen lg:w-1/3 flex-col items-center border border-transparent justify-center text-white">
            <div className="bg-[#343a40] w-full text-center flex justify-center h-[8rem] items-center z-10 pb-10">
                <div className="items-center flex flex-col space-y-2 font-semibold">
                    <h4>{title}</h4>
                    <span className="text-xs">{subtitle}</span>
                </div>
            </div>
            <div className="w-fit h-fit text-white absolute z-30 bg-blue-800 rounded-full p-4 border shadow-md">
                <BsFillBuildingsFill className="text-5xl" />
            </div>
            <div className="bg-white text-center flex justify-center w-full h-[8rem] items-center pt-10">
                <button className="bg-sky-600 text-white px-4 hover:bg-sky-800 py-2 shadow-md w-fit h-fit z-20">
                    <span className=" text-sm">{name}</span>
                </button>
            </div>
        </div>
    );
}
