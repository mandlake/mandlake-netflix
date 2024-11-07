"use client";

export default function Home() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center bg-black/90">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
        <div className="relative bg-white p-10 rounded-lg shadow-lg w-96 z-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign in</h2>
          <form className="space-y-4">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Username or Email"
            />
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Password"
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition duration-200"
            >
              LOGIN
            </button>
          </form>
          {/* <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p> */}
        </div>
      </div>
    </>
  );
}
