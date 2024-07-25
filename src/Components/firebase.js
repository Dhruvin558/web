
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyDwE7F_p0_FpGvpwVdXFxfPIptvIzhVM7c",
  authDomain: "fir-fdemo558.firebaseapp.com",
  databaseURL: "https://fir-fdemo558-default-rtdb.firebaseio.com",
  projectId: "fir-fdemo558",
  storageBucket: "fir-fdemo558.appspot.com",
  messagingSenderId: "124974648728",
  appId: "1:124974648728:web:24e91cc3f4fe72c4422fed"
};



const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)