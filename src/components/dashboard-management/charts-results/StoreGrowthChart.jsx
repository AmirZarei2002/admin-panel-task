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
                            '#40f485',
                            '#2867d0',
                            '#2867d0',
                            '#2867d0',
                            '#f46363',
                            '#f46363',
                        ],
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        borderRadius: 30,
                        barThickness: 18,
                        maxBarThickness: 30,
                    },
                    {
                        label: 'درآمد های جانبی',
                        data: [0, 1, 2, 0, 0, 0, 0],
                        backgroundColor: [
                            '#71b4fe',
                            '#40f485',
                            '#40f485',
                            '#71b4fe',
                            '#40f485',
                            '#f46363',
                            '#f46363',
                        ],
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        borderRadius: 30,
                        barThickness: 18,
                        maxBarThickness: 30,
                    },
                    {
                        label: 'فروش محصولات',
                        data: [0, 0, 3, 1, 2, 0, 0],
                        backgroundColor: [
                            '#f46363',
                            '#40f485',
                            '#f46363',
                            '#f46363',
                            '#f46363',
                            '#f46363',
                            '#f46363',
                        ],
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        borderRadius: 30,
                        barThickness: 18,
                        maxBarThickness: 30,
                    },
                ],
            },
            options: {
                plugins: {
                    tooltip: {
                        position: 'nearest',
                        backgroundColor: '#cdc6c6',
                        titleColor: 'black',
                        titleFont: {
                            size: 15,
                        },
                        bodyColor: 'gray',
                        bodyFont: {
                            size: 10,
                        },
                    },
                },
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
        <div className="text-end border bg-white rounded-xl p-3 w-full">
            <h2 className="font-semibold text-black/60">
                نمودار رشد فروشگاه در شش ماه اخیر
            </h2>
            <canvas
                ref={chartRef}
                style={{ height: '25rem', maxHeight: '25rem' }}
            ></canvas>
        </div>
    );
}
