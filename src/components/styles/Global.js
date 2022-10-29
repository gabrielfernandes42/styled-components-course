import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    
    }  
    body {
        background: ${({theme}) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-size: 1.5em;

    } 
    p {
        opacity: 0.6;
        line-height: 1.5;
    }


`;

export default GlobalStyles;
