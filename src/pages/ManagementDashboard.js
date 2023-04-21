import OverallResults from '../components/dashboard-management/OverallResults';
import Doughnuts from '../components/dashboard-management/Doughnuts';
import StoreGrowthChart from '../components/dashboard-management/StoreGrowthChart';

export default function ManagementDashboard() {
    return (
        <div>
            <OverallResults />
            <div className="flex flex-col-reverse justify-center lg:justify-between items-center lg:items-start sm:flex-col lg:flex-row sm:w-full px-4 md:px-0 gap-4">
                <Doughnuts />
                <StoreGrowthChart />
            </div>
        </div>
    );
}
