import { SafeAreaView, Text, TextInput, View, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/participant";

function Home() {

    const participants = ["Pablo", "Henrique", "Lacerda", "Rosimeire", "Luana", "Isa", "Rezende", "Mariana", "João", "Pedro"];

    function handleParticpantAdd() {
        if (participants.includes("Pablo")) {
            return Alert.alert("Participante Existe", "Já existe um participante com esse nome");
        }
    }

    function handleParticpantRemove(name: string) {
        Alert.alert("Remover Participante", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: "Não",
                style: "cancel"
            }
        ]);
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

            <FlatList 
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({item}) => <Participant name={item} 
                onRemove={() => handleParticpantRemove(item)}/>}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Niguém chegou no evento ainda? Adicione participantes a sua lista.
                    </Text>
                )}
            />
        </View>
    );
}

export default Home;