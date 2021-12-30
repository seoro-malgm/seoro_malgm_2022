import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAyJHtWMjG-0UJsWiVCUrKSRLUeqwAzhxI",
  authDomain: "seoro-malgm.firebaseapp.com",
  databaseURL: "https://seoro-malgm.firebaseio.com",
  projectId: "seoro-malgm",
  storageBucket: "seoro-malgm.appspot.com",
  messagingSenderId: "158099597201",
  appId: "1:158099597201:web:4a9cd2142b89e1a301dc30",
  measurementId: "G-R7FYNEMFH4"
};
const apps = getApps();
let firebaseApp;
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = apps[0];
}
const db = getFirestore(firebaseApp, {});

const allWorks = async () => {
  try {
    const col = collection(db, "works");
    const snapshot = await getDocs(col);
    if (snapshot) {
      const works = snapshot.docs.map(doc => doc.data());

      return works.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
    }
  } catch (error) {
    console.error("error::", error);
  }
};

export { db, allWorks };
