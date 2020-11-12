export class Model {
  name: string;
  age: number;
  height: number;
  points: number;
  description : string;

  constructor(name, age, height, points) { 
    this.name = name;
    this.age = age;
    this.height = height;
    this.points = points;
    this.description = "Born in Thessaloniki, she started modeling two years ago. She is studying modeling and at the same time, she is working on it.";
  }


}
