export interface IUser {
  id: 1;
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  email_verified_at: null;
  created_at: string;
  updated_at: string;
}

export interface IRegister {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  password: string;
}


export interface ILogin {
  email: string;
  password: string;
}
