import React, { useState } from 'react';
import iconemprestar from '/img/iconemprestar.png';
import { IBook, ProcurarBook, RemoverBooks } from "../services/routes.js";
import botaotrash from '/img/botaotrash.png';
import search from '/img/search.png';

import { Select, initTE } from "tw-elements";
initTE({ Select });

interface CardProps {
    book: IBook;
}

const Card: React.FC<CardProps> = ({ book }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className='w-[550px] min-h-[150px] bg-white rounded-xl relative cursor-pointer' id={book._id.toString()} onClick={handleClick} style={{
                backgroundColor: isActive ? "#00D8E8" : "#FFF",
                color: isActive ? "#000" : ""
            }}>
                <div className='p-3 overflow-auto max-h-[130px]'>
                    <p className='max-w-[400px] font-bold'>Livro : <span className="font-semibold">{book.Titulo}</span></p>
                    <p className='max-w-[400px] font-bold'>Tombo Atual : <span className="font-semibold">{book.Tombo_Atual}</span></p>
                    <p className='max-w-[400px] font-bold'>Genero : <span className="font-semibold">{book.Genero}</span></p>
                    <p className='max-w-[400px] font-bold'>Cutter : <span className="font-semibold">{book.Cutter}</span></p>

                </div>
            </div>
        </>


    )
};



function PageRemover() {

    const [Books, setBooks] = useState<IBook[]>([]);

    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            ProcurarBook().then((data) => {
                setBooks(data)
            }).catch((err) => {
                console.error('API error:', err);
            })
        }
    };

    return (
        <>
            <main className='w-full h-full grid grid-cols-2 items-center justify-items-center bg-cinza-claro'>
                <img className='h-[600px]' src={iconemprestar} alt='logo da loja' />
                <section className='w-[800px] h-[600px]'>
                    <div className='flex flex-row justify-between'>
                        <div className='w-[200px] h-[80px] rounded-xl bg-white'>
                            <select data-te-select-init className='w-full h-full cursor-pointer text-2xl text-center text-azul-claro font-bold' id='campo'>
                                <option value="Titulo" className=' font-semibold'>Título</option>
                                <option value="Emprestimo.Nome" className='font-semibold'>Nome</option>
                                <option value="Tombo_Atual" className='font-semibold'>Tombo Atual</option>
                                <option value="Tombo_Antigo" className='font-semibold'>Tombo Antigo</option>
                            </select>
                        </div>

                        <div className='w-[550px] h-[80px] rounded-xl bg-white flex flex-row justify-center items-center'>
                            <input className='w-[500px] h-[70px] rounded-xl p-3 text-4xl' type='text' id='search' onKeyDown={handleKeyDown} />
                            <div className='w-[80px] h-[80px] bg-azul-claro rounded-xl cursor-pointer p-2' onClick={() => {
                                ProcurarBook().then((data) => {
                                    setBooks(data)
                                }).catch((err) => {
                                    console.error('API error:', err);
                                })
                            }}>
                                <img src={search} alt='icons pesquisar' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[420px]  flex flex-col items-end gap-5 mt-10 overflow-auto'>
                        {Books.length > 0 ? (
                            <>
                                {Books.map((book) => (
                                    <Card book={book} />
                                ))}
                            </>
                        ) : (
                            <p>Não há livros para Remover</p>
                        )}

                    </div>
                </section>
            </main>

            <section className='w-[100px] h-[100px] bg-cinzento absolute end-[40px] bottom-24 shadow-border-shadow rounded-xl flex justify-center items-center'>
                <div className='w-[75px] h-[75px] bg-white rounded-xl shadow-border-shadow2 flex justify-center items-center'>
                    <img className='w-9/12' src={botaotrash} alt='logo da loja' onClick={() => RemoverBooks(Books)} />
                </div>
            </section>
        </>
    )
}

export default PageRemover