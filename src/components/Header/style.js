import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  position: sticky;
  top: ${props=> props.scroll === "up" ? "0" : "-60px"};
  transition: 0.2s;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 4px 8px 0px #00000040;
  background-color: #fff;


  #header-container {
    background-color: #fff;
    width: 80%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #links-area {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 16px;
  }

  #login-register-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }

  #login-register-container > a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #login-register-container > a > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: : 100%
  }

  #login-register-container > a > button > p {
    margin-top: 2px;
  }

  #redirectBtns-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .redirectBtn {
    border: none;
    height: 40%;

    display: flex;
    align-items: center;

    font-weight: bold;
    font-size: 14px;

    background-color: white;
    font-family: 'Roboto', sans-serif;
  }


  @media screen and (max-width: 630px) {
    #menu-icon {
      display: flex;
      font-size: 20px;
    }

    #redirectBtns-container {
      display: none;
    }

    #links-area {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  @media (min-width: 631px) {
    #links-area {
      min-width: 48%;
      gap: 10px;

      #redirectBtns-container {
        gap: calc(10vw * 0.2);
      }
    }
  }
`;
