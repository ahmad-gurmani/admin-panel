// import { useEffect } from "react";
// import { auth } from "../../utils/firebase/firebase.utils";
import NavbarTemplate from "../sidebar-template/sidebar-template.component";
// import { ReactComponent as IconMenu } from '../../assets/MaskGroup.svg'
// import { useNavigate } from "react-router-dom";

import { BsGraphUpArrow } from "react-icons/Bs";
import { GiExpense } from "react-icons/Gi";
import { GiMoneyStack } from "react-icons/Gi";

const Dashboard = () => {
    return (
        <NavbarTemplate className="">
            <div className="w-screen bg-gray-200 h-screen">
                <h1 className="font-extrabold text-2xl mx-6 mt-2">Dashboard</h1>
                <div className="mx-6 my-6 rounded w-fit">
                    <input type="date" name="date" id="date" />
                </div>

                <div className="grid grid-cols-3 flex-row gap-5 mx-6 my-10">
                    {/* card 1 */}
                    <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="h-10 w-10 bg-amber-500 text-white rounded-full flex justify-center items-center mb-4"><BsGraphUpArrow /></div>
                        <h5 className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Total Sales
                        </h5>
                        <h1 className="my-4 font-extrabold text-3xl text-black dark:text-neutral-200">
                            $45.5
                        </h1>
                        <p className="text-sm text-neutral-400 dark:text-neutral-200 capitalize  ">
                            last 24 hours
                        </p>
                    </div>
                    {/* card 2 */}
                    <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="h-10 w-10 bg-amber-500 text-white rounded-full flex justify-center items-center mb-4"><GiExpense /></div>
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Total Expenses
                        </h5>
                        <h1 className="my-4 font-extrabold text-3xl text-black dark:text-neutral-200">
                            $15.5
                        </h1>
                        <p className="text-sm text-neutral-400 dark:text-neutral-200 capitalize  ">
                            last 24 hours
                        </p>
                    </div>
                    {/* card 3 */}
                    <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="h-10 w-10 bg-amber-500 text-white rounded-full flex justify-center items-center mb-4"><GiMoneyStack /></div>
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Total Income
                        </h5>
                        <h1 className="my-4 font-extrabold text-3xl text-black dark:text-neutral-200">
                            $30
                        </h1>
                        <p className="text-sm text-neutral-400 dark:text-neutral-200 capitalize  ">
                            last 24 hours
                        </p>
                    </div>
                </div>
                {/* table */}
                <div className="shadow-sm flex items-center justify-center">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full mx-6">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-amber-500 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Recipe Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Recipe Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Payment
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="pb-2">
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        burger
                                    </th>
                                    <td className="px-6 py-6">
                                        1234
                                    </td>
                                    <td className="px-6 py-6">
                                        paid
                                    </td>
                                    <td className="px-6 py-6">
                                        delivered
                                    </td>
                                    <td className="px-3 py-6">
                                        <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-orange-600 rounded bg-orange-500 px-4 py-2">Details</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        pizza
                                    </th>
                                    <td className="px-6 py-6">
                                        0000
                                    </td>
                                    <td className="px-6 py-6">
                                        unpaid
                                    </td>
                                    <td className="px-6 py-6">
                                        declined
                                    </td>
                                    <td className="px-3 py-6">
                                        <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-orange-600 rounded bg-orange-500 px-4 py-2">Details</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        pasta
                                    </th>
                                    <td className="px-6 py-6">
                                        9876
                                    </td>
                                    <td className="px-6 py-6">
                                        due
                                    </td>
                                    <td className="px-6 py-6">
                                        pending
                                    </td>
                                    <td className="px-3 py-6">
                                        <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-orange-600 rounded bg-orange-500 px-4 py-2">Details</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </NavbarTemplate>
    )
}

export default Dashboard;