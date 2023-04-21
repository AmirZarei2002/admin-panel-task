import DoughnutChart from '../../Layouts/sections/DoughnutChart';

export default function Doughnuts() {
    const firstChartData = {
        labels: ['بدهکاری فروش محصولات', 'هزینه های جانبی'],
        label: '7,927,813,894 ریال',
        values: [90, 10],
        colors: ['#d55450', '#d15668'],
        hovercolors: ['#c34631', '#fb4e45'],
    };

    const secondChartData = {
        labels: ['فروش محصولات', 'درآمد های جانبی'],
        label: '7,927,813,894 ریال',
        values: [70, 40],
        colors: ['#28a745', '#5eb566'],
        hovercolors: ['#129912', '#5eb566'],
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <DoughnutChart
                mainTitle="نمودار کل هزینه ها"
                totalCost="7,927,813,894"
                classes="text-[#c0515c]"
                chartData={firstChartData}
            />
            <DoughnutChart
                mainTitle="نمودار کل درآمدها"
                totalCost="2,047,077,000"
                classes="text-[#28a745]"
                chartData={secondChartData}
            />
        </div>
    );
}
