export class Model {
  name: string;
  age: number;
  height: number;
  points: number;
  description : string;
  fullname:string;

  constructor(name, age, height, points, fullname) { 
    this.name = name;
    this.age = age;
    this.height = height;
    this.points = points;
    this.fullname=fullname;
    /*this.description = "Born in Thessaloniki, he started modeling two years ago. She is studying modeling and at the same time, she is working on it.";*/
  }

  static getModels(): any {
    return [
      new Model("ΗΡΑΚΛΗΣ", 19, 183, 116, "Hraklis Tsouzinov"),
      new Model("ΙΡΙΔΑ", 21, 177, 96, "Irida Papoutsh"),
      new Model("ΕΜΜΑΝΟΥΕΛ", 23, 179, 85,"Emmanouel Elozieoua"),
      new Model("ΛΙΑ", 22, 172, 80,"Lia Tsouzntan"),
      new Model("ΔΗΜΟΣ", 40, 185, 30,"Dimos Tzoumanis")
    ];
  }


}
