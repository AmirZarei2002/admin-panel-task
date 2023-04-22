import { RxDotsVertical } from 'react-icons/rx';

export default function DashTable({ data, mainTitle }) {
    return (
        <div className="relative rounded-xl bg-white">
            <div className="p-3 md:text-end text-start flex flex-row-reverse justify-between">
                <h2 className='font-semibold'>{mainTitle}</h2>
                <RxDotsVertical className="cursor-pointer text-xl" />
            </div>
            <div className="border-b-2 mx-3 mb-1" />
            <div className="overflow-x-auto overflow-y-scroll max-h-[calc(100vh-6rem)]">
                <table className="table-auto w-full text-end">
                    <thead>
                        <tr>
                            {Object.keys(data[0])?.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-2 text-gray-800 text-md font-bold"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-t">
                                {Object?.values(row).map((cell, index) => (
                                    <td
                                        key={index}
                                        className="px-4 py-2 text-gray-600 text-sm font-normal"
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
           
        </div>
    );
}
