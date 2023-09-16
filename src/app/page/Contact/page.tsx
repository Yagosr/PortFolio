'use client'
import {useRouter} from "next/navigation"
import ButtonBack from "@/app/components/ButtonBack/page";


const router = useRouter();
const handleInput = () => {
    router.push("http://localhost:3000")
}

export default function Contact() {
    return(
        <main>
            <div className="" onClick={handleInput}>
                <ButtonBack/>
            </div>
            <div className="flex align-center justify-center rounded-2xl">
                
            </div>
        </main>
        
    )
}