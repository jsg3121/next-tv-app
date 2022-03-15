import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    img, svg{
        pointer-events : none;
    }
    img, svg, body {
        -webkit-user-select:none;
        -webkit-user-drag: none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none
    }
    html,body{
        font-size: 16px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
        width: 100%;
        height: 100vh;
        background-color:#252538
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        box-sizing: border-box;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    a {
        text-decoration: none;
    }

    figure {
        width: 100%;
        height:100%;
    }
`
