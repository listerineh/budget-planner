import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { envManager } from "../config/envManager";

const firebaseConfig = {
  apiKey: envManager.API_KEY,
  authDomain: envManager.AUTH_DOMAIN,
  projectId: envManager.PROJECT_ID,
  storageBucket: envManager.STORAGE_BUCKET,
  messagingSenderId: envManager.MESSAGING_SENDER_ID,
  appId: envManager.APP_ID,
  measurementId: envManager.MEASUREMENT_ID,
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
