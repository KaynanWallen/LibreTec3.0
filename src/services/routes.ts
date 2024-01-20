import api from "./api";

export interface IBook {
    _id: {
      type: string,
      required: false,
    }
    Tombo_Atual: String, //Pode alterar para number
    Tombo_Antigo: String, //Pode alterar para number
    Autor: String,
    Titulo: String,
    Doador: {
      type: String,
      required: false,
      default: ''
    },
    Data: String,
    Editora: String,
    Local: String, 
    Ano: String, //Pode alterar para number
    Aquisição: String, 
    Cod_Barras: String,//Pode alterar para number
    Genero: String,
    Cod_class: String,
    Arquivo: String,
    Cutter: String,
    Palavra_Chave: String,
    Emprestimo: {
      State: boolean,
      Retirada: String,
      Devolucao: String,
      Turma: String,
      Nome: String,
      Reserva: Boolean,
      Renovacoes: String,
      Periodo: String,
      Entrega: String
    }
}

export async function GetBooks(): Promise<IBook[]> {
    try {
        const response = await api.get(`/book`);
        return response.data as IBook[];
    } catch (err) {
        console.error('ops! ocorreu um erro', err);
        throw err;
    }
}

export async function GetAllBooks(): Promise<IBook[]> {
  try {
      const response = await api.get(`/book/all`);
      return response.data as IBook[];
  } catch (err) {
      console.error('ops! ocorreu um erro', err);
      throw err;
  }
}


export async function DevolverBooks(books: IBook[]): Promise<void> {
  try {
      //console.log(books)
      books.forEach(book => {
        if(book.Emprestimo.State){
          const bookElement = document.getElementById(`${book._id}`);

          if(bookElement){
            if(bookElement.style.backgroundColor == 'rgb(0, 216, 232)') {
              book = {
                ...book,
                Palavra_Chave: '',
                Emprestimo: {
                  ...book.Emprestimo,
                  State: false,
                  Retirada: '',
                  Devolucao: '',
                  Turma: '',
                  Nome: '',
                  Reserva: false, 
                  Renovacoes: '',
                  Periodo: '',
                  Entrega: '',
                }
              }
              
              api.put(`/book`, book).then((response) => {alert('Livro Devolvido com sucesso!!');window.location.reload();}).catch((err) => {console.log(err)}); 

            }
          }
        }
      })
  } catch (err) {
      console.error('ops! ocorreu um erro', err);
      throw err;
  }
}

export async function AtualizarBook(): Promise<void> {
  let Tombo_Atual = document.getElementById('Tombo_Atual') as HTMLInputElement;

  api.post(`/book/searchone`, {search: Tombo_Atual.value}).then((response) =>{
    let Tombo_Antigo = document.getElementById('Tombo_Antigo') as HTMLInputElement;
    let Autor = document.getElementById('Autor') as HTMLInputElement;
    let Titulo = document.getElementById('Titulo') as HTMLInputElement;
    let Doador = document.getElementById('Doador') as HTMLInputElement;
    let Data = document.getElementById('Data') as HTMLInputElement;
    let Editora = document.getElementById('Editora') as HTMLInputElement;
    let Local = document.getElementById('Local') as HTMLInputElement;
    let Ano = document.getElementById('Ano') as HTMLInputElement;
    let Cod_Barras = document.getElementById('Cod_Barras') as HTMLInputElement;
    let Genero = document.getElementById('Genero') as HTMLInputElement;
    let Cod_Class = document.getElementById('Cod_Class') as HTMLInputElement;
    let Arquivo = document.getElementById('Arquivo') as HTMLInputElement;
    let Cutter = document.getElementById('Cutter') as HTMLInputElement;
    let Palavra_Chave = document.getElementById('Palavra_Chave') as HTMLInputElement;
    let Aquisicao = document.getElementById('Aquisicao') as HTMLInputElement;
    api.put('/book', {
      ...response.data,
      Tombo_Antigo: Tombo_Antigo.value, 
      Autor: Autor.value,
      Titulo: Titulo.value,
      Doador: Doador.value,
      Data: Data.value,
      Editora: Editora.value,
      Local: Local.value, 
      Ano: Ano.value, 
      Aquisição: Aquisicao.value, 
      Cod_Barras: Cod_Barras.value,
      Genero: Genero.value,
      Cod_class: Cod_Class.value,
      Arquivo: Arquivo.value,
      Cutter: Cutter.value,
      Palavra_Chave: Palavra_Chave.value,
    }).then((response) => alert('Livro Atualizado')).catch((response) => alert('Ocorreu Algum erro, tente mais tarde'))
  }).catch((err) => alert('Tombo de Livro não encontrado'))
}

export async function SearchAtualizarBook(): Promise<IBook[]> {
  let Tombo_Atual = document.getElementById('Tombo_Atual') as HTMLInputElement;

  api.post(`/book/searchone`, {search: Tombo_Atual.value}).then((response) =>{
    let Tombo_Antigo = document.getElementById('Tombo_Antigo') as HTMLInputElement;
    let Autor = document.getElementById('Autor') as HTMLInputElement;
    let Titulo = document.getElementById('Titulo') as HTMLInputElement;
    let Doador = document.getElementById('Doador') as HTMLInputElement;
    let Data = document.getElementById('Data') as HTMLInputElement;
    let Editora = document.getElementById('Editora') as HTMLInputElement;
    let Local = document.getElementById('Local') as HTMLInputElement;
    let Ano = document.getElementById('Ano') as HTMLInputElement;
    let Cod_Barras = document.getElementById('Cod_Barras') as HTMLInputElement;
    let Genero = document.getElementById('Genero') as HTMLInputElement;
    let Cod_Class = document.getElementById('Cod_Class') as HTMLInputElement;
    let Arquivo = document.getElementById('Arquivo') as HTMLInputElement;
    let Cutter = document.getElementById('Cutter') as HTMLInputElement;
    let Palavra_Chave = document.getElementById('Palavra_Chave') as HTMLInputElement;
    let Aquisicao = document.getElementById('Aquisicao') as HTMLInputElement;

    if(response.data){
      Tombo_Atual.value = response.data.Tombo_Atual!
      Tombo_Antigo.value = response.data.Tombo_Antigo!
      Autor.value = response.data.Autor!
      Titulo.value = response.data.Titulo!
      Doador.value = response.data.Doador!
      Data.value = response.data.Data!
      Editora.value = response.data.Editora!
      Local.value = response.data.Local!
      Ano.value = response.data.Ano!
      Cod_Barras.value = response.data.Cod_Barras!
      Genero.value = response.data.Genero!
      Cod_Class.value = response.data.Cod_Class!
      Arquivo.value = response.data.Arquivo!
      Cutter.value = response.data.Cutter!
      Palavra_Chave.value = response.data.Palavra_Chave!
      Aquisicao.value = response.data.Aquisicao!
      return response.data as IBook[];  
    }
    alert('Livro não encontrado')
    return Promise.resolve([]);
  }).catch((err) => {
    console.log(err)
    return Promise.resolve([]);
  })

  return Promise.resolve([]);
}


export async function AdicionarBok(): Promise<void>{
  let Tombo_Atual = document.getElementById('Tombo_Atual') as HTMLInputElement;
  let Tombo_Antigo = document.getElementById('Tombo_Antigo') as HTMLInputElement;
  let Autor = document.getElementById('Autor') as HTMLInputElement;
  let Titulo = document.getElementById('Titulo') as HTMLInputElement;
  let Doador = document.getElementById('Doador') as HTMLInputElement;
  let Data = document.getElementById('Data') as HTMLInputElement;
  let Editora = document.getElementById('Editora') as HTMLInputElement;
  let Local = document.getElementById('Local') as HTMLInputElement;
  let Ano = document.getElementById('Ano') as HTMLInputElement;
  let Cod_Barras = document.getElementById('Cod_Barras') as HTMLInputElement;
  let Genero = document.getElementById('Genero') as HTMLInputElement;
  let Cod_Class = document.getElementById('Cod_Class') as HTMLInputElement;
  let Arquivo = document.getElementById('Arquivo') as HTMLInputElement;
  let Cutter = document.getElementById('Cutter') as HTMLInputElement;
  let Palavra_Chave = document.getElementById('Palavra_Chave') as HTMLInputElement;
  let Aquisicao = document.getElementById('Aquisicao') as HTMLInputElement;


  api.post('/book', {
    Tombo_Atual: Tombo_Atual.value, //Pode alterar para number
    Tombo_Antigo: Tombo_Antigo.value, //Pode alterar para number
    Autor: Autor.value,
    Titulo: Titulo.value,
    Doador: Doador.value,
    Data: Data.value,
    Editora: Editora.value,
    Local: Local.value, 
    Ano: Ano.value, //Pode alterar para number
    Aquisição: Aquisicao.value, 
    Cod_Barras: Cod_Barras.value,//Pode alterar para number
    Genero: Genero.value,
    Cod_class: Cod_Class.value,
    Arquivo: Arquivo.value,
    Cutter: Cutter.value,
    Palavra_Chave: Palavra_Chave.value,
  }).then((response) => {
    alert('Deu cert')
    console.log(response)
  }).catch((err) => {
    console.log(err)
  })
}


export async function EmprestarBook(): Promise<void> {
  let Tombo_Atual = document.getElementById('Tombo_Atual') as HTMLInputElement;
  let Entrega = document.getElementById('Entrega') as HTMLInputElement;
  let Nome = document.getElementById('Nome') as HTMLInputElement;
  let Turma = document.getElementById('Turma') as HTMLInputElement;
  let Periodo = document.getElementById('Periodo') as HTMLInputElement;
  let Data_Retirada = document.getElementById('Data_Retirada') as HTMLInputElement;
  let Data_Devolucao = document.getElementById('Data_Devolucao') as HTMLInputElement;

    api.post(`/book/searchone`, {search: Tombo_Atual.value}).then((response) =>
    api.put('/book', {
      ...response.data,
      Emprestimo: {
        ...response.data.Emprestimo,
        State: true,
        Retirada: Data_Retirada.value,
        Devolucao: Data_Devolucao.value,
        Turma: Turma.value,
        Nome: Nome.value,
        Reserva: false, 
        Renovacoes: '',
        Periodo: Periodo.value,
        Entrega: Entrega.value,
      }}).then((response) => {alert('Livro Emprestado com sucesso!!');window.location.reload();}).catch((err) => {console.log(err)})
    ).catch((err) => alert('Tombo de livro não encontrado'));
}


export async function ProcurarBook(): Promise<IBook[]> {
  let campo = document.getElementById('campo') as HTMLInputElement;
  let search = document.getElementById('search') as HTMLInputElement;
  if(!search.value) {
    alert('Insira algo no campo de pesquisa')
    return Promise.resolve([]);
  }

  try {
      const response = await api.post('/book/search', {search : search.value , campo : campo.value});
      console.log(response.data)
      return response.data as IBook[];
  } catch (error) {
    console.log(error);
    return Promise.resolve([]);
  }
}


export async function RemoverBooks(books: IBook[]): Promise<void> {
  try {
      //console.log(books)
      books.forEach(book => {
          const bookElement = document.getElementById(`${book._id}`);
          if(bookElement){
            if(bookElement.style.backgroundColor == 'rgb(0, 216, 232)') {
              console.log(book._id)
              api.post(`/book/delete`, {id: book._id}).then((response) => {alert('Livro Removido com sucesso!!');window.location.reload();}).catch((err) => {console.log(err)}); 
            }
        }
      })
  } catch (err) {
      console.error('ops! ocorreu um erro', err);
      throw err;
  }
}