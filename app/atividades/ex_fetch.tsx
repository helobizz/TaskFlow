import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, FlatList } from "react-native";
import { styles } from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";

type Posts = {
    id: string,
    title: string
}

export default function Home() {
    const [post, setPost] = useState<Posts[]>([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(false)

    useEffect(() => {
        async function carregar() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const dados = await res.json();
                await new Promise(resolve => setTimeout(resolve, 1000));
                setPost(dados);
            } catch (error) {
                setErro(true)
                console.log(error)
            } finally { // executa sempre que a chamada for concluída
                setCarregando(false)
            }
        }

        carregar();
    }, []) // [] -> executar esse efeito apenas na montagem da tela

    if (erro) {
        return (
            <View style={styles.container}>
                <Text>Erro! Não foi possível carregar os dados!</Text>
            </View>
        )
    }

    if (carregando) {
        return (
            <View style={styles.container}>
                {/* "bolinha de carregando" -> exibe pro ms enquanto a API não é completamente carregada */}
                <ActivityIndicator size={40} color={'red'}/>
                <Text>Carregando dados...</Text>
            </View>
        )
    } else {
        return (
            <SafeAreaView>
                <View>
                    <FlatList 
                        data={post}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => (
                            <View>
                                <Text>{item.id} - {item.title}</Text>
                            </View>
                        )}
                    />
                </View>
            </SafeAreaView>
        )
    }

}