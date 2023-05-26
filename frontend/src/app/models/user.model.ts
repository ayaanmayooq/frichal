export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  fullName: string;
  bio: string;
  sentRequests: string[];
  receivedRequests: string[];
  friends: string[];
  createdAt: Date;
}
