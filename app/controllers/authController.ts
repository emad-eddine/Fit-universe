import { ref, set, onValue } from 'firebase/database';

import { database as db } from '../config/db';
import { comparePassword, hashPassword } from '../utils/jwt';
import { DB_RESPONSE } from '../utils/constants';

export async function addUserToDb(
  userName: string,
  email: string,
  password: string
): Promise<boolean> {
  const autoId: string = Date.now().toString(); // for simplicity or u can use uuid package and check if exist in db

  const hashingPassword = hashPassword(password);

  set(ref(db, 'users/' + autoId), {
    username: userName,
    email: email,
    password: hashingPassword,
  })
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });

  return false;
}

export function checkUserCredentials(
  email: string,
  password: string
): Promise<Object | Number> {
  const starCountRef = ref(db, 'users/');

  return new Promise((resolve, reject) => {
    try {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const item = data[key];
            if (item.email === email) {
              const isPassword = comparePassword(item.password, password);
              if (isPassword) {
                //console.log(item);
                resolve(item);
              } else {
                reject(DB_RESPONSE.INVALID_PASSWORD);
              }
            }
          }
        }
        reject(DB_RESPONSE.NOT_FOUND);
      });
    } catch (error) {
      reject(DB_RESPONSE.ERROR);
    }
  });
}
