import { useState } from "react";

export default function PsicologoCreate() {
    const [nome, setNome] = useState<string>("");
    const [apresentacao, setApresentacao] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const cadastro =async (event) => {
        event.preventDefault();
    }

    return (
        <main className="container card my-5 p-5">
            <h1>Cadastro de Psicologo</h1>
            <form action="">
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apresentação</label>
                    <textarea
                        className="form-control"
                        value={apresentacao}
                        onChange={(event) => setApresentacao(event.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    />
                </div>

                <button className="btn btn-primary">Cadastrar</button>
            </form>
        </main>
    )
}