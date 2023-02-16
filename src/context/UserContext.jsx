import {useState, useContext, createContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
// Libraries
import { auth } from '../lib/firebase';
import {
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

// import client from '../lib/client';



const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const navigation = useNavigate();

    const logIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                setError('')


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            });
    }

    const logOut = () => {
        return signOut(auth);
    }

    const register = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setError('')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser.providerData[0])

            localStorage.setItem('user', JSON.stringify(currentUser.providerData[0]))
            
            
            
        })
        return () => unsubscribe();
    }, [])
    

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage)
            });
    }

    return (
        <UserContext.Provider value={{
            user, logIn, logOut, register, loginWithGoogle, error
        }}>
            {children}
        </UserContext.Provider>
    )
}


export const useAuthContext = () => useContext(UserContext);

