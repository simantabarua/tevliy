import { useEffect, useState } from "react";
import initializeAuthentication from "../config/firebse.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import swal from "sweetalert";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //google sign in
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
        sessionStorage.setItem("email", result.user.email);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // sign out
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        swal("Something went wrong!", `${err.message}`, "error");
      });
  };
  //load admin
  useEffect(() => {
    fetch(`https://tevliy-sever.vercel.app/admins?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user?.email]);
  //on State Change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //Register user

  const registerUser = (email, password, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
        swal(" Success", {
          icon: "success",
        });
      })
      .catch((error) => {
        setAuthError(error.message);
        swal(" Something is Wrong", {
          icon: "error",
        });
      })
      .finally(() => setIsLoading(false));
  };

  //login users
  const signInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        swal(" Success", {
          icon: "success",
        });
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        swal(" Something is Wrong", {
          icon: "error",
        });
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    setUser,
    signInWithGoogle,
    signOutUser,
    signInUser,
    registerUser,
    isLoading,
    admin,
    setIsLoading,
  };
};

export default useFirebase;
