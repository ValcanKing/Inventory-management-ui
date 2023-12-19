import Image from "next/image";
import Link from "next/link";

const otp = () => {
  return (
        <div className="bg-gradient-to-r from-[#696868] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center h-screen">
            <div className="max-w-[400px] bg-black bg-opacity-50 grid items-center gap-1 p-3 rounded-2xl">
                <div className="px-6 py-8 rounded shadow-md text-yellow-50 w-full">
                    <h2 className="mb-8 text-3xl text-center underline">Forgot Password?</h2>
                    <form action="" className="space-y-2 text-white">
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white bg-opacity-40 rounded-full p-1 flex items-center justify-center text-blue-300">
                            <Image 
                            src="/envelope.svg"
                            height="20"
                            width="20"
                            alt="envelope" />
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-80 bg-slate-50 py-2 px-12 rounded-full focus:bg-black focus:bg-opacity-20 focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                            name="Email"/>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white bg-opacity-40 rounded-full p-1 flex items-center justify-center text-blue-300">
                            <Image 
                                src="/lock.svg"
                                height="20"
                                width="20"
                                alt="lock" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Enter OTP" 
                            className="w-80 bg-slate-50 py-2 px-12 rounded-full focus:bg-black focus:bg-opacity-30 focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                            name="otp"/>
                    </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r text-black from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2"
                        >Submit</button>
                </form>
                
                </div>
                <div className=" text-yellow-50 border-t border-y-white pt-4 space-y-4 text-sm">
                    Already have an account?&nbsp;
                    <Link className="text-blue-400 font-semibold cursor-pointer" href="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
  )
}

export default otp;