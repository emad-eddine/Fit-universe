
import bcrypt from 'react-native-bcrypt';
import isaac from "isaac";


export function hashPassword(password: string): string {
  
  bcrypt.setRandomFallback((len)=>{
    const buf = new Uint8Array(len)
    const randomValue = buf.map(()=> Math.floor(isaac.random() * 256))

    return Array.from(randomValue, value => value);
  });


  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

export function comparePassword(
  hashedPassword: string,
  password: string
): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}
