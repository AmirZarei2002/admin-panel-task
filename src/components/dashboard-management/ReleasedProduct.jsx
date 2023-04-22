import DashTable from '../../Layouts/sections/DashTable';

export default function ReleasedProduct() {
    const data = [
        {
            کد: '000020',
            'نام محصول': 'کنسول بازی مایکروسافت مدل',
            'دسته بندی': 'کنسول بازی و سرگرمی',
            تعداد: '15',
            'قیمت واحد': '300,000,000',
            تاریخ: '1401/12/24',
        },
        {
            کد: '000020',
            'نام محصول': 'کنسول بازی مایکروسافت مدل',
            'دسته بندی': 'کنسول بازی و سرگرمی',
            تعداد: '15',
            'قیمت واحد': '300,000,000',
            تاریخ: '1401/12/24',
        },
        {
            کد: '000020',
            'نام محصول': 'کنسول بازی مایکروسافت مدل',
            'دسته بندی': 'کنسول بازی و سرگرمی',
            تعداد: '15',
            'قیمت واحد': '300,000,000',
            تاریخ: '1401/12/24',
        },
        {
            کد: '000020',
            'نام محصول': 'کنسول بازی مایکروسافت مدل',
            'دسته بندی': 'کنسول بازی و سرگرمی',
            تعداد: '15',
            'قیمت واحد': '300,000,000',
            تاریخ: '1401/12/24',
        },
        {
            کد: '000020',
            'نام محصول': 'کنسول بازی مایکروسافت مدل',
            'دسته بندی': 'کنسول بازی و سرگرمی',
            تعداد: '15',
            'قیمت واحد': '300,000,000',
            تاریخ: '1401/12/24',
        },
    ];
    return (
        <div className="container mx-auto my-4">
            <DashTable data={data} mainTitle="جدید ترین محصولات" />
        </div>
    );
}
