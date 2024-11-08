//importa os componentes do react native
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
//importa o Slide 
import Slider from "@react-native-community/slider"
//importa o UseState 
import { useState } from "react"
//importa o modal 
import {ModalPassowrd} from "./src/components/modal/index"
/*
View: Uma caixa que pode conter coisas dentro tipo [Text,Image,Slider] 
StyleSheet: Para formatação em Css
Text: Adicionar Textos 
Imagem: Adicionar imagems
TouchableOpacity: Um Botão com opacidade
Slider:  componente que permite selecionar um valor dentro de um intervalo deslizando um controle
*/

let charset = "abcdefghijktASDFGHJKLMNB12345" //várivael que será usada para criar a senha 
export default function App() {
  
  const  [size,setSize] = useState(10) //cria uma váriavel para gerar senha
  const [passwordValue, setPasswordValue] = useState("") //cria uma váriavel para salvar a senha
  const [modalVisible, setModalVisible] = useState(false) //Váriavel para definir qunado o modal deve aparecer

  //função que vai gerar a senha 
  function generePassowrd(){
   let password = "";
   for(let i =0,n = charset.length;i < size;i++){
    password += charset.charAt(Math.floor(Math.random() * n))
   }
   setPasswordValue(password)
   setModalVisible(true)
  }
  return (
   //Container: onde tudo sera colocado
    <View style={styles.container}>
      
      <Image
        source={require("./src/assets/logo.png")} //define a imagem
        style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres </Text>

      <View style={styles.area}>

        <Slider
          style={{ height: 50 }}
          minimumValue={6} // valor minimo
          maximumValue={20} //valor máximo
          maximumTrackTintColor="#ff0000" //cor quando estiver com valor minimo
          minimumTrackTintColor="#000" //cor quando estiver com valor máximo
          thumbTintColor="#392de9"
          value={size} //define Size como valor padrão
          onValueChange={(value) =>  setSize(value.toFixed(0))} //faz com que o valor seja alterador 
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generePassowrd}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

    <Modal visible={modalVisible} animationType="fade" transparent={true}>
   <ModalPassowrd password={passwordValue} handleClose={() => setModalVisible(false)}/>
    </Modal>

    </View>
  )
}

/*
cria uma constante com nome style e com valor StyleSheet que permite que 
faça formatação css ao componente que essa variável for atribuida.
*/
const styles = StyleSheet.create({
  /*
  flex 1: abilita o modo flex
  justifyContent:Alinhamento vertical
  alignItems: Alinhamento horizontal
  */
  container: {
    flex: 1,
    backgroundColor: "F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor:"#FFF",
    borderRadius:8,
    padding: 8
  },
  button:{
    backgroundColor:"#392de9",
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginBottom:18
  },
  buttonText:{
    color:"#FFF",
    fontSize:20
  },
  title:{
    fontSize:30,
    fontWeight:"bold"
  }
})