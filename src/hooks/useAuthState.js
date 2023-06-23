import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../services/base";

export const useAuthState = () => {
    const [logState, setLogState] = useState(false);
    
    const auth = getAuth(app);

    useEffect(() => {
        const monitorAuthState = () => onAuthStateChanged(auth, 
          async (user) => {
            if (user) return setLogState(true);
            return setLogState(false);
          });
    
        return () => monitorAuthState();
      }, [auth]
    )

    return { logState, auth };

    

}