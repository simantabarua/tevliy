import { useEffect, useState } from 'react';
import initializeAuthentication from '../config/firebse.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import swal from 'sweetalert';
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();
    //google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)

    }
    // sign out 
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((err) => {
            swal("Something went wrong!", `${err.message}`, "error")
        })
    }
    //on State Change 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false);
        })
    }, [auth])



    return {
        user,
        setUser,
        signInUsingGoogle,
        signOutUser,
        setIsLoading
    }
};

export default useFirebase;



