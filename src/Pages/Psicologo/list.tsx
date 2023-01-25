import { useEffect, useState } from "react";
import { listarPsicologo } from "../../services/MainApi/psicologos";

interface Psicologo{
    nome: string;
    apresentacao: string;
    email: string;
    senha: string;
}

export default function PsicologoList() {
    const [psicologos, setPsicologos] = useState<Psicologo[]>([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await listarPsicologo();

                setPsicologos(response.data);
            } catch (error) {
                alert("Deu algo errado");
            }
        };

        getData();
    }, [setPsicologos]);
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