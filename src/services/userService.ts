import axios from "axios";
import moment from "moment";
import { CommonResponse } from "../models/CommonModel";
import { User } from "../models/UserModel";
import { perfix } from "./global";

export const UserService = {
  login: async (username: string, password: string) => {
    const form = new FormData();
    form.append("username", username);
    form.append("pwd", password);
    return axios.post(perfix + "/user/login", form);
  },
  register: async (
    username: string,
    password: string,
    email?: string,
    birthday?: moment.Moment,
    balance?: number
  ) => {
    return axios.post(perfix + "/user/register", {
      name: username,
      pwd: password,
      email,
      birthday,
      balance,
    });
  },
  update: async (
    username: string,
    password: string,
    email?: string,
    birthday?: moment.Moment,
    balance?: number
  ) => {
    return axios.put(perfix + "/user/update_user", {
      name: username,
      pwd: password,
      email,
      birthday: birthday?.toLocaleString(),
      balance,
    });
  },
  list: async () => {
    return axios.get<CommonResponse<User[]>>(perfix + "/user/list");
  },
};
