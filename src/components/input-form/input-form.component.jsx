/* eslint-disable react/prop-types */


const InputForm = ({ label, inputOptions }) => {
    return (
        <>
            <div>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <div className="mt-1">
                    <input
                        {...inputOptions}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    />
                </div>
            </div>
        </>
    )
}

export default InputForm;
