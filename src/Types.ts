export type userType = {
  id: string;
  img: string;
  isOnline: boolean;
  username: string;
  email: string;
  bio?: string;
};

export type authDataType = {
  email: string;
  password: string;
};
