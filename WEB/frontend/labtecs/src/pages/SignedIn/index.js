import React,{useState,useEffect} from 'react'
import api from '../../services/api'
import {Container,Content,Background} from './styles'
function SignIn(){
    const [numero,setNumber]= useState('')
    async function handleSubmit(e){
        e.preventDefault()

        const response = await api.post('/numbers',{
            numero
        })
        if((response.data.numero)<10){
            alert('Não urgente')
        }
        if((response.data.numero)>11 &&(response.data.numero)>20){
            alert('Pouco urgente')
        }
        if((response.data.numero)>21 &&(response.data.numero)>30){
            alert('Média urgencia')
        }
        if((response.data.numero)>31 &&(response.data.numero)>40){
            alert('Urgencia alta')
        }
        if((response.data.numero)>41 &&(response.data.numero)>50){
            alert('Emergência')
        }
        
        
    }
    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit}>
                    <h1>Olá</h1>
                    <h3>Digite um número de 1 a 10</h3>
                    <input 
                    name="numero"
                    placeholder="" 
                    value={numero}
                    onChange={e=>setNumber(e.target.value)}
                    ></input>
                    <button 
                    type="submit"
                    >ok</button>
                </form>
            </Content>
            <Background>

            </Background>
        </Container>
    )
    
}
export default SignIn