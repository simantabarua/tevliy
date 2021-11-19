import { useEffect, useState } from 'react';
import initializeAuthentication from '../config/firebse.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
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
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    //Register user

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    //login users
    const signInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }





    return {
        user,
        setUser,
        signInUsingGoogle,
        signOutUser,
        signInUser,
        registerUser,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;



