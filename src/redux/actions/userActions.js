import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, dataBase } from "../../Firebase/firebasecofi";
import { userTypes } from "../types/userTypes";
const collectionName="usuarios"
const usuarioColletion=collection(dataBase,collectionName)
export const actionRegisterAsync = ({
  email,
  password,
  name,
  avatar,
  phoneNumber,
}) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user);
        const { accessToken } = user.auth.currentUser;
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: avatar,
          phoneNumber,
        });
        const { uid } =user.auth.currentUser;
        console.log(uid);
        // const docRef=doc(dataBase,`usuarios/${uid}`)
        // const docu= await getDoc(docRef)
        // console.log(docRef);
        // const dataFinal= docu.data()
        // console.log(dataFinal);
        // setDoc(docRef,{email:email,rol:"usuario",displayName:name,phoneNumber,photoURL: avatar})
        dispatch(
          actionRegisterSync({
            email,
            name,
            accessToken,
            photoURL: avatar,
            phoneNumber,
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(actionRegisterSync({ error: true, errorMessage }));
      });
  };
};
const actionRegisterSync = (user) => {
  return {
    type: userTypes.USER_REGISTER,
    payload: { ...user },
  };
};

export const actionLoginAsync = ({ email, password }) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { displayName, accessToken, photoURL, phoneNumber } =
          user.auth.currentUser;
        dispatch(
          actionLoginSync({
            email,
            name: displayName,
            accessToken,
            avatar: photoURL,
            phoneNumber,
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(
          actionLoginSync({
            email,
            error: true,
            errorMessage,
          })
        );
      });
  };
};
export const actionLoginSync = (user) => {
    return {
      type: userTypes.USER_LOGIN,
      payload: { ...user }
    }
  }
