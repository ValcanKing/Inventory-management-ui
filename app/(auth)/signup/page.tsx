import Image from "next/image";

const signUpPage = () => {
  return (
        <div className="bg-gradient-to-r from-[#9a9595] from-10% via-[#a9e2f0] via-30% to-[#72bdef] to-90% flex items-center justify-center h-screen">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="max-w-[960px] bg-black bg-opacity-50 grid grid-cols-1 items-center gap-1 p-3 rounded-2xl">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-80 bg-slate-50 py-2 px-12 rounded-full focus:bg-black focus:bg-opacity-20 focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                        name="Name"/>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-80 bg-slate-50 py-2 px-12 rounded-full focus:bg-black focus:bg-opacity-20 focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                        name="Email"/>
                    <input 
                        type="text" 
                        placeholder="Password" 
                        className="w-80 bg-slate-50 py-2 px-12 rounded-full focus:bg-black focus:bg-opacity-30 focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                        name="Password"/>
                    <input 
                        type="text" 
                        placeholder="Confirm Password" 
                        className="w-80 bg-slate-50 py-2 px-12 rounded-full focus:bg-black focus:bg-opacity-30 focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                        name="confirm_password"/>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="/login">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
  )
}

export default signUpPage;