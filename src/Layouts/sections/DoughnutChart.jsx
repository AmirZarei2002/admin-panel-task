import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    color: '#777',
    plugins: {
        tooltip: {
            titleColor: '#4573fb',
            bodyColor: 'gray',
            backgroundColor: 'white',
            titleFont: { size: 18, weight: 'bold' },
            bodyFont: { size: 15 },
        },
        legend: {
            display: true,
            position: 'bottom',
        },
    },
};

const DoughnutChart = ({ mainTitle, totalCost, chartData, classes }) => {
    const data = {
        labels: chartData?.labels,
        datasets: [
            {
                label: chartData?.label,
                data: chartData?.values,
                backgroundColor: chartData?.colors,
                hoverBackgroundColor: chartData?.hovercolors,
                borderWidth: 2
            },
        ],
    };

    return (
        <div className="h-full w-full relative px-4 md:px-0">
            <div className="border rounded-xl bg-white shadow-sm text-end sm:p-4 lg:p-5 xl:p-3 space-y-5">
                <div className="space-y-3 p-3 sm:p-0">
                    <h2>{mainTitle}</h2>
                    <div className={`font-semibold ${classes}`}>
                        {' '}
                        مجموع : <span>{totalCost}</span>ریال
                    </div>
                </div>
                <div className="flex flex-col items-center w-full h-full">
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
