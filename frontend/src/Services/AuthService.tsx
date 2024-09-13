import axios from "axios";
import { BASE_API } from "../api";
import { handleError } from "../Helper";
import { UserProfileToke } from "../Models/User";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToke>(
      BASE_API + "api/account/login",
      {
        username: username,
        password: password,
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToke>(
      BASE_API + "account/register",
      {
        email: email,
        username: username,
        password: password,
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};
