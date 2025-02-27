import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        padding: 24
    },
    evenetName: {
        color: "#FDFCFE",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    eventDate: {
        color: "#6b6b6b",
        fontSize: 16,
    },
    input: {
        flex: 1,
        backgroundColor: "#1f1e25",
        height: 56,
        borderRadius: 5,
        color: "#FDFCFE",
        padding: 16,
        fontSize: 18,
        marginRight: 12,
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#FDFCFE",
        fontSize: 20,
    },
    listEmptyText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    }
});