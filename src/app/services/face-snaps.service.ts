import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
  providedIn: 'root'//'enregistrer ce service à la racine de l'application. 
  //assurer davoir qu'une seule instance du service, partagée par tous les partis intéressés.
})
export class FaceSnapsService {
    arrSnapServices: FaceSnap[] = [
        { 
        id: 0,
        title :'Archibald',
        description : 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 0,
        imageURL: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location : 'Paris'
      },
      {
        id: 1,
        title : 'Jojo l\'asticot',
        description :  'un incroyable souvenir, youpi!',
        createdDate: new Date(),
        snaps: 522,
        imageURL:  'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location : 'Los Angeles'
      },
      {
        id: 2,
        title : 'owen',
        description :  "C'est tipar les petits amis!",
        createdDate: new Date(),
        snaps: 160,
        imageURL: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      }];


    getAllFaceSnaps(): FaceSnap[] {
        return this.arrSnapServices;
    }

    getFaceSnapById(fsId: number): FaceSnap{
        const aFaceSnap = this.arrSnapServices.find(fs => fs.id == fsId);

        if(aFaceSnap){
            return  aFaceSnap;
        }
        else{
          throw Error("no snap found");
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: boolean): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === true ? faceSnap.snaps++ : faceSnap.snaps--;
    }


}