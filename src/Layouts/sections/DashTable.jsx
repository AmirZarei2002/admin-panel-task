import { RxDotsVertical } from 'react-icons/rx';

export default function DashTable({ mainTitle, headerNames, tableData, rowStyles }) {
    return (
      <div className="relative rounded-xl bg-white">
        <div className="p-3 md:text-end text-start flex flex-row-reverse justify-between">
          <h2 className="font-semibold">{mainTitle}</h2>
          <RxDotsVertical className="cursor-pointer text-xl" />
        </div>
        <div className="border-b-2 mx-3 mb-1" />
        <div className="overflow-x-auto overflow-y-scrol 2xl:overflow-y-hidden 2xl:overflow-x-hidden max-h-[calc(100vh-6rem)]">
          <table className="table-auto w-full text-end">
            <thead>
              <tr>
                {headerNames?.map((headerName, index) => (
                  <th key={index} className="px-4 py-2 text-sm">
                    {headerName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData?.map((rowData, rowIndex) => (
                <tr key={rowIndex} style={rowStyles[rowIndex]} className="border-t">
                  {rowData?.map((cellData, cellIndex) => (
                    <td key={cellIndex}    className="px-2 py-2 text-gray-600 text-sm font-normal">
                      {cellData}
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
  