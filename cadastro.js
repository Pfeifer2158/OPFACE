import React from 'react';
import {Text,View,TextInput,StyleSheet,Button} from 'react-native';

export default function cadastro(){
  return(
   <View style={style.conteiner}>
   <Text style={style.texto}>Cadastro</Text>
    <Text>Nome:</Text>
    <TextInput style={style.input} />
    <Text>Senha:</Text>
    <TextInput style={style.input} />
    <Text style={style.espaco}/>
    <Button title="Enviar"/>
    <Text style={style.espaco}/>
    </View>
  )
}

const style = StyleSheet.create({
  conteiner:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"#B0E0E6",
  },
  texto:{
    textAlign:"center",
    fontSize:30,
  },
  input:{
    backgroundColor:"#F5FFFA",
    borderRadius:30,
    fontSize:15,
    padding:10,
  },
  espaco:{
  padding:1,
  }
})
