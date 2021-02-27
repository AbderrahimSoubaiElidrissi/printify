import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { getToken, setToken, removeToken } from "../utils.js";
export const AuthRef = React.createRef();
import Axios from "axios";


export const AuthState = (props) => {
    const initialState = {
      userToken:  null,
      status: "idle",
      error:null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
    React.useEffect(() => {
        const initState = async () => {
          try {
            const userToken = await getToken();
            if (userToken !== null) {
              dispatch({ type: "SIGN_IN", token: userToken });
            } else {
              dispatch({ type: "SIGN_OUT" });
            }
          } catch (e) {
            // catch error here
            // Maybe sign_out user!
          }
        };
        initState();
      }, []);
      React.useImperativeHandle(AuthRef, () => authActions);
      const authActions = React.useMemo(
        () => ({
          signIn: async (email,password) => {
            let req;
            try{ req = await Axios.post("http://192.168.1.101:5000/api/v1/auth/login",{email,password});
          }
          catch(err){
            dispatch({ type: "ERROR", err });
          }
          let token=req.data.token
            dispatch({ type: "SIGN_IN", token });
            await setToken(token);
          },
          signOut: async () => {
            await removeToken(); // TODO: use Vars
            dispatch({ type: "SIGN_OUT" });
          },
        }),
        []
      );

    return (
        <AuthContext.Provider
          value={{
            userToken: state.userToken,
            status:state.status,
            error:state.error
           
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );    
}
export const useAuth = ()=> {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be inside an AuthProvider with a value");
  }
  /*
    you can add more drived state here
    const isLoggedIn  = context.status ==== 'signIn'
    return ({ ...context, isloggedIn})
  */
  return context;
};

