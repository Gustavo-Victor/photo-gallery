import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //variables
    :root {
        --bg-color: #27282f;
        --card-color: #3d3f43;
        --card-hover: #444;
        --text-color: #fff;
        --btn-color: #756df7;
        --default-font-family: Arial, Helvetica, sans-serif; 

    }

    //reset
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: var(--text-color); 
        font-family: var(--default-font-family);
    }

`;

export default GlobalStyle;
