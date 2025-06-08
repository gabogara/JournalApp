import { Password } from "@mui/icons-material";
import { checkingCredentials } from "./authSlice";


export const checkingAuthentication =  (  email, password  )  => {
    return async ( dispatch ) => {

        dispatch ( checkingCredentials() );

    }

}
