
export class User {

  username: string;
  password: string;
  color: string;
  photoProfile: string;
  xp: number;
  level: number;


  constructor(username: any, color: any) {
    this.username = username;
    this.color = color;
    this.xp=0;
    this.level=0;
  }

  static getUsers(): any {
    return [
      new User('Username', 'red'),
      new User('Username', 'red'),
      new User('Username', 'red'),
      new User('Username', 'red')
    ];
  }


  static getUser(username: any): User{


    return undefined;
  }
}
