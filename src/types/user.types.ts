export type TUserPostData = {
  name: string;
  email: string;
  password: string;
  contactNo: string;
  address: string;
};

export type TUserLoginData = {
  email: string;
  password: string;
};

export type TUserLoginResponse = {
  token: string | null;
};
