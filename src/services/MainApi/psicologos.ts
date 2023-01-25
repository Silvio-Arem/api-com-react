import baseApi from "./config";

interface PsicologoPayload {
    nome: string;
    apresentacao: string;
    email: string;
    senha: string;
}

export function cadastroPsicologo(payload: PsicologoPayload) {
    return baseApi.post("/psicologo", payload);
}

export function listarPsicologo() {
    return baseApi.get("/psicologo");
}