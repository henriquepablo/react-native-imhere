import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <Text style={styles.evenetName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>
        </View>
    );
}

export default Home;