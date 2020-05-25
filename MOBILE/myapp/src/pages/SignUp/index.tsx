import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,Switch} from 'react-native'
import api from '../../../services/api.tsx'
class Inputs extends Component {
   state = {
      cpf: '',
      name: '',
      dor: false,
      dor_intensidade:0,
      desconforto:false,
      desconforto_corpo:'',
      cirurgia:false,
      cirurgia_tempo:'',
      cirurgia_tipo:'',
     cirurgia_dor:false,
   }
   handleCPF = (text) => {
      this.setState({ cpf: text })
   }
   handleName = (text) => {
      this.setState({ name: text })
   }
   handleDorIntensidade = (text) => {
      this.setState({ dor_intensidade: text })
   }
   toggleSwitch1 = (value) => {
      this.setState({dor: value})
      console.log('Switch 1 is: ' + value)
   }
   handleDesconfortoCorpo= (text) => {
      this.setState({ desconforto_corpo: text })
   }
   toggleSwitch2 = (value) => {
      this.setState({desconforto: value})
      console.log('Switch 2 is: ' + value)
   }
    handleCirurgiaTempo= (text) => {
      this.setState({ cirurgia_tempo: text })
   }
   handleCirurgiaTipo= (text) => {
      this.setState({ cirurgia_tipo: text })
   }
  
   toggleSwitch3 = (value) => {
      this.setState({cirurgia: value})
      console.log('Switch 3 is: ' + value)
   }
   toggleSwitch4 = (value) => {
      this.setState({cirurgia_dor: value})
      
   }
 login = async (cpf,name,dor,dor_intensidade,desconforto,desconforto_corpo,cirurgia,cirurgia_dor,cirurgia_tipo,cirurgia_tempo) => {
    console.log(dor)
    console.log(desconforto)
    console.log(cirurgia)
    console.log(cirurgia_dor)
      const response= await api.post('/api/users',{
         cpf,name,dor,dor_intensidade,desconforto,desconforto_corpo,cirurgia,cirurgia_dor,cirurgia_tipo,cirurgia_tempo
      });
   }
   
      
   
   // async function callApi(cpf,name,dor,dor_intensidade,desconforto,desconforto_corpo,cirurgia,cirurgia_dor,cirurgia_tipo,cirurgia_tempo) {
   //    const response = await api.post('/users',{
   //          cpf,name,dor,dor_intensidade,desconforto,desconforto_corpo,cirurgia,cirurgia_dor,cirurgia_tipo,cirurgia_tempo
   //      })
   // }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "CPF"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleCPF}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nome"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleName}/>

            <Text>Você sente dor?</Text>

            <Switch
            onValueChange = {this.toggleSwitch1}
            thumbColor={this.dor ? "#f5dd4b":"#f4f3f4"}
            value = {this.dor}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Se sim, qual a intensidade da dor (1-10)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleDorIntensidade}/>

             <Text>Sente algum desconforto?</Text>

            <Switch
            onValueChange = {this.toggleSwitch2}
            value = {this.desconforto}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Se sim, em qual parte do corpo?"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleDesconfortoCorpo}/>

             <Text>Passou por algum tipo de cirurgia?</Text>
               <Switch
                    onValueChange = {this.toggleSwitch3}
                    value = {this.cirurgia}>
                </Switch>
                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Se sim,quanto tempo?"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleCirurgiaTempo}/>
                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Se sim, que tipo? (Estético ou Saúde)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleCirurgiaTipo}/>
                <Text>Se sim, sentiu dor após a cirurgia?</Text>
               <Switch
                    onValueChange = {this.toggleSwitch4}
                    value = {this.cirurgia_dor}>
                </Switch>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.cpf, this.state.name,this.state.dor,this.state.dor_intensidade,this.state.desconforto,this.state.desconforto_corpo,this.state.cirurgia,this.state.cirurgia_tempo,this.state.cirurgia_tipo,this.state.cirurgia_dor)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 3,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      color:'#000000',
      width:300,
      borderRadius:10
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 25,
      height: 40,
      width:70,
      borderRadius:30

   },
   submitButtonText:{
      color: 'white'
   }
})