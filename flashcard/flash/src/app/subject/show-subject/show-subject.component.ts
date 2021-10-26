import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-subject',
  templateUrl: './show-subject.component.html',
  styleUrls: ['./show-subject.component.css']
})
export class ShowSubjectComponent implements OnInit {

  constructor(private service:SharedService) { }

  SubjectList:any=[];

  ModalTitle:string;
  ActivateAddEditSubjectComp:boolean="false";
  subject:any;
  ngOnInit(): void {

    this.refreshSubjectList();
  }

  addClick(){
    this.grade{
      SubjectId:0,
      SubjectName:""

    }

    this.ModalTitle="Add Subject";
    this.ActivateAddEditSubjectComp=true;
  }

  // editclick
  editClick(item){
    this.subject = item;
    this.ModalTitle='Edit Subject';
    this.ActivateAddEditSubject=true;
  }

  // delete
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteSubject(item.SubjectId).subscribe(data=>{
        alert(data.toString());
        this.refreshSubjectList();
      })
    }
  }

  // close click
  closeClick(){
    this.ActivateAddEditSubjectComp=false;
    this.refreshSubjectList();
  }

  refreshGradeList(){
    this.service.getGradeList().subscribe(data=>{
      this.GradeList=data;
    });
  }
}
