import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-grade',
  templateUrl: './show-grade.component.html',
  styleUrls: ['./show-grade.component.css']
})
export class ShowGradeComponent implements OnInit {

  constructor(private service:SharedService) { }

  GradeList:any=[];

  ngOnInit(): void {

    this.refreshGradeList();
  }


  refreshGradeList(){
    this.service.getGradeList().subscribe(data=>{
      this.GradeList=data;
    });
  }
}
