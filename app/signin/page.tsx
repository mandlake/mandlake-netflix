"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function SignIn() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const apiKey = process.env.TMDB_API_KEY || "";

  // Sign In 상태
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Sign Up 상태
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("로그인 성공");
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerPassword === confirmPassword) {
      console.log("회원가입 성공");
    }
  };

  const toggleCard = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    // Handle potential side effects (e.g., fetching data)
    console.log("kk");
  }, [apiKey]); // Run when apiKey changes

  return (
    <div className="bg-image flex justify-center items-center h-screen bg-black/90">
      <div id="phone" className="flex flex-col justify-start">
        <div className="w-full">
          {isLoginVisible ? (
            <div className="card hidden:lg md:block bg-blue-600 rounded-2xl justify-center items-center text-center shadow-md">
              <form
                onSubmit={handleLogin}
                className="flex flex-col items-center bg-white p-8 rounded-2xl h-4/5"
              >
                <h1 className="text-black font-extrabold text-2xl">Sign in</h1>
                <div className="flex flex-col space-y-6 w-[800px]">
                  <input
                    type="email"
                    className="p-2 border-b text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-600"
                    placeholder="Username or Email"
                    value={loginEmail}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setLoginEmail(e.currentTarget.value)
                    }
                  />
                  <input
                    type="password"
                    className="p-2 border-b text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-600"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setLoginPassword(e.currentTarget.value)
                    }
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <p className="font-bold text-lg">Remember Me</p>
                    </label>
                    <p className="font-bold text-lg">Forgot Password?</p>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-normal py-4 px-6 rounded-full"
                  >
                    LOGIN
                  </button>
                </div>
              </form>
              <Link
                href="#"
                className="account-check text-white hover:text-gray-200 flex justify-center gap-2 text-center py-8"
                onClick={toggleCard}
              >
                Don&apos;t have Account? <p className="font-bold">Sign Up</p>
              </Link>
            </div>
          ) : (
            <div className="card hidden:lg md:block bg-blue-600 rounded-2xl justify-center items-center text-center shadow-md">
              <form
                onSubmit={handleRegister}
                className="flex flex-col items-center bg-white p-8 rounded-2xl h-4/5"
              >
                <h1 className="text-black font-extrabold text-2xl">Sign up</h1>
                <div className="flex flex-col space-y-6 w-[800px]">
                  <input
                    type="email"
                    className="p-2 border-b text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-600"
                    placeholder="Email"
                    value={registerEmail}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setRegisterEmail(e.currentTarget.value)
                    }
                  />
                  <input
                    type="password"
                    className="p-2 border-b text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-600"
                    placeholder="Password"
                    value={registerPassword}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setRegisterPassword(e.currentTarget.value)
                    }
                  />
                  <input
                    type="password"
                    className="p-2 border-b text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-600"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setConfirmPassword(e.currentTarget.value)
                    }
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <p className="font-bold flex items-center gap-2 justify-center text-lg">
                        I have read
                        <p className="font-normal">Terms and Conditions</p>
                      </p>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-normal py-4 px-6 rounded-full"
                  >
                    REGISTER
                  </button>
                </div>
              </form>
              <Link
                href="#"
                className="account-check text-white hover:text-gray-200 flex justify-center gap-2 text-center py-8"
                onClick={toggleCard}
              >
                Already an account? <p className="font-bold">Sign in</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
