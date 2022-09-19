import Header from "../../components/Header"
import Button from "../../components/Button"
import { StyledInputContainer } from "../../components/InputContainer/style"
import { StyledRegisterPage } from "./style"
import { StyledErrorSpan } from "../../components/ErrorSpan/style"
import { StyledLogoSpan } from "../../components/LogoSpan/style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Link, Redirect } from "react-router-dom"
import apiUrl from "../../services/api"

const RegisterPage = () => {

    const registerSchema = yup.object().shape({
        email: yup.string()
                  .email("Não é um email válido")
                  .required("Informe um email"),
        
        rg: yup.string()
               .required("Informe um RG"),
        
        phone: yup.string()
                  .required("Informe um telefone"),
        
        name:  yup.string()
                  .required("Informe o nome do responsável"),
        
        patientName: yup.string()
                        .required("Informe o nome do paciente")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })

    const registerData = (registerData) => {
        apiUrl.post("/")
    }

    return (
        <>
            <Header />
                <StyledRegisterPage>
                    <div id="dashboard-panel">

                        <div id="register-container">
                            <form id="register-form" onSubmit={handleSubmit(registerData)}>
                                <h2>
                                    Medical
                                    <StyledLogoSpan>
                                        Clinic
                                    </StyledLogoSpan>
                                </h2>

                                <div id="register-inputs-container">
                                    <StyledInputContainer>
                                        <input
                                            type="text"
                                            placeholder="Digite aqui o nome do responsável"
                                            {...register("name")}
                                        />
                                        {errors.name?.message && 
                                            <StyledErrorSpan>
                                                {errors.name.message}    
                                            </StyledErrorSpan>}
                                    </StyledInputContainer>

                                    <StyledInputContainer>
                                        <input
                                            type="text"
                                            placeholder="Digite aqui o telefone do responsável"
                                            {...register("phone")}
                                        />
                                        {errors.phone?.message &&
                                            <StyledErrorSpan>
                                                {errors.phone.message}
                                            </StyledErrorSpan>}
                                    </StyledInputContainer>

                                    <StyledInputContainer>
                                        <input 
                                            type="text"
                                            placeholder="Digite aqui o RG do responsável"
                                            {...register("rg")}
                                        />
                                        {errors.rg?.message &&
                                            <StyledErrorSpan>
                                                {errors.rg.message}
                                            </StyledErrorSpan>}
                                    </StyledInputContainer>

                                    <StyledInputContainer>
                                        <input
                                            type="email"
                                            placeholder="Digite aqui o email do responsável"
                                            {...register("email")}
                                        />
                                        {errors.email?.message &&
                                            <StyledErrorSpan>
                                                {errors.email.message}
                                            </StyledErrorSpan>}
                                    </StyledInputContainer>

                                    <StyledInputContainer>
                                        <input 
                                            type="text"
                                            placeholder="Digite aqui o nome do paciente"
                                            {...register("patientName")}
                                        />
                                        {errors.patientName?.message &&
                                            <StyledErrorSpan>
                                                {errors.patientName.message}    
                                            </StyledErrorSpan>}
                                    </StyledInputContainer>
                                </div>

                                <Button 
                                    background="#8673e8" 
                                    color="#fff" 
                                    id="register-btn" 
                                    type="submit">
                                    Cadastrar
                                </Button>
                            </form>

                            <div id="div temporaria">

                            </div>

                        </div>
                    </div>


                </StyledRegisterPage>

        </>
    )
}

export default RegisterPage