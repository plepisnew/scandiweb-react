import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Raleway;
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

        padding: 50px 100px 50px;
        
    }

    .cart-action:hover + .page {
        background: red;
    }

`;
