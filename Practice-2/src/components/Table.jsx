import React from "react";
import PropTypes from "prop-types";

const Table = ({ netIncomes }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-50 to-gray-200 w-full">
      <div className="overflow-x-auto shadow-2xl rounded-xl max-w-5xl w-full">
        <table className="w-full table-fixed divide-y divide-cool-gray-300">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-800">
            <tr>
              <th className="px-8 py-4 text-left text-lg font-bold text-white uppercase tracking-wider">
                Marca
              </th>
              <th className="px-8 py-4 text-left text-lg font-bold text-white uppercase tracking-wider">
                Ingreso Neto
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {netIncomes.map((i) => (
              <tr key={i.brand} >
                <td className="px-8 py-5 whitespace-nowrap text-md font-semibold text-gray-900">{i.brand}</td>
                <td className="px-8 py-5 whitespace-nowrap text-md text-gray-600">{i.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.array.isRequired,
};

export default Table;
