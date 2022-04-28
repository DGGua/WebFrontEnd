export interface User {
  userid: string;
  username: string;
  userpwd: string;
  birthday: string;
  balance: number;
  email: string | null;
}

export interface Paper {
  paperid: string;
  papername: string;
  userid: string;
  contentid: string;
}

export interface PaperDetail {
  paperid: string;
  papername: string;
  papercontent: string;
}
