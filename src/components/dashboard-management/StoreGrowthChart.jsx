import React, { useRef, useEffect } from 'react';

import Chart from 'chart.js/auto';

export default function StoreGrowthChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'پنج ماه گذشته',
                    'چهار ماه گذشته',
                    'سه ماه گذشته',
                    'دو ماه گذشته',
                    'ماه گذشته',
                    'ماه جاری',
                ],
                datasets: [
                    {
                        label: 'هزینه های جانبی',
                        data: [0, 0, 2, 3, 2, 0, 0],
                        backgroundColor: [
                            '#2f68e0',
                            '#53d028',
                            '#2867d0',
                            '#2867d0',
                            '#2867d0',
                            '#dc3545',
                            '#dc3545',
                        ],
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        borderRadius: 30,
                        barThickness: 40,
                        maxBarThickness: 30,
                    },
                    {
                        label: 'درآمد های جانبی',
                        data: [0, 1, 2, 0, 0, 0, 0],
                        backgroundColor: [
                            '#3aa814',
                            '#53d028',
                            '#53d028',
                            '#3aa814',
                            '#53d028',
                            '#dc3545',
                            '#dc3545',
                        ],
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        borderRadius: 30,
                        barThickness: 40,
                        maxBarThickness: 30,
                    },
                    {
                        label: 'فروش محصولات',
                        data: [0, 0, 3, 3, 2, 0, 0],
                        backgroundColor: [
                            '#dc3545',
                            '#53d028',
                            '#df4141',
                            '#dc3545',
                            '#dc3545',
                            '#dc3545',
                            '#dc3545',
                        ],
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        borderRadius: 30,
                        barThickness: 40,
                        maxBarThickness: 30,
                    },
                ],
            },
            options: {
                legend: {
                    display: true,
                    position: 'bottom',
                    align: 'center',
                },
            },
        });
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className="text-end border bg-white rounded-xl p-3 w-[110%] sm:w-[50%] sm:h-[20%] md:w-[86%] lg:w-[49%] xl:w-[52%] 2xl:w-[49.8%] lg:h-[50%]">
            <h2 className="font-semibold text-black/60">
                نمودار رشد فروشگاه در شش ماه اخیر
            </h2>
            <canvas ref={chartRef} />
        </div>
    );
}
