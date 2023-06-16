import { User } from "./user.model";

export interface Challenge {
  name: string;
  creator: User;
  participants: User[];
  tasks: string[]; // task model create later
  description?: string;
  startDate?: Date;
  endDate?: Date;
  isPublic?: boolean;
  // Other challenge fields
}
