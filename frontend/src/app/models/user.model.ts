export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  bio: string;
  sentRequests: string[];
  receivedRequests: string[];
  friends: string[];
  createdAt: Date;
}
