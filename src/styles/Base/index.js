import styled, {
    createGlobalStyle
} from 'styled-components'

const GlobalStyles = createGlobalStyle `

    :root {
        --cl-purple: #7C5E99;
        --fc-error: #ff4757;
        --ff-pressstart: 'Press Start 2P', cursive;
        --ff-anonymous: 'Anonymous Pro', monospace;
    }
    
    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: sans-serif;
        color: #fff;
        width: 100vw;
        height: 100vh;
        overflow: hidden;


        background-color: #7c5e99;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23333333' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ffffff' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23333333' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23ffffff' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23333333' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23ffffff' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23333333' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ffffff' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23333333' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23ffffff' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23333333' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23ffffff' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;


    }

    input {
        display: block;
    }
`

export default GlobalStyles