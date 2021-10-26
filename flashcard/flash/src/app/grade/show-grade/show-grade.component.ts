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

  ModalTitle:string;
  ActivateAddEditGradeComp:boolean="false";
  grade:any;

  // filter data
  GradeIdFilter:string="";
  GradeNameFilter:string="";
  GradeListWithoutFilter:any=[];


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
      this.GradeListWithoutFilter=data;
    });
  }
   
  // filter date
  filterFn(){
    var GradeIdFilter = this.GradeIdFilter;
    var GradeNameFilter = this.GradeNameFilter;

    this.GradeList=this.GradeListWithoutFilter.filter(function(el){
      return el.GradeId.toString().toLowerCase().includes(
        GradeIdFilter.toString().trim().toLowerCase()
      )&&
      el.GradeName.toString().toLowerCase().includes(
        GradeNameFilter.toString().trim().toLowerCase()
      )
    });
  }


}
