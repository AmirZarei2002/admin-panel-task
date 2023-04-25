import DashTable from '../../../Layouts/sections/DashTable';

export default function ReleasedProduct() {
    const headerNames = [
        'تاریخ',
        'قیمت واحد',
        'تعداد',
        ' دسته بندی',
        'نام محصول',
        'کد',
    ];

    const tableData = [
        [
            '	1401/12/24',
            '95,000,000 ریال',
            '15',
            'انواع دوربین',
            '	دوربین دیجیتال کانن مدل EOS 4000D',
            '00020',
        ],
        [
            '	1401/12/24',
            '95,000,000 ریال',
            '15',
            'انواع دوربین',
            '	دوربین دیجیتال کانن مدل EOS 4000D',
            '00020',
        ],
        [
            '	1401/12/24',
            '95,000,000 ریال',
            '15',
            'انواع دوربین',
            '	دوربین دیجیتال کانن مدل EOS 4000D',
            '00020',
        ],
        [
            '	1401/12/24',
            '95,000,000 ریال',
            '15',
            'انواع دوربین',
            '	دوربین دیجیتال کانن مدل EOS 4000D',
            '00020',
        ],
        [
            '	1401/12/24',
            '95,000,000 ریال',
            '15',
            'انواع دوربین',
            '	دوربین دیجیتال کانن مدل EOS 4000D',
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
                mainTitle="جدید ترین محصولات"
            />
        </div>
    );
}
