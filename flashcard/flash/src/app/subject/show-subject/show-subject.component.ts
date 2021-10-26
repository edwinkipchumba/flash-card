import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-subject',
  templateUrl: './show-subject.component.html',
  styleUrls: ['./show-subject.component.css']
})
export class ShowSubjectComponent implements OnInit {

  constructor(private service:SharedService) { }

  GradeList:any=[];

  ModalTitle:string;
  ActivateAddEditGradeComp:boolean="false";
  grade:any;
  ngOnInit(): void {

    this.refreshGradeList();
  }

  addClick(){
    this.grade{
      GradeId:0,
      GradeName:""

    }

    this.ModalTitle="Add Grade";
    this.ActivateAddEditGradeComp=true;
  }

  // editclick
  editClick(item){
    this.grade = item;
    this.ModalTitle='Edit Grade';
    this.ActivateAddEditGrade=true;
  }

  // delete
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteGrade(item.GradeId).subscribe(data=>{
        alert(data.toString());
        this.refreshGradeList();
      })
    }
  }

  // close click
  closeClick(){
    this.ActivateAddEditGradeComp=false;
    this.refreshGradeList();
  }

  refreshGradeList(){
    this.service.getGradeList().subscribe(data=>{
      this.GradeList=data;
    });
  }
}
