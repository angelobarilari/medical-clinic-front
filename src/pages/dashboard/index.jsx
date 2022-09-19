import Header from "../../components/Header"
import { useContext } from "react"
import { UserDataContext } from "../../providers/user"
import jwt_decode from "jwt-decode"
import { Redirect } from "react-router-dom"

const Dashboard = () => {
    const { userIsLogged, setUserIsLogged } = useContext(UserDataContext)
    const token = localStorage.getItem("@MEDICALCLINIC-TOKEN")

    

    return (
        <>
            {userIsLogged ? (
                <>
                    <Header />
                    O USUARIO ESTA LOGADO
                </>
            ) : (
                <Redirect to="/login" />
            )}
        </>
    )
}

export default Dashboard
