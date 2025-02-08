import { SafeAreaView, Text, TextInput, View, TouchableOpacity, Alert} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/participant";

function Home() {

    function handleParticpantAdd() {
        console.log("Adicionando participante");
    }

    function handleParticpantRemove() {
        console.log("Removendo participante");
    }

    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <Text style={styles.evenetName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor={"#6b6b6b"}
                    keyboardType="email-address"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticpantAdd}>
                    <Text style={styles.buttonText}>
                    +
                    </Text>
                </TouchableOpacity>
            </View>

            <Participant name="Pablo Henrique" onRemove={handleParticpantRemove}/>
        </View>
    );
}

export default Home;