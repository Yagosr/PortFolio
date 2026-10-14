'use client'
import {useRouter} from "next/navigation"
import ButtonBack from "@/app/components/ButtonBack/page";

export default function Contact() {

    const router = useRouter();
    const handleInput = () => {

        router.push("http://localhost:3000")
    }
    return(
        <main>
            <div className="" onClick={handleInput}>
                <ButtonBack/>
            </div>

            <div className="flex items-center justify-center text-2xl p-12 ">
                <strong>Vamos conversar!</strong>
            </div>

            <div className="flex items-center justify-center p-24 gap-5">
                <div className="flex items-center justify-center border border-solid rounded-2xl text-purple border-purple w-52 p-1 gap-2 cursor-pointer hover:bg-purple hover:text-black">
                    <a href="https://wa.me/5511980951545" target="blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>                    
                    </a>
                    <strong>Vamos conversar</strong>
                </div>

                <div className="flex flex-col items-center justify-center gap-0 text-purple mb-5">
                    <div className="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> 
                        <strong>Email</strong>
                    </div>
                    <div className=" flex items-center justify-center text-white" >
                        <span>yagosr25@gmail.com</span>
                    </div>
                </div>
            </div>
        </main>
        
    )
}