import DashTable from '../../../Layouts/sections/DashTable';

export default function RecentSales() {
    const headerNames = [
        'تاریخ',
        'وضعیت',
        'مبلغ فاکتور',
        'فروشنده',
        'مشتری',
        'شماره فاکتور',
    ];

    const tableData = [
        [
            '	1401/12/24',
            'تایید شده',
            '1,541,110,704 ریال',
            'ویرا ایرانی',
            'رضا شافعی',
            '00020',
        ],
        [
            '	1401/12/24',
            'تایید شده',
            '1,541,110,704 ریال',
            'ویرا ایرانی',
            'رضا شافعی',
            '00020',
        ],
        [
            '	1401/12/24',
            'تایید شده',
            '1,541,110,704 ریال',
            'ویرا ایرانی',
            'رضا شافعی',
            '00020',
        ],
        [
            '	1401/12/24',
            'پرداخت شده',
            '1,541,110,704 ریال',
            'ویرا ایرانی',
            'رضا شافعی',
            '00020',
        ],
        [
            '	1401/12/24',
            'پرداخت شده',
            '1,541,110,704 ریال',
            'ویرا ایرانی',
            'رضا شافعی',
            '00020',
        ],
    ];

    const rowStyles = [
        
    ];

    return (
        <div className="container mx-auto my-4">
            <DashTable
                headerNames={headerNames}
                tableData={tableData}
                rowStyles={rowStyles}
                mainTitle="فروش های اخیر"
            />
        </div>
    );
}
