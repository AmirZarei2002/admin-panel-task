import BoxDetails from '../Layouts/sections/manage-card/BoxDetails';
import FormDetails from '../Layouts/sections/manage-card/FormDetails';

export default function CompanyManagement() {
    return (
        <main className="w-full flex flex-col-reverse lg:flex-row justify-center px-4 md:px-0 gap-5 2xl:space-x-2 lg:px-6">
            {/* Left Card */}
            <FormDetails />
            {/* Right Card */}
            <BoxDetails />
        </main>
    );
}
