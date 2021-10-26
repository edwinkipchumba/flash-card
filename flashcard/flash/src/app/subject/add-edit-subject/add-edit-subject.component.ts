import { Component, OnInit,Input } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-subject',
  templateUrl: './add-edit-subject.component.html',
  styleUrls: ['./add-edit-subject.component.css']
})
export class AddEditSubjectComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() subject:any;
  SubjectId:string;
  SubjectName:string;
  Subject:string;
  PhotoFileName:string;

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
