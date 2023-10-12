'use client'
import {useRouter} from "next/navigation"
import ButtonBack from "@/app/components/ButtonBack/page";

export default function AboutMe() {

    const router = useRouter();
    const handleInput = () => {
        router.push("http://localhost:3000")
    }

    return(
        <main className="">
            <div className="" onClick={handleInput}>
                <ButtonBack/>
            </div>
            <div className="flex items-center justify-center gap-8">
                <div className="">
                    <img  src="../img/fotoRedomda.png" alt="imagem cartoon" width="300" height="300"/>
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                    <h1 className="text-4xl">Yago Santana Rocha</h1>
                    <p> 🤓 Olá sou o yago Tenho 19 anos</p>
                    <p> 🧑‍💻 Desenvolvedor Front-end</p>
                    <p> 👨‍🎓 Analise e desenvolvimento de sistemas 4 Semestre</p>
                    <p> 🚀 Interesses em ReactJS, NextJS, JavaScript</p>
                </div>
            </div>
        </main>
        
    )
}