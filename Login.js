import React from 'react';
import {Text,View,TextInput,StyleSheet,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login(){

  const navigation = useNavigation();
  
  return(
   <View style={style.conteiner}>
   <Text style={style.texto}>Login</Text>
    <Text>Nome:</Text>
    <TextInput style={style.input} />
    <Text>Senha:</Text>
    <TextInput style={style.input} />
    <Text style={style.espaco}/>
    <Button title="Entrar" onPress={() => navigation.navigate('index')}/>
    <Text style={style.espaco}/>
    <Button title="Cadastrar" onPress={() => navigation.navigate('cadastro')}/>
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
