import { FaceSnap } from './../models/face-snap.model';
import {Input, Component} from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
 
  @Input() faceSnap!: FaceSnap;
  txtSnap! :string;
  
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void{
    this.txtSnap = "Oh Snap!";
  }
  
  onAddSnap(){
    const aFaceSnap = this.faceSnapsService.getFaceSnapById(this.faceSnap.id);

    if (this.txtSnap === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(aFaceSnap.id, true);
      this.txtSnap = 'Oops, unSnap!';
    } 
    else {
      this.faceSnapsService.snapFaceSnapById(aFaceSnap.id, false);
      this.txtSnap = 'Oh Snap!';
    }
  }
}
