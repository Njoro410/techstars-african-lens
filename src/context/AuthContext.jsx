/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import Swal from "sweetalert2";



const AuthContext = createContext()

const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "red",
    customClass: {
        popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
});


export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})

    // function facebookSignIn() {
    //     const provider = new FacebookAuthProvider();
    //     signInWithPopup(auth, provider)
    //         .then((result) => {

    //             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //             const credential = FacebookAuthProvider.credentialFromResult(result);
    //             const accessToken = credential.accessToken;
    //             // The signed-in user info.
    //             const user = result.user;
    //             setDoc(doc(db, 'users', user.email), {
    //                 savedShows: [],
    //                 watchedShows: []
    //             })

    //             // ...
    //         })
    //         .catch((error) => {
    //             Toast.fire({
    //                 icon: "error",
    //                 title: "Failed",
    //                 text: "Please try another method"
    //             });
    //             const errorCode = error.code;
    //             console.log(errorCode);
    //             const errorMessage = error.message;
    //             console.log(errorMessage);
    //             const email = error.customData.email;
    //             console.log(email);
    //             const credential = FacebookAuthProvider.credentialFromError(error);
    //         });
    // }

    function googleSignIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setDoc(doc(db, 'users', user.email), {
                    likedPics: [],
                    savedCourses: []
                })
                // ...
            }).catch((error) => {
                Toast.fire({
                    icon: "error",
                    title: "Failed",
                    text: "Please try another method"
                });
            });
    }


    const signUp = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        const docRef = doc(db, 'users', email);
        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {
            console.log("Document exist!");
            // Throws an error.
            throw new Error('Document Exist!');
        } else {
            await setDoc(docRef, {
                likedPics: [],
                savedCourses: []
            });
        }

    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)


        })
        return () => {
            unsubscribe()
        }
    }, [])



    return (
        <AuthContext.Provider value={{ googleSignIn, signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}