import baseApi from "./config";

interface PsicologoPayload {
    nome: string;
    apresentacao: string;
    email: string;
    senha: string;
}

export function cadastroPsicologo(payload: PsicologoPayload) {
    return baseApi.post("/psicologos", payload);
}

export function listarPsicologo(token: string) {
    return baseApi.get("/psicologos", {
        headers: {
            Authorization: `JWT ${token}`,
        }
    });
}