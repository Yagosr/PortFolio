'use client'
import {useRouter} from "next/navigation"
import ButtonBack from "@/app/components/ButtonBack/page";

export default function ProjectsPage() {

    const router = useRouter();
    const handleInput = () => {
        router.push("http://localhost:3000")
    }
    
    return(
        <main className="">
            <div className="" onClick={handleInput}>
                <ButtonBack/>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="flex flex-col items-center justify-center rounded-md border border-dark-purple w-64 h-64 gap-5 ">
                    <div className=" w-52 ">
                        <img src="../img/pokedex.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center text-xs w-44">
                        <p>Pokedex com botões interativos onde se pode escolher qual pokemon visualizar</p>
                    </div>
                    <div className="flex justify-center gap-4 ">
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm" >
                            Repositorios
                        </button>
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm"  >
                            Visualizar
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md border border-dark-purple w-64 h-64 gap-5 ">
                    <div className=" w-52 ">
                        <img src="../img/spotify.png" alt="imagem projeto spotify" />
                    </div>
                    <div className="flex justify-center items-center w-44 text-xs">
                        <p>Tela estatica clone do aplicativo de musica Spotify</p>
                    </div>
                    <div className="flex justify-center gap-4 ">
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm">
                            <a href="https://github.com/Yagosr/Spotify-clone">
                                Repositorios
                            </a>
                        </button>
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm">
                            <a href="https://silver-maamoul-9962ee.netlify.app/">
                                Visualizar
                            </a>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md border border-dark-purple w-64 h-64 gap-5 ">
                    <div className=" w-52 ">
                        <img src="../img/netflix.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center text-xs w-44">
                        <p>tela estatica clone da netflix, feita com HTML e CSS</p>
                    </div>
                    <div className="flex justify-center gap-4 ">
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm">
                            <a href="https://github.com/Yagosr/Superflix">
                                Repositorios
                            </a>
                        </button>
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm">
                            <a href="https://silly-macaron-1f5be2.netlify.app/">
                                Visualizar
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-5 gap-5">
                <div className="flex flex-col items-center justify-center rounded-md border border-dark-purple w-64 h-64 gap-5 ">
                    <div className=" w-52 ">
                        <img src="../img/pokedex.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center text-sm">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nostrum repellendus vero persp</p>
                    </div>
                    <div className="flex justify-center gap-4 ">
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm" >
                            Repositorios
                        </button>
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm"  >
                            Visualizar
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md border border-dark-purple w-64 h-64 gap-5 ">
                    <div className=" w-52 ">
                        <img src="../img/pokedex.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center text-sm">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nostrum repellendus vero persp</p>
                    </div>
                    <div className="flex justify-center gap-4 ">
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm" >
                            Repositorios
                        </button>
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm"  >
                            Visualizar
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md border border-dark-purple w-64 h-64 gap-5 ">
                    <div className=" w-52 ">
                        <img src="../img/pokedex.png" alt="" />
                    </div>
                    <div className="flex justify-center items-center text-sm">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nostrum repellendus vero persp</p>
                    </div>
                    <div className="flex justify-center gap-4 ">
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm" >
                            Repositorios
                        </button>
                        <button className="border border-dark-purple bg-dark-purple h-10 w-24 hover:bg-dark-gray  text-sm"  >
                            Visualizar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}