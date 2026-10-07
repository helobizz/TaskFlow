import Botao from "@/components/Botao";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

const exercicios = [
    {
        nome: "Ex da aula 10",
        rota: "/atividades/ex_aula10",
    },
    {
        nome: "Ex da aula 13",
        rota: "/atividades/ex_fetch",
    }
] as const;

export function Atividades() {
    return (
        <View style={styles.container}>
            {exercicios.map((exercicio) => (
            <Botao
            key={exercicio.rota}
                texto={exercicio.nome}
                onPress={() => router.push(exercicio.rota)}
            />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        padding: 10
    }
})