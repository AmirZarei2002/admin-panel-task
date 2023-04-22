import DoughnutChart from '../../../Layouts/sections/DoughnutChart';


export default function TotalIncome() {
    const data = {
        labels: ['فروش محصولات', 'درآمد های جانبی'],
        label: '7,927,813,894 ریال',
        values: [70, 40],
        colors: ['#28a745', '#5eb566'],
        hovercolors: ['#129912', '#5eb566'],
    };

  return (
    <div>
       <DoughnutChart
                mainTitle="نمودار کل درآمدها"
                totalCost="2,047,077,000"
                classes="text-[#28a745]"
                chartData={data}
            />
    </div>
  )
}
