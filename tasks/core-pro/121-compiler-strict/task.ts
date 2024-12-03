interface User {
  id: number
  name: string
}

type ValidateUser = User &{isValid:boolean}
export class UserModule {
  private users : User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(userId: User["id"]) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userId) {
        this.users.splice(i, 1);
        break;
      }
    }
  }

  getUser(userId: User["id"]) {
    for (let user of this.users) {
      if (user.id == userId) {
        return user;
      }
    }
    return null;
  }

  filterUsers(filterFn:(user:User)=>{isValid:boolean} | boolean):User[]  {
    return this.users.filter((user) => {
      let result = filterFn(user);
      if(typeof result === "boolean"){
        return result
      }
      return result.isValid;
    });
  }
}

const userModule = new UserModule();
export const { addUser, removeUser, getUser, filterUsers } = userModule;