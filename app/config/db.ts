import {
  apiKey,
  appId,
  authDomain,
  databaseUrl,
  messagingSenderId,
  projectId,
  storageBucket,
} from '@env';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseUrl,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)
