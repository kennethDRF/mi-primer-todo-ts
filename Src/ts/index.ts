import { db } from "./main.ts";
import {
    doc, collection,
    setDoc, addDoc,
    getDoc, getDocs,
    updateDoc, deleteDoc,
    arrayUnion, arrayRemove, deleteField,
    query, where, orderbY 
} from "firebase/firestore";