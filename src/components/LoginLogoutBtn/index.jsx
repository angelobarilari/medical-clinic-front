import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri"
import { Link, useHistory } from "react-router-dom";
import { StyledButton } from "../Button/styles";
import { UserDataContext } from "../../providers/user";
import { useContext } from "react";

const LoginLogoutBtn = () => {
    const { userIsLogged, setUserIsLogged } = useContext(UserDataContext)
    const history = useHistory()

    const removeToken = () => {
        localStorage.removeItem("@MEDICALCLINIC-TOKEN")
        history.push("/")
        setUserIsLogged("")
    }

    return (
        <>
            {userIsLogged ? (
                <>
                    <Link to="/">
                        <StyledButton shadow="0" onClick={removeToken}>
                            <RiLogoutBoxLine />
                            <p>
                                Sair
                            </p>
                        </StyledButton>
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/login">
                        <StyledButton shadow="0">
                            <RiLoginBoxLine />
                            <p>
                                Entrar
                            </p>
                        </StyledButton>
                    </Link>
                </>
            )}
        </>
    )
}

export default LoginLogoutBtn

