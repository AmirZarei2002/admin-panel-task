import FormDetails from '../../Layouts/sections/manage-card/FormDetails';
import BoxDetails from '../../Layouts/sections/manage-card/BoxDetails';

// icons
import { BsFillBuildingsFill } from 'react-icons/bs';

export default function NewCompany() {
    return (
        <div>
            <main className="w-full flex flex-col-reverse lg:flex-row justify-center px-4 md:px-0 gap-5 2xl:space-x-2 lg:px-6">
                {/* Left Card */}
                <FormDetails
                    buttonTitle="افزودن شرکت"
                    title="مشخصات شرکت / سازمان"
                />
                {/* Right Card */}
                <BoxDetails
                    title="شرکت جدید"
                    subtitle="لوگو شرکت/سازمان"
                    buttonTitle="انتخاب لوگو"
                    icon={BsFillBuildingsFill}
                />
            </main>
        </div>
    );
}
