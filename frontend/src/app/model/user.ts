export class User {

  username: string;
  password: string;
  color: string;
  photoProfile: string;
  points: number;

  constructor(username: any, color: any) {
    this.username = username;
    this.color = color;
    this.points = 5123;
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
