import OverallResults from '../components/dashboard-management/OverallResults';
import StoreGrowthChart from '../components/dashboard-management/StoreGrowthChart';
import ReleasedProduct from '../components/dashboard-management/ReleasedProduct';
import RecentSales from '../components/dashboard-management/RecentSales';
import TotalExpense from '../components/dashboard-management/TotalExpense';
import TotalIncome from '../components/dashboard-management/TotalIncome';

export default function ManagementDashboard() {
    return (
        <div>
            <OverallResults />
            <div className="flex flex-col-reverse justify-center lg:justify-between items-center lg:items-start sm:flex-col lg:flex-row sm:w-full px-4 md:px-0 gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <TotalExpense />
                    <TotalIncome />
                </div>
                <StoreGrowthChart />
            </div>
            <div>
                <ReleasedProduct />
                <RecentSales />
            </div>
        </div>
    );
}
