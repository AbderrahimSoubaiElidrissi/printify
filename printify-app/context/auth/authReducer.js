export default (prevState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...prevState,
          status: "signIn",
          userToken: action.token,
        };
        case "ERROR":
          return {
            ...prevState,
            error:action.err
          };  
      case "SIGN_OUT":
        return {
          ...prevState,
          status: "signOut",
          userToken: null,
        };
    }
  };