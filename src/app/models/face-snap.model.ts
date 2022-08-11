export class FaceSnap{
  id! : number;
  title !: string;
  description !: string;
 createdDate !: Date;
  snaps !: number;
  imageURL !: string;
  location ?: string;

  // method d'initialisation avec constructeur
  // this.faceSnap = new FaceSnap()
  /*
    constructor(public title:string, public description:string, public createdDate:Date, public snaps:number, public imageURL: string){
        this.title = title;
        this.description = description;
        this.createdDate = createdDate;
        this.snaps = snaps;
        this.imageURL = imageURL;
      }
  */
}