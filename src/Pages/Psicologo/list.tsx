import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

import { listarPsicologo } from "../../services/MainApi/psicologos";
import { RootStore } from "../../store";

interface Psicologo {
    nome: string;
    apresentacao: string;
    email: string;
    senha: string;
}

export default function PsicologoList() {
    const [psicologos, setPsicologos] = useState<Psicologo[]>([]);
    const user = useSelector((store: RootStore)=> store.userReduce);
    useEffect(() => {
        const getData = async () => {
            try {
                if (!user.isLogged || !user.token) return;
                const response = await listarPsicologo(user.token);

                setPsicologos(response.data);
            } catch (error) {
                alert("Deu algo errado");
            }
        };

        getData();
    }, [setPsicologos, user.isLogged, user.token]);
    return (
        <main className="container card my-5 p-5">
            <h1>Lista de Psicologo</h1>
            <ul className="list-group">
                {psicologos.map(psicologo => (
                    <li className="list-group-item">{psicologo.nome}</li>
                ))}
            </ul>
        </main>
    );
}