import { useState, useContext } from "react"

import { Link, Redirect } from "react-router-dom"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import Header from "../../components/Header"
import { StyledInputContainer } from "../../components/InputContainer/style"
import { StyledErrorSpan } from "../../components/ErrorSpan/style"
import { StyledLogoSpan } from "../../components/LogoSpan/style"

import apiUrl from "../../services/api"
import { UserDataContext } from "../../providers/user"

import Button from "../../components/Button"
import { StyledLoginPage } from "./style"

const LoginPage = () => {
    const { userIsLogged, setUserIsLogged } = useContext(UserDataContext)

    const loginSchema = yup.object().shape({
        email: yup.string()
                  .required("Informe seu email"),
        
        password: yup.string()
                     .required("Você precisa informar a senha enviada para o seu email")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const loginData = (loginData) => {
        apiUrl.post("/login", loginData)
                .then(res => {
                    localStorage.setItem("@MEDICALCLINIC-TOKEN", res.data.token) 
                    setUserIsLogged(true)
                })
                .catch(err => {
                    setUserIsLogged(false)
                })
    }

    return (
        <>
            {userIsLogged ? (
                <Redirect to="/dashboard" />
            ) : (
                <>
                    <Header />
                    <StyledLoginPage>
                    <div id="login-container">

                        <form id="login-form" onSubmit={handleSubmit(loginData)}>
                            
                            <h2>
                                Medical
                                <StyledLogoSpan>
                                    Clinic
                                </StyledLogoSpan>
                            </h2>

                            <div id="inputs-container">
                                <StyledInputContainer>
                                    <input 
                                        type="email"
                                        placeholder="Digite aqui seu email"
                                        {...register("email")}
                                    />
                                    {errors.email?.message &&
                                        <StyledErrorSpan>
                                            {errors.email.message}
                                        </StyledErrorSpan>}
                                </StyledInputContainer>

                                <StyledInputContainer>
                                    <input 
                                        type="password"
                                        placeholder="Insira sua senha"
                                        {...register("password")}
                                    />
                                    {errors.password?.message &&
                                        <StyledErrorSpan>
                                            {errors.password.message}
                                        </StyledErrorSpan>}
                                </StyledInputContainer>
                            </div>

                            <Link to="/login">
                                Esqueceu sua senha?
                            </Link>

                            <Button 
                            background="#8673e8" 
                            color="#fff" 
                            id="login-btn" 
                            type="submit">
                                Entrar
                            </Button>
                        </form>
                    </div>
                    </StyledLoginPage>
                </>
            )}
        </>
    )
}

export default LoginPage

