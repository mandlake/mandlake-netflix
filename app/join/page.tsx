"use client";

export default function Home() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center bg-black/90">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
        <div className="relative bg-white p-10 rounded-lg shadow-lg w-96 z-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign up</h2>
          <form className="space-y-4">
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Password"
            />
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Confirm Password"
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" /> I have read Terms and Conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition duration-200"
            >
              REGISTER
            </button>
          </form>
          {/* <p className="mt-6 text-center text-sm text-gray-600">
            Already an account?
            <a href="#" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
}
