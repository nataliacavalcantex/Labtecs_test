import styled from 'styled-components'

export const Container= styled.div`
height:100vh;
display:flex;
align-items:stretch
`;

export const Content= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
form{
    margin:80px 0;
    width:340px;
    text-align:center;
    h3{
        margin-bottom:24px
    }
    input{
        background:#ffff;
        border-radius:10px;
        border:2px solid #232129;
        width:50%
        
    }
    button{
        margin-left:10px;
        width:30px;
        border-radius:10px;
        background:#ff9000;
    }
}

`;

export const Background= styled.div`
flex:1;


`