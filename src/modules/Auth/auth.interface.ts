export type TRegisterUser= {
  name: string;
  email: string;
  phoneNumber?: string;
  password: string;
}

export type TLoginUser = {
  email: string;
  phoneNumber?: string;
  password: string;
}
