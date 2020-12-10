import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-enter-forms',
  templateUrl: './enter-forms.component.html',
  styleUrls: ['./enter-forms.component.css']
})

export class EnterFormsComponent implements OnInit {
  @Input() state: string;

  public errMssg: boolean;
  public errMessage: string;
  public colors: boolean;
  public colorList: any;
  public loggedInUser: User;

  public input = {
    username: '',
    password: '',
    confirmPassword: '',
    color: ''
  }

  public states = {
    LOGIN: "Login",
    REGISTER: "Sign Up",
    COLORS: "Pick Your Color"
  };
  public stateAlt: string;

  constructor(private userService: UserService) {
    this.state = this.states.LOGIN;
  }

  ngOnInit(): void {
    this.userService.loggedInUser.subscribe(user => { this.loggedInUser = user; console.log('enter forms got:'); console.log(user) })
    //if user is already logged in, go to main menu
    if(this.loggedInUser._id){
      window.location.href = "/phone/menu"
    }
    
    this.stateAlt = this.state === this.states.LOGIN ? this.states.REGISTER : this.states.LOGIN;
    this.colors = false;

    this.colorList = [
      { val: "#FFFFFF", disabled: false },
      { val: "#565656", disabled: false },
      { val: "#1E1E1E", disabled: false },
      { val: "#0076CC", disabled: false },
      { val: "#E76F51", disabled: false },
      { val: "#FFB500", disabled: false },
      { val: "#264653", disabled: false },
      { val: "#EE7B90", disabled: false }
    ]
  }

  enterFunc(event: any) {
    if (this.state === this.states.LOGIN) {
      this.login(this.input.username, this.input.password)
    }
    else if (this.state === this.states.REGISTER) {
      this.register(this.input.username, this.input.password, this.input.confirmPassword)
    } else
      window.location.href = "/phone";
  }

  changeState() {
    this.colors = false;
    this.errMssg = false;
    this.errMessage = '';
    //switch states between login/register
    this.state = this.state === this.states.LOGIN ? this.states.REGISTER : this.states.LOGIN;
    this.stateAlt = this.state === this.states.LOGIN ? this.states.REGISTER : this.states.LOGIN;
  }

  login(username: string, password: string) {
    let flag = true;
    //get all users from db, check if user exists
    this.userService.getAll()
      .then(
        res => {
          res.map((u) => {
            //if user exists, create a update parent's user
            if (u.username === username && u.password === password) {
              this.loggedInUser = u;
              this.state = this.states.COLORS;
              this.colors = true;
              this.stateAlt = this.states.LOGIN;
              flag = false;
            } else {//disable taken colors from colorlist
              this.colorList.map((color) => {
                if (color.val === u.color && u.isLoggedIn) {
                  color.disabled = true
                }
              })
            }
          });
          //if no user found, print error message
          this.errMssg = flag;
          this.errMessage = 'Invalid username or password!';
        }
      )
  }

  register(username: string, password: string, confPassword: string) {
    let flag = false;

    if (!username || !password || !confPassword)
      return;

    //password must math. Otherwise, return
    if (password !== confPassword) {
      this.errMessage = "Passwords don't match";
      this.errMssg = true;
      return;
    }
    //get all users from db, check if user exists
    this.userService.getAll()
      .then(
        res => {
          res.map((u) => {
            //check if user already exists
            if (u.username === username) {
              this.errMessage = "A user with this username already exists";
              flag = true;
            }
            //disable taken colors from colorlist
            this.colorList.map((color) => {
              if (color.val === u.color) {
                color.disabled = true
              }
            })
          });
          //if no user found, hide error message
          this.errMssg = flag;
          //else go on
          if (!flag) {
            this.loggedInUser = new User(this.input.username, this.input.color);
            this.loggedInUser.password = this.input.password;
            this.state = this.states.COLORS;
            this.colors = true;
            this.stateAlt = this.states.REGISTER;
          }
        }
      )
  }

  //create user on register
  createUser() {
    this.userService.newUser(this.loggedInUser).then(
      res => { this.loggedInUser._id = res._id }
    );
  }

  //login user and enter in main menu 
  enter() {
    if (this.stateAlt === this.states.REGISTER)
      this.createUser();
    console.log(this.loggedInUser)
    this.userService.updateUser(this.loggedInUser)
    window.location.href = "phone/menu"
  }

  getValue(name: string, value: string) {
    this.input[name] = value;
    if (this.state === this.states.COLORS) {
      this.loggedInUser.color = value;
      this.enter();
    }
  }


}
