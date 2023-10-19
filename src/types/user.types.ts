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

export type TUser = {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    gender?: string;
    status?: string;
    imgUrl?: string;
    address?: string;
    contact?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
