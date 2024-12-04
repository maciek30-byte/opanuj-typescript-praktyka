export enum UserPermission {
  VIEW = "VIEW",
  WRITE = "WRITE",
  DELETE= "DELETE",
  READ = "READ"
}

export enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "VIEWER"
}

export interface User {
  role: UserRole;
  permissions: UserPermission[];
}

export function hasAccess(user: User, requiredPermission: UserPermission): boolean {
  if (user.role === UserRole.ADMIN) return true;
  return user.permissions.includes(requiredPermission);
}
