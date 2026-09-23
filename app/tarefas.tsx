import { Text, View, FlatList, SectionList } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import Botao from "@/components/Botao";
import TarefaCard from "@/components/TarefaCard";

const tarefas = [
    {
        id: "1",
        titulo: "Estudar React Native",
        concluida: false,
        prioridade: "Alta"
    },
    {
        id: "2",
        titulo: "Entregar trabalho de Estatística",
        concluida: false,
        prioridade: "Alta"
    },
    {
        id: "3",
        titulo: "Concluir curso das Academies",
        concluida: true,
        prioridade: "Media"
    },
]

const tarefas2 = [
    {
        title: "Pendentes",
        data: [
            "Estudar React Native",
            "Entregar tarefa de PMD"
        ]
    },
    {
        title: "Concluídas",
        data: [
            "Entregar tarefa de Estatística"
        ]
    },
]

const secoes = [
    {
        title: "Pendentes",
        data: tarefas.filter(tarefa => !tarefa.concluida)
    },
    {
        title: "Concluídas",
        data: tarefas.filter(tarefa => tarefa.concluida)
    }
]

export default function Tarefas() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>

            {/* <FlatList 
                data={tarefas}
                contentContainerStyle={{padding: 20}}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    !item.concluida ? // só aparece se não estiver concluída
                    (
                <> 
                  <TarefaCard 
                    titulo={item.titulo}
                    descricao=""
                    prioridade={item.prioridade}
                  />
                  <Text>{item.concluida ? "Concluída" : "Pendente"}</Text>
                  </>
                  ) : null
                )}

                ListEmptyComponent={ // caso não aja nenhuma tarefa
                    <Text>Nenhuma tarefa na lista</Text>
                }

            /> */}

            <SectionList // pede também o atributo section (o nome do atributo que será usado como seção)
                sections={secoes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TarefaCard 
                        titulo={item.titulo}
                        descricao=""
                        prioridade={item.prioridade}
                    />
                )}

                renderSectionHeader={({section}) => (
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>{section.title}</Text>
                )}
            />

            <Botao
                texto="Voltar"
                onPress={router.back}
            />
        </View>
    )
}