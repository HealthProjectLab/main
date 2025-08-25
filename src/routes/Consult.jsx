import React from "react";
import { MdLogout, MdNotifications } from "react-icons/md";

export default function Consult() {
  return (
    <div className="max-w-">
      <div className="max-w-4xl mx-auto">
        <div className="text-white bg-gray-500 w-full flex justify-center items-center h-[400px] mx-auto">
          Video Call
        </div>
        <h1 className="text-2xl font-bold underline mt-4">Prescription</h1>
        <table className="border border-gray-500 w-auto mt-4">
          <thead className="border border-gray-500">
            <tr>
              <td>Medicine Name</td>
              <td>Quantity</td>
              <td>Timings</td>
            </tr>
          </thead>
          <tr>
            <td>Paracetmol</td>
            <td>2</td>
            <td>M, A, E</td>
          </tr>
          <tr>
            <td>Citrizen</td>
            <td>3</td>
            <td>M, A, E</td>
          </tr>
          <tr>
            <td>Dolo</td>
            <td>2</td>
            <td>M, A, E</td>
          </tr>
          <tr>
            <td>Gas</td>
            <td>2</td>
            <td>M, A, E</td>
          </tr>
          <tr>
            <td>Mitochondria</td>
            <td>2</td>
            <td>M, A, E</td>
          </tr>
          <tfoot>
            <tr className="border border-gray-500">
              <td colSpan={2} className="font-bold">
                Doctor's Signature:
              </td>
              <td>
                <img src="/signature.png" className="w-[150px] float-left" />
              </td>
            </tr>
          </tfoot>
        </table>

        <h1 className="text-2xl font-bold underline mt-4">
          Points to Remember
        </h1>

        <ul className="list-disc m-4 text-lg">
          <li>Drink Water Daily</li>
          <li>Don't eat Non-Veg</li>
          <li>Walk daily</li>
        </ul>
      </div>
    </div>
  );
}
2;
