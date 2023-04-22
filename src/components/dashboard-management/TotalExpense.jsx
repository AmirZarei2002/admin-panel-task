import DoughnutChart from '../../Layouts/sections/DoughnutChart';

export default function TotalExpense() {
    const data = {
        labels: ['بدهکاری فروش محصولات', 'هزینه های جانبی'],
        label: '7,927,813,894 ریال',
        values: [90, 10],
        colors: ['#d55450', '#d15668'],
        hovercolors: ['#c34631', '#fb4e45'],
    };
  return (
    <div>
       <DoughnutChart
                mainTitle="نمودار کل هزینه ها"
                totalCost="7,927,813,894"
                classes="text-[#c0515c]"
                chartData={data}
            />
    </div>
  )
}
