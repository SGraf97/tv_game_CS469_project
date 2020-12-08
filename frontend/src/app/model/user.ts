export class User {

  public username: string;
  public password: string;
  public color: string;
  public photoProfile: string;
  public xp: number;
  public level: number;
  public socket: any;
  public isLoggedIn: boolean;
  public _id: string;

  constructor(username: string, color: string) {
    this.username = username;
    this.color = color;
    this.xp=0;
    this.level=0;
    this.isLoggedIn = true;
  }

  public update(level: number, xp: number){
    this.level = level;
    this.xp = xp;
  }

  // testing function
  static getUsers(): any {
    return [];
  }

  static getUser(username: any): User {
    return undefined;
  }
}
