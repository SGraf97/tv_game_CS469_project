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

  // testing function
  static getUsers(): any {
    return [
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),
      new User('testUsername', 'red'),


    ];
  }

  static getUser(username: any): User {


    return undefined;
  }
}
