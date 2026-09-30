import AsyncStorage from '@react-native-async-storage/async-storage';

// chave para armazenar todas as tarefas
const CHAVE_TAREFAS = "@taskflow:tarefas"; //@nomedoapp:nomedachave (todas as chaves dessa tarefa serão salvas aqui)

export async function salvarTarefas(tarefas: any[]) {
    try {
        const dados = JSON.stringify(tarefas); //armazena a tarefa que foi passada (converte para string)
        await AsyncStorage.setItem(CHAVE_TAREFAS, dados);
    } catch (error) {
        console.error("Erro ao salvar as tarefas: ", error);
    }
}

export async function carregarTarefas() {
    try {
        const dados = await AsyncStorage.getItem(CHAVE_TAREFAS);
        if (!dados) {
            return [];
        }
        return JSON.parse(dados);
    } catch (error) {
        console.error("Erro ao carregar as tarefas: ", error);
    }
}

export async function limparTarefas() {
    try {
        await AsyncStorage.removeItem(CHAVE_TAREFAS);
    } catch (error) {
        console.error("Erro ao limpar tarefas: ", error);
    }
}