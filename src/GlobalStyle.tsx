import { createGlobalStyle } from "styled-components";

type ThemeType = {
  body: string;
  bars: string;
  text: string;
  highlight: string;
  background: string;
};

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        color:${({ theme }) => theme.text};
    }


    body{
        background:${({ theme }) => theme.body};
        transition: all 0.50s linear;
    }
    .bar{background-color: ${({ theme }) => theme.bars}}

    input,select,textarea, option{
        color:initial;
        font-size:large;
        
    }

    input,select,textarea{
        padding: 0.5rem ;
        width:100%;
        border-radius: 5px;
        border:none;
    }
    span, label{
        font-weight: bold;
        color:${({ theme }) => theme.highlight};
    }

    label{
        margin:  0.2rem;
    }

    a{color:initial;
    text-decoration:none;}

    button{
        margin: 0 0.5rem;
        cursor:pointer;
        padding: 1rem 2rem;
        font-weight: bold;
        border: 3px solid ${({ theme }) => theme.highlight};
        border-radius: 0.5rem; 
        background:transparent;
        transition: all 0.5s ease;
        &:hover{
            background-color: ${({ theme }) => theme.highlight};
            color: black;
        }
        @media (max-width: 600px) {
        padding: 0.5rem 1rem;
    }
    }

    .label-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .main-content{
        padding: 1rem 2rem;
        min-height: 75vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
    }

    `;

export default GlobalStyle;
