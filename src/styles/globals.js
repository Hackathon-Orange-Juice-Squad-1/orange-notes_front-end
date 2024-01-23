import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.WHITE_1};
        color: ${({ theme }) => theme.COLORS.GRAY_6};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }
`;