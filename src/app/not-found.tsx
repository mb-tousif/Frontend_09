import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center absolute w-full min-h-screen bg-cover bg-[url('../assets/404.svg')] ">
      <div className="my-auto">
        <h1 className="text-2xl mt-28 text-[#C64853]">
          Oops! We’ve got a problem.
        </h1>
        <div className="flex justify-center mt-4 text-gray-50">
          <Link
            href="/"
            className="w-32 mb-2 flex items-center p-1 justify-center bg-[#4887C6] rounded-md shadow-md focus:outline-none"
          >
            <i className="bx bxs-home w-5"></i>
            <span>Go home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
