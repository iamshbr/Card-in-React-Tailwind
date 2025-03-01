export const Card = ({ fullName, title, btnColor }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-2">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Batman Image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {fullName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className={`"inline-flex items-center px-4 py-2 text-sm font-medium text-center ${btnColor} text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "`}
          >
            Add friend
          </a>
        </div>
      </div>
    </div>
  );
};
