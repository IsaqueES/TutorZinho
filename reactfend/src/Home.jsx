
export default function PostIndex() {
  return (
    <div className="text-2xl font-serif">
      <h1 className="text-6xl">Tutorzinho</h1>
    <hr />
    <p>
      Olá,este é o Tutorzinho, um site feito por Isaque Estolano de Souza para a
      criação/vizualização do Back-End do projeto principal TutorTime que é
      feito com colaboração de Luis Henrique Abrantes e Cauã Almeida Moura
    </p>
    <hr/>
    <form action="/adduser" method="post">
        <h3>Formulario de Criação de Usuario</h3>
        <input className="border m-2 p-2 " type="text" placeholder="Nome" name="name"/>
        <input className="border m-2 p-2 " type="text" placeholder="Email" name="email"/>
        <input className="border m-2 p-2 " type="text" placeholder="Senha" name="password"/>
        <input className="border m-2 p-2 " type="radio" name="type" value="Aluno"/> Aluno
        <input className="border m-2 p-2 " type="radio" name="type" value="Professor"/> Professor
        <button type="submit">Login</button>
    </form>
    <hr/>
    <form action="/addcourse" method="post">

        <button type="submit">Criar</button>
    </form>
    <form action="/addsubject" method="post">
        <h3>Formulario de criação de Matéria</h3>
        <input className="border m-2 p-2 " type="text" placeholder="Nome" name="name"/>        <h3>Formulario de criação de Curso</h3>
        <input className="border m-2 p-2 " type="text" placeholder="Nome" name="name"/>
        <button type="submit">Criar</button>
    </form>
    <form action="/addclass" method="post">
        <h3>Formulario de criação de Monitoria</h3>
        <input className="border m-2 p-2 " type="text" placeholder="Matéria" name="subject"/>
        <input className="border m-2 p-2 " type="text" placeholder="Curso" name="course"/>
        <input className="border m-2 p-2 " type="text" placeholder="Imagem URL" name="imgurl"/>
        <button type="submit">Criar</button>
    </form>
    </div>
  );
}
