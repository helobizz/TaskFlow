import { StyleSheet } from "react-native";

// Cria e exporta o objeto de estilos usando o StyleSheet do React Native
export const styles = StyleSheet.create({
    safeArea: {
        flex: 1 // ocupa todo o espaço
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#672389'
    },
    describe: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15,
        color: '#672389'
    }
});