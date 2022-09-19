import { Link } from "react-router-dom";
import LoginLogoutBtn from "../LoginLogoutBtn";
import { StyledLogoSpan } from "../LogoSpan/style";
import { StyledHeader } from "./style";

const Header = () => {
  const redirectButtons = ["Serviços", "Exames", "Contato"];
  
  return (
      <StyledHeader>
        <div id="header-container">
          <Link to="/" id="logo-container">
            <h1 id="logo">
              Medical 
              <StyledLogoSpan>
                Clinic
              </StyledLogoSpan>
            </h1>
          </Link>
        

          <div id="links-area">
            <div id="redirectBtns-container">
              {redirectButtons.map((element, index) => (
                <Link
                  key={index}
                  to={element
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()}
                >
                  <button className="redirectBtn">{element}</button>
                </Link>
              ))}
            </div>
          </div>

          <div id="login-register-container">

          <LoginLogoutBtn />

          </div>
        </div>
      </StyledHeader>
  );
};

export default Header;
