import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/MainApi/login";

export default function Login(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const submit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await login({ email, senha });
            console.log(response.data);
            alert("Deu certo");
        } catch (error) {
            alert("Deu algo errado");
        }
    }
    return (
        <main className="container card my-5 p-5">
            <h1>Login Psicologo</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
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
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        Logar
                    </button>
                </div>
            </form>
            <Link to="/Lista">ir para Lista</Link>
        </main>
    )
}