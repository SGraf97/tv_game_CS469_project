export class User {

  public username: string;
  public password: string;
  public color: string;
  public photoProfile: string;
  public xp: number;
  public level: number;
  public socket: any;
  public isLoggedIn: boolean;

  constructor(username: string, color: string) {
    this.username = username;
    this.color = color;
    this.xp=0;
    this.level=0;
    this.socket = 'socket';
  }

}
