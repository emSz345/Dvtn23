import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
/*
Pressable: em React Native é um componente que permite detectar e responder a interações de toque. 
Ele é um substituto mais poderoso e flexível para componentes como TouchableOpacity 
*/
export function ModalPassowrd({password, handleClose}) {
    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.title}>Senha gerada</Text>
                <Pressable style={style.innerPassword}>
                    <Text style={style.text}>{password}</Text>
                </Pressable>

                <View style={style.buttonArrea}>
                    <TouchableOpacity style={style.button} onPress={handleClose}>
                        <Text style={style.buttonText}> Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.button, style.buttonSave]}>
                        <Text style={style.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
//Configuração do estilo da modal
const style = StyleSheet.create({
    container: {
        backgroundColor:"rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 0
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 0
    },
    text: {
        color: "#FFF",
        textAlign: "center"
    },
    buttonArrea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding:8
    },
    buttonSave: {
        backgroundColor: "#392DE9",
        borderRadius:8
    },
    buttonSaveText:{
        color:"#FFF",
        fontWeight:"bold"
    }
})