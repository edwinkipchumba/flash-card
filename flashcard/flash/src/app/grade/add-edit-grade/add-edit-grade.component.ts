import { Component, OnInit,Input } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-grade',
  templateUrl: './add-edit-grade.component.html',
  styleUrls: ['./add-edit-grade.component.css']
})
export class AddEditGradeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() grade:any;
  GradeId:string;
  GradeName:string;

  ngOnInit(): void {

    this.GradeId=this.grade.GradeId;
    this.GradeName=this.grade.GradeName;
  }

  // add grades
  addGrade(){
    var val={
            GradeId:this.GradeId,
            GradeName:this.GradeName};

    this.service.addGrade(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  // update grade
  updateGrade(){
    var val={
            GradeId:this.GradeId,
            GradeName:this.GradeName};

    this.service.addGrade(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
