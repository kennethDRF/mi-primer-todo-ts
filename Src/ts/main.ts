// Importo Lo necesario para iniciar los servicios
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig.ts";

// Inicio los servicios
const app = initializeApp( firebaseConfig );
export const auth = getAuth( app );
export const db = getFirestore( app );