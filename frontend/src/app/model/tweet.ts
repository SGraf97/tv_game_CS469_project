export class Tweet {
  userTag: string;
  username: string;
  userProfileImage: string;
  likes: number;
  retweets: number;
  whenCreated: string; // nomizw
  twittedFrom: string;
  twit: string;

  // @ts-ignore
  constructor(username, twitText) {

    if (username == undefined) {
      if (twitText == undefined) {
        this.username = "User Test";
        this.likes = 100;
        this.retweets = 50;
        this.userTag = "@tag";
        this.whenCreated = "today";
        this.twittedFrom = "iFone";
        this.twit = "A tweet about #gntmgr commenting on something that happened on the episode. Might also tag @anotherUser."
      }else{
        this.twit = twitText;
      }
    }else{
      this.username = username;
    }

  }

}

