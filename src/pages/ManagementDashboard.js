import OverallResults from '../components/dashboard-management/overall-results/OverallResults';
import StoreGrowthChart from '../components/dashboard-management/charts-results/StoreGrowthChart';
import TotalExpense from '../components/dashboard-management/charts-results/TotalExpense';
import TotalIncome from '../components/dashboard-management/charts-results/TotalIncome';
import ReleasedProduct from '../components/dashboard-management/tables-results/ReleasedProduct';
import RecentSales from '../components/dashboard-management/tables-results/RecentSales';

export default function ManagementDashboard() {
    return (
        <div className='px-4'>
            <OverallResults />
            <div className="flex flex-col-reverse justify-center lg:justify-between items-center sm:items-start sm:flex-col md:flex-row px-4 md:px-0 gap-4">
                <div className="flex flex-col items-center sm:flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-1 xl:space-x-3 w-full lg:w-1/2">
                    <div className="w-screen sm:w-full lg:w-1/2">
                        <TotalExpense />
                    </div>
                    <div className="w-screen sm:w-full lg:w-1/2">
                        <TotalIncome />
                    </div>
                </div>
                <div className="w-screen sm:w-full md:w-1/2 px-4 md:px-0">
                    <StoreGrowthChart />
                </div>
            </div>
            <div className="md:flex">
                <div className="w-full md:w-1/2 md:p-3">
                    <ReleasedProduct />
                </div>
                <div className="w-full md:w-1/2 md:p-3">
                    <RecentSales />
                </div>
            </div>
        </div>
    );
}
