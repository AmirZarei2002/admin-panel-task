import React from 'react'

export default function DashTable({data}) {
  return (
    <div className="overflow-x-auto">
    <table className="table-auto w-full">
      <thead>
        <tr>
          {Object.keys(data[0]).map((header, index) => (
            <th
              key={index}
              className="px-4 py-2 text-gray-600 font-semibold border"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-t">
            {Object.values(row).map((cell, index) => (
              <td
                key={index}
                className="px-4 py-2 text-gray-600 font-normal border"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
