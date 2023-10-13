'use client'
import {useRouter} from "next/navigation"
import ButtonBack from "@/app/components/ButtonBack/page";

export default function carrer() {

    const router = useRouter();
    const handleInput = () => {
        router.push("http://localhost:3000")
    }

    return(
        <main>
            <div className="" onClick={handleInput}>
                <ButtonBack/>
            </div>
            <div>
                <h1 className="flex justify-center text-2xl" >Trajetoria até aqui</h1>
            </div>
            
            <div className="flex justify-center items-center gap-64 p-10">

                <div>
                    <h1 className="flex justify-center items-center">Área profissional</h1>
                        <div className="flex flex-col gap-3 mt-10 border border-solid border-purple hover:bg-purple-card rounded-xl p-5">
                            <strong>desenvolvedor Front-end</strong>
                            <span className="text-xs"> Front-end Júnior autônomo com as tecnologias React.Js,<br />
                                 Styled-components, consumo a APIs e metodologias ágeis
                          </span>
                          <div className="flex justify-between text-purple-text text-xs">
                            <span>6 Meses</span>
                            <span>Mai/2023 - Atualmente</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-10 border border-solid border-purple hover:bg-purple-card rounded-xl p-5">
                            <strong>Operador de caixa - Giro alimentos</strong>
                            <span className="text-xs"> Atuava como operador de caixa em um atacado de doces, auxliava nas reposições <br />
                                de mercadoria e auxilio aos clientes
                            </span>
                          <div className="flex justify-between text-purple-text text-xs">
                            <span>6 Meses</span>
                            <span>Dez/2022 - Mai/2023</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-10 border border-solid border-purple hover:bg-purple-card rounded-xl p-5">
                            <strong>Jovem aprendiz - Drogaria Bifarma</strong>
                            <span className="text-xs">Atuava como Repositor de loja da drogaria Bifarma auxiliando aos operadores de caixa,<br />
                             tirar duvidas de clientes, repor mercadorias da loja,<br /> organização e limpeza e marcações de preços. 
                          </span>
                          <div className="flex justify-between text-purple-text text-xs">
                            <span>Contrato de 11 Meses</span>
                            <span>Fev/2021 - Dez/2021</span>
                          </div>
                        </div>
                </div>
                
                <div className="mb-10">
                    <h1 className="flex justify-center items-center">Área acadêmica</h1>
                        <div className="flex flex-col gap-3 mt-10 border border-solid border-purple hover:bg-purple-card rounded-xl p-5">
                                <strong>Superior, Análise e Desenvolvimento de Sistemas</strong>
                                <span className="text-xs"> Curso na Unip - marquês, Atualmente no 4 semestre Termíno em Dez/2023
                            </span>
                            <div className="flex justify-between text-purple-text text-xs">
                                <span>2 Anos</span>
                                <span>Fev/2022 - Atualmente</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-10 border border-solid border-purple hover:bg-purple-card rounded-xl p-5">
                                <strong>React Developer</strong>
                                <span className="text-xs"> Curso de especialização em ReactJS cagra horaria de 34 horas da Dio (Digital innovation one) 
                            </span>
                            <div className="flex justify-between text-purple-text text-xs">
                                <span>3 semanas</span>
                                <a href="../arquivos/React-certificado.pdf" download="Certificado-React-Yago">
                                    <span>Ver Certificado</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-10 border border-solid border-purple hover:bg-purple-card rounded-xl p-5">
                                <strong>Logica de Programação</strong>
                                <span className="text-xs"> Curso tecnico da Dio (Digital Innovation Onde) de logica de programação 
                            </span>
                            <div className="flex justify-between text-purple-text text-xs">
                                <span>1 Semana</span>
                                <a href="../arquivos/logica-certificado.pdf" download="Certificado-Logica-Yago">
                                    <span>Ver Certificado</span>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </main>
    )
}

