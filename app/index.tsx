import {Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles';

// Define e exporta a função principal da tela Home (padrão do Expo Router)
export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}> {/* SafeAreaView garante que o conteúdo não fique escondido */}
      <View style={styles.container}> {/* View funciona como um container (div) para agrupar e organizar os elementos */}
        {/* Componente Text obrigatório no React Native para exibir textos */}
        <Text style={styles.titulo}>TaskFlow</Text>
        <Text style={styles.describe}>Organize sua tarefa de forma simples</Text>
      </View>
    </SafeAreaView>
  );
}