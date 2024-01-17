/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const SecretsTable = ({ secrets }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-state-600 rounded-md w-1/12 text-center text-black">
            No
          </th>
          <th className="border border-state-600 rounded-md w-9/12 text-center text-black">
            Secret
          </th>
          <th className="border border-state-600 rounded-md w-2/12 text-center text-black">Operations</th>
        </tr>
      </thead>
      <tbody>
        {secrets.map((secret, index) => (
          <tr key={secret._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {secret.content}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/secrets/details/${secret._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/secrets/edit/${secret._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/secrets/delete/${secret._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SecretsTable;
