import Breadcrumb from '../../Breadcrumb ';
import DashCard from '../../../Layouts/sections/DashCard';

// icons
import { IoHome } from 'react-icons/io5';
import { FaUserTag, FaUserTie } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import { BsCartPlusFill } from 'react-icons/bs';

// images
import chart1 from '../../../assets/chart-1.png';
import chart2 from '../../../assets/chart-2.png';
import chart3 from '../../../assets/chart-3.png';
import chart4 from '../../../assets/chart-4.png';

export default function OverallResults() {
    const paths = ['داشبورد', 'مدیریت', 'خانه'];

    return (
        <div className="space-y-5">
            <Breadcrumb paths={paths} icon={IoHome} title="داشبورد مدیریت" />
            {/* Dashboard Cards  */}
            <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <DashCard
                    classes="from-[#28a745] to-[#3ca64a]"
                    title="تعداد فروشندگان"
                    totalNumber="5"
                    icon={FaUserTag}
                    newsHead="فروشنده جدید این ماه : ۰ نفر"
                    newsBgColor="bg-black"
                    newsClasses="bg-[#28a745]"
                    statistic={chart1}
                />
                <DashCard
                    classes="from-[#fe790a] to-[#ff963e]"
                    title="اشخاص و مشتریان"
                    totalNumber="5"
                    icon={FaUserTie}
                    newsHead="اشخاص جدید این ماه : ۰ نفر"
                    newsBgColor="white"
                    newsClasses="bg-[#fd7e14]"
                    statistic={chart4}
                />
                <DashCard
                    classes="from-[#007bff] to-[#71aeee]"
                    title="تعداد کل محصولات"
                    totalNumber="12"
                    icon={FiPackage}
                    newsHead="محصول جدید این ماه : ۰ مورد"
                    newsBgColor="black"
                    newsClasses="bg-[#007bff]"
                    statistic={chart3}
                />
                <DashCard
                    classes="from-[#a338c7] to-[#f44ece]"
                    title="مجموع کل فروش ها"
                    totalNumber="11"
                    icon={BsCartPlusFill}
                    newsHead="فروش جدید این ماه : ۰ مورد"
                    newsBgColor="black"
                    newsClasses="bg-[#e83e8c]"
                    statistic={chart2}
                />
            </div>
        </div>
    );
}
