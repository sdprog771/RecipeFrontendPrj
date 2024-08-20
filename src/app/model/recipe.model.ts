export class Recipe{

  private recipeId!:number;
  public name!: string;
  public category!: string;
  public imagePath!: string;


  constructor(id:number,name: string, category: string, imagePath: string) {
    this.recipeId=id;
    this.name=name;
    this.category=category;
    this.imagePath=imagePath;
  }


}
