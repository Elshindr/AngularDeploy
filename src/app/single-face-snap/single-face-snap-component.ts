import { FaceSnap } from '../models/face-snap.model';
import {Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.html',
  styleUrls: ['./single-face-snap-component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  txtSnap! :string;
  
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void{
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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
