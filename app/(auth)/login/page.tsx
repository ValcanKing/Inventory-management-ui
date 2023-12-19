"use client"
import Image from "next/image";
import Link from "next/link";


const LoginPage = () => {
  return (
<div className="bg-gradient-to-r from-[#9a9595] from-10% via-[#a9e2f0] via-30% to-[#72bdef] to-90% flex items-center justify-center h-screen">
        <div className="max-w-[960px] bg-black bg-opacity-50 grid grid-cols-2 items-center gap-1 p-3 rounded-2xl">
            <div className="relative">
                <Image 
                src="/signup-background.svg" 
                height="250"
                width="250"
                alt="sign-in-back"/>
                <Image 
                src="/teamwork.svg" 
                height="250"
                width="250"
                alt="sign-in-bg" 
                className="absolute top-36"/>
            </div>

            <div className="max-w-80 grid gap-5">
                <h2 className="text-5xl font-bold text-white">Login</h2>
                <p className="text-yellow-50 text-xs">Access to IMS,to have smooth andeasy inventory management</p>
                <form action="" className="space-y-2 text-white">
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white bg-opacity-40 rounded-full p-1 flex items-center justify-center text-blue-300">
                            <Image 
                            src="/envelope.svg"
                            height="20"
                            width="20"
                            alt="envelope" />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-80 bg-slate-50 py-2 px-12 rounded-full focus:bg-black focus:bg-opacity-20 focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1 left-1 bg-white bg-opacity-40 rounded-full p-1 flex items-center justify-center text-blue-300">
                            <Image 
                                src="/lock.svg"
                                height="20"
                                width="20"
                                alt="lock" />
                        </div>
                        <input type="text" placeholder="Password" className="w-80 bg-slate-50 py-2 px-12 rounded-full focus:bg-black focus:bg-opacity-30 focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                    </div>
                    <Link href="/documents">
                    <button className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2">Sign in</button>
                    </Link>
                </form>
                    <div className=" text-yellow-50 border-t border-y-white pt-4 space-y-4 text-sm">
                        <p>Don&apos;t have an account? <Link className="text-blue-400 font-semibold cursor-pointer" href="/signup">Sign up</Link></p>
                        <p>Forgot password? <Link className="text-blue-400 font-semibold cursor-pointer" href="/otp">Reset password</Link></p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LoginPage;