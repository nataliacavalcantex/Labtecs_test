import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box
}
html,border-style,#root{
    min-height:100%
}
body{
    background:#FFDEAD;
    -webkit-font-smoothing:antialiased !important;
}
border-style,input,button{
    color:#222;
    font-size:14px;
    font-family:'Roboto Slab', serif

}
button{
    cursor:pointer
}
h1,h2,h3,h4,h5,h6,strong{
    font-weight:500
}

`