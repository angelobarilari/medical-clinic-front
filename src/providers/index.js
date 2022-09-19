import { UserDataProvider } from "./user";

const Providers = ({ children }) => {
    return (
        <UserDataProvider>
            {children}
        </UserDataProvider>
    )
}

export default Providers

