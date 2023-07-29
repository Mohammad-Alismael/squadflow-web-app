import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";
import { User } from "../types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { dbFB } from "@/lib/initAuth";
import { db } from "@/lib/db";

export const hashPassword = (password: string) => bcrypt.hash(password, 10);

export const comparePasswords = (
  plainTextPassword: string,
  hashedPassword: string
) => bcrypt.compare(plainTextPassword, hashedPassword);

export const createJWT = (user: User) => {
  // return jwt.sign({ id: user.id }, 'cookies')
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7;

  return new SignJWT({ payload: { id: user.id, email: user.email } })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
};

export const validateJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload.payload as any;
};

export const getUserFromCookie = async (cookies: any) => {
  const jwt = cookies.get(process.env.COOKIE_NAME);

  const { id } = await validateJWT(jwt.value);

  const user = await db.user.findUnique({
    where: {
      id: id as string,
    },
  });

  return user;
};

export const handleLoginFB = async (email: string , password: string ) => {
  console.log({ email, password });
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user logged in:", userCredential.user);
  } catch (error) {
    throw error;
  }
};
const setSearchParam = (string: string) => {
  const caseSearchList = [];
  let temp = "";
  for (let i = 0; i < string.length; i++) {
    temp = temp + string[i];
    caseSearchList.push(temp);
  }
  return caseSearchList;
};
export const handleSignUpFB = async (
  email: string,
  username: string,
  password: string
) => {
  console.log({ email, username, password });
  const auth = getAuth();
  const searchList = setSearchParam(username);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    await setDoc(doc(dbFB, "users", userCredential.user.uid), {
      username,
      searchList,
    });
    console.log("Collection doc successfully created");
  } catch (error) {
    throw error;
  }
};
