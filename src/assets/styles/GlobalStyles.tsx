import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-main: '#ffffff';
        --text-main: '#101828';
        --transition-main: 300ms ease-in-out;
        
    }


    body {
        margin: 0;
        font-family: 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: var(--bg-main);
        color: var(--text-main);
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    button {
        font-family: inherit;
        border: none;
        cursor: pointer;
    }

    input {
        font-family: inherit;

        &:focus {
            outline: none;
        }
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        border: none;
    }

    ::-webkit-scrollbar {
      width: 8px;
    } 

    ::-webkit-scrollbar-thumb {
      background-color: var(--scroll);
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
`;

export const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100vh) scale(0.1)
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1)
  }
`;
