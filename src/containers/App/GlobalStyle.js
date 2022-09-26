import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Raleway;
        max-width: 1440px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    .page {
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        padding: 50px 80px;
    }

    // Center pages in the middle of the screen
    .page, .header, .grey {
        margin: 0 auto;
    }

`;