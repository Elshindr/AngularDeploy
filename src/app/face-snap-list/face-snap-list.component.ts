import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})


export class FaceSnapListComponent implements OnInit{
  arrSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {  }
  
  ngOnInit(): void{
    this.arrSnaps = this.faceSnapsService.arrSnapServices;
  }
}

