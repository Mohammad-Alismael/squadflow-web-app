import { User } from "../types";
import {handleLoginFB} from "@/lib/auth";
import {fromStateType} from "@/components/AuthForm";

type fetcherType = {
  url: string;
  method: string;
  body: string | User;
  json: boolean;
};
const fetcher = async ({ url, method, body, json = true }: fetcherType) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data.data
  }
};

export const register = async (user: User) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
    json: false,
  });
};

export const signin = async (user: fromStateType) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
    json: false,
  });
  // return handleLoginFB(user.email, user.password)
};

export const createNewProject = (name: string) => {
  return fetcher({
    url: "/api/project",
    method: "POST",
    body: { name },
  });
};
