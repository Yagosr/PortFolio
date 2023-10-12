import Link from "next/link";

export default function Main() {
    return(
        <main className="flex align-center justify-center gap-32 ">
            <div className="pt-40">
                <div className="text-5xl">
                    <h1 className="">Yago <br /> santana </h1>
                </div>
                <div className="text-zinc-400">
                    <span>Front-end developer</span>
                </div>
                <div className="flex flex-row gap-3">
                    <Link href="https://www.linkedin.com/in/yago-santana-2926b0218/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin cursor-pointer text-zinc-200 hover:text-purple"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github cursor-pointer text-zinc-200 hover:text-purple"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div> 
            </div>
            <div className="flex align-center justify-center">
                <img className="" src="./img/Avatar-Maker.png" alt="imagem cartoon" width={400} height={400}/>
            </div>
            <div className="flex justify-center items-center flex-col gap-4 mt-20">
                <a href="https://wa.me/5511980951545" target="blank">
                    <div className="flex items-center justify-center border border-solid rounded-2xl text-purple border-purple  w-52 h-10 gap-2 cursor-pointer hover:bg-purple hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>                    
                        <strong>Vamos conversar</strong>
                    </div>
                </a>
                <a href="./arquivos/CV - Yago Santana.pdf" download="Cv - Yago">
                    <div className="text-purple cursor-pointer justify-center items-center flex gap-1">
                        <strong className="">Baixar CV</strong> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>                
                    </div>
                </a>
            </div>
        </main>
    )
} 




      