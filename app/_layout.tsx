import { Stack } from "expo-router";

// criando estrutura que será herdada pelas outras telas
export default function Layout(){
    return(
        <Stack>
            <Stack.Screen // edita o cabeçalho
            name="index"
            options={{title: "TaskFlow"}}
            />

            <Stack.Screen 
            name="tarefas/tarefas"
            options={{title: "Minhas Tarefas"}}
            />

            <Stack.Screen
            name="tarefas/addTarefas"
            options={{title: "Adicionar tarefas"}}
            />
        </Stack>
    )
}