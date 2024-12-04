import { hasAccess, User, UserPermission, UserRole } from './task.ts';

const userEditor: User = {
  role: UserRole.EDITOR,
  permissions: [UserPermission.VIEW, UserPermission.WRITE],
};

const userViewer: User = {
  role: UserRole.USER,
  permissions: [UserPermission.READ],
};
