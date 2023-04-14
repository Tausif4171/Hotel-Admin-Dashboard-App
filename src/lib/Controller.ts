import { collection, getFirestore } from "firebase/firestore";
import { app } from "./Firebase";

export const firestore = getFirestore(app)

// Hotels Collection
export const hotelsCollection = collection(firestore, 'hotels')