import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-grade',
  templateUrl: './add-edit-grade.component.html',
  styleUrls: ['./add-edit-grade.component.css']
})
export class AddEditGradeComponent implements OnInit {

  constructor() { }

  @Input() grade:any;
  GradeId:string;
  GradeName:string;

  ngOnInit(): void {

    this.GradeId=this.grade.GradeId;
    this.GradeName=this.grade.GradeName;
  }

}
