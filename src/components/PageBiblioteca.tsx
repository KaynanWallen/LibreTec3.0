import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { useEffect, useState } from 'react';
import { GetAllBooks, GetBooks, IBook } from '../services/routes';


interface CardProps {
    book: IBook;
}

function PageBiblioteca() {
    const [Books, setBooks] = useState<IBook[]>([]);
    useEffect(() => {
        // Inicialize a tabela DataTables aqui
        GetAllBooks().then((response) => {
            console.log(response)
            setBooks(response)
            const dataTable = $('#example').DataTable();
        }).catch((err) => {
            console.log("API Erro: " + err)
        })

    }, []);

    return (
        <>
            <main className='h-full w-full bg-cinza-claro p-10'>
                {Books.length > 0 ? (
                    <>
                        <table id="example" className='table-auto'>
                            <thead>
                                <tr>
                                    <th>Tombo Atual</th>
                                    <th>Tombo Antigo</th>
                                    <th>Titulo</th>
                                    <th>Autor</th>
                                    <th>Editora</th>
                                    <th>Aquisição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Books.map((book) => (
                                    <tr key={book._id.toString()}>
                                        <td>{book.Tombo_Atual}</td>
                                        <td>{book.Tombo_Antigo}</td>
                                        <td>{book.Titulo}</td>
                                        <td>{book.Autor}</td>
                                        <td>{book.Editora}</td>
                                        <td>{book.Aquisição}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </>
                ) : (
                    <p>Não há livros para devolver.</p>
                )}

            </main>
        </>
    )
}

export default PageBiblioteca