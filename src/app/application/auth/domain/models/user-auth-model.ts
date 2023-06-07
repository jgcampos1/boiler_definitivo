type RoleType = {
  id: string;
  name: string;
  slug: string;
};
export type UserAuthModel = {
  email: string;
  firstName: string;
  lastName: string;
  roles: RoleType[];
  userId: string;
};
