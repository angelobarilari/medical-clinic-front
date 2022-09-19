import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
    background: red;
    background: #8673e8;

    #dashboard-panel {
        width: 90%;
        height: 90%;
        background: blue;
        border-radius: 6px;
        box-shadow: 0px 0px 10px 0px #00000040;
    }

    #register-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width 50%;
        height: 100%;
        background: #fff;
        border-radius: 6px;
    }

    #register-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        width: 80%;
        height: 90%;
        background: #fff;
        border-radius: 6px;
    }

    #register-inputs-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 40%;
        width: 100%;
    }

    #register-inputs-container > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #register-inputs-container > div > input {
        width: 80%;
        height: 40px;
        margin: 5px;
        padding-left: 8px;
        border: none;
        border-radius: 4px;

        background: #e4eaec;
    }

    #register-form > button {
        width: 60%;
    }

`

