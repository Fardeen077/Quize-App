function Quiz() {
    return (
        <div className="bg-white w-[640px] m-auto mt-5 flex flex-col gap-5 rounded-lg pl-12 pt-5 pr-12">
            <h1 className="text-xl">Quize App</h1>
            <hr className="bg-gray-500 border-none h-[1px]" />
            <h2 className="text-xl">1. Which device is required for the internet connection?</h2>
            <ul className="">
                <li className="flex items-center h-20 pl-5 rounded-lg text-sm cursor-pointer border border-black m-4">Modem</li>
                <li className="flex items-center h-20 pl-5 rounded-lg text-sm cursor-pointer border border-black m-4">Router</li>
                <li className="flex items-center h-20 pl-5 rounded-lg text-sm cursor-pointer border border-black m-4">Lan Cable</li>
                <li className="flex items-center h-20 pl-5 rounded-lg text-sm cursor-pointer border border-black m-4">Pen Drive</li>
            </ul>

            <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 m-4">
                Next
            </button>

            <div className="m-auto ">
                <p> 1 of 5 quiction</p>
            </div>
        </div>
    )
}
export default Quiz