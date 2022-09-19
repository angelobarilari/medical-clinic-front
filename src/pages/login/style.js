import styled from "styled-components";

export const StyledLoginPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 700px;

    background: #8673e8;

    #login-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 30%;
        height: 80%;

        border-radius: 8px;
        box-shadow: 0px 0px 10px 0px #00000040;
        background: #fff;
    }

    #login-form {
        height: 80%;
        width: 80%;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        justify-content: space-evenly;
    }

    #login-form > div {
        align-items: center;
    }

    #inputs-container {
        width: 100%;
    }
    
    #login-form > div > div > input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding-left: 8px;
        border: none;
        border-radius: 4px;

        background: #e4eaec;
    }
    
    #login-form > a {
        color: #0f83ff;
    }

    
    #to-register-container > a {
        margin-left: 5px;
    }

    #login-form > #login-btn {
        width: 80%
    }
`


