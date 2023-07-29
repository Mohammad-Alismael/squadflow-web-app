import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3BL9ffB_VX9vuAeR0DGod_QX769pOMcM",
    authDomain: "squadflow-fd473.firebaseapp.com",
    projectId: "squadflow-fd473",
    storageBucket: "squadflow-fd473.appspot.com",
    messagingSenderId: "345020699106",
    appId: "1:345020699106:web:7ec758aeb72d543e99a9bb"
};

export const app = initializeApp(firebaseConfig);
export const dbFB = getFirestore()