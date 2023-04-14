import { getFirestore } from "firebase/firestore";
import { app } from "./Firebase";

export const firestore = getFirestore(app)