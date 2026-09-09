import { StyleSheet, Text, View, Button } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

export default function Tarefas() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Minhas tarefas</Text>
            <Button 
                title="Voltar"
                onPress={router.back} // posso voltar para a última acessada (a tela tarefas é excluída da pilha)
            />
        </View>
    )
}