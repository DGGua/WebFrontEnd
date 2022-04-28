import axios from "axios";
import moment from "moment";
import Cookies from "universal-cookie";
import { CommonResponse } from "../models/CommonModel";
import { Paper, PaperDetail, User } from "../models/UserModel";
import { perfix } from "./global";

export const UserService = {
  login: async (username: string, password: string) => {
    const form = new FormData();
    form.append("username", username);
    form.append("pwd", password);
    const res = await axios.post<{ data: string }>(
      perfix + "/user/login",
      form
    );
    console.log(res);
    if (res.status !== 200) return false;
    else {
      localStorage.setItem("jwt", res.data.data);
      return true;
    }
  },
  register: (
    username: string,
    password: string,
    email?: string,
    birthday?: moment.Moment,
    balance?: number
  ) => {
    return axios.post(
      perfix + "/user/register",
      {
        name: username,
        pwd: password,
        email,
        birthday,
        balance,
      },
      {
        headers: {
          Authorization: localStorage.getItem("jwt") ?? "",
        },
      }
    );
  },
  update: async (
    username: string,
    password: string,
    email?: string,
    birthday?: moment.Moment,
    balance?: number
  ) => {
    return axios.put(
      perfix + "/user/update_user",
      {
        name: username,
        pwd: password,
        email,
        birthday: birthday?.toLocaleString(),
        balance,
      },
      { headers: { Authorization: localStorage.getItem("jwt") ?? "" } }
    );
  },
  list: async () => {
    return axios.get<CommonResponse<User[]>>(perfix + "/user/list", {
      headers: { Authorization: localStorage.getItem("jwt") ?? "" },
    });
  },
};

export const PaperService = {
  list: (page: number) => {
    return axios.get<CommonResponse<Paper[]>>(perfix + `/paper/list/${page}`, {
      headers: { Authorization: localStorage.getItem("jwt") ?? "" },
    });
  },
  getContent: (contentID: string) => {
    return axios.get<CommonResponse<{ contentID: string; content: string }>>(
      perfix + `/paper/content/${contentID}`,
      { headers: { Authorization: localStorage.getItem("jwt") ?? "" } }
    );
  },
  uploadContent: (paperName: string, content: string) => {
    return axios.post<CommonResponse<never>>(perfix + "/paper/upload", {
      headers: { Authorization: localStorage.getItem("jwt") ?? "" },
    });
  },
  modifyContent: (paperID: string, paperName: string, content: string) => {
    return axios.put<CommonResponse<never>>(
      perfix + `paper/modify/${paperID}`,
      { paperName, content },
      { headers: { Authorization: localStorage.getItem("jwt") ?? "" } }
    );
  },
};
