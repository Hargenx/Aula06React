import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.foto}}  style={{width:60, height:60,borderRadius:30}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"}}>{item.nome}</Text>
        <Text>{item.cargo}</Text>
      </View>
      <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"darkblue"}}>Ligar</Text>
      </TouchableOpacity>
    </View>
  );
}


export default class FlatList2Exemplo extends React.Component {
  state = {
    data:[
        {
            "nome": "Carla Lara",
            "email": "carla.lara@email.com",
            "cargo": "Desenvolvedora Typescript",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/women\/42.jpg"
        },
        {
            "nome": "Lucia Chan",
            "email": "lucia.chan@email.com",
            "cargo": "Gerente de projetos",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
            "nome": "Carol Silva",
            "email": "carol.silva@email.com",
            "cargo": "Frontend",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
        {
            "nome": "Manoel Luis",
            "email": "manuel.luis@email.com",
            "cargo": "Desenvolvedor Go",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/men\/65.jpg"
        },
        {
            "nome": "João Nu\u00f1ez",
            "email": "joao.nu\u00f1ez@email.com",
            "cargo": "Analista de Sistemas",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
        },
        {
            "nome": "Amanda Rodrigues",
            "email": "amanda.rodrigues@email.com",
            "cargo": "Designer UI/UX",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/women\/72.jpg"
        },
        {
            "nome": "Ricardo Santos",
            "email": "ricardo.santos@email.com",
            "cargo": "Engenheiro de Software",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/men\/55.jpg"
        },
        {
            "nome": "Mariana Almeida",
            "email": "mariana.almeida@email.com",
            "cargo": "Analista de Dados",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/women\/61.jpg"
        },
        {
            "nome": "Pedro Costa",
            "email": "pedro.costa@email.com",
            "cargo": "Desenvolvedor Python",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/men\/49.jpg"
        },
        {
            "nome": "Sofia Pereira",
            "email": "sofia.pereira@email.com",
            "cargo": "Scrum Master",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/women\/37.jpg"
        },
        {
            "nome": "Vinicius Barcelos",
            "email": "vinicius.barcelos@email.com",
            "cargo": "Marketing",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/men\/38.jpg"
        },
        {
            "nome": "Gilson Sanches",
            "email": "gilson.sanches@email.com",
            "cargo": "Designer de produtos",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/men\/25.jpg"
        },
        {
            "nome": "Sara Mauriico",
            "email": "sara.mauricio@email.com",
            "cargo": "Gerente de Governança",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/women\/22.jpg"
        },
        {
            "nome": "Lucius Colm",
            "email": "lucius.colm@email.com",
            "cargo": "Marketing",
            "foto": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
        }
    ]
  }


  render(){
    const { goBack } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
        <Button title="Voltar" onPress={goBack} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:60,
    padding:60,
    backgroundColor:"#FFF",
    width:"100%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});