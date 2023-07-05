import NavbarTemplate from "../sidebar-template/sidebar-template.component";


const Users = () => {
    return (
        <NavbarTemplate>
            <div className="w-screen shadow-sm bg-gray-200 h-screen flex items-center justify-center">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4">
                    <div className="flex items-center justify-between  text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-6">
                        <div className="flex flex-col justify-between gap-2 mb-2">
                            <h3 className="font-medium">Users</h3>
                            <p className="text-sm">A list of all the users in your account including their name, title, email and role.</p>
                        </div>
                        <div>
                            <button className="px-3 py-2 flex items-center font-medium justify-center rounded bg-amber-500 hover:bg-amber-600 text-white ">Add user</button>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Edit
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody className="pb-2">
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Usama
                                </th>
                                <td className="px-6 py-6">
                                    Usama@gmail.com
                                </td>
                                <td className="px-6 py-6">
                                    Admin
                                </td>
                                <td className="px-3 py-6">
                                    <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-green-700 rounded bg-green-600 px-4 py-2">Edit</a>
                                </td>
                                <td className="px-3 py-6">
                                    <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-red-700 rounded bg-red-600 px-4 py-2">Delete</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-6">
                                    White
                                </td>
                                <td className="px-6 py-6">
                                    Laptop PC
                                </td>
                                <td className="px-3 py-6">
                                    <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-green-700 rounded bg-green-600 px-4 py-2">Edit</a>
                                </td>
                                <td className="px-3 py-6">
                                    <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-red-700 rounded bg-red-600 px-4 py-2">Delete</a>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-6">
                                    Black
                                </td>
                                <td className="px-6 py-6">
                                    Accessories
                                </td>
                                <td className="px-3 py-6">
                                    <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-green-700 rounded bg-green-600 px-4 py-2">Edit</a>
                                </td>
                                <td className="px-3 py-4">
                                    <a href="#" className="font-medium text-white dark:text-amber-500 hover:bg-red-700 rounded bg-red-600 px-4 py-2">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </NavbarTemplate>
    )
}

export default Users;