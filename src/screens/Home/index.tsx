import { SafeAreaView, Text, TextInput, View } from "react-native";
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

            <TextInput style={styles.input}
                placeholder="Nome do Participante"
                placeholderTextColor={"#6b6b6b"}
                keyboardType="email-address"
            />
        </View>
    );
}

export default Home;