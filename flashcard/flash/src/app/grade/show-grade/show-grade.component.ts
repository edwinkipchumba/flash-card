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

  ModalTitle:any;
  ActivateAddEditGradeComp:any="false";
  grade:any;

  // filter data
  GradeIdFilter:string="";
  GradeNameFilter:string="";
  GradeListWithoutFilter:any=[];


  ngOnInit(): void {

    this.refreshGradeList();
  }

  addClick(){
    this.grade={
      GradeId:0,
      GradeName:"",
    }
    this.ModalTitle="Add Grade";
    this.ActivateAddEditGradeComp=true;
  }

  // editclick
  editClick(item){
    this.grade = item;
    this.ModalTitle='Edit Grade';
    this.ActivateAddEditGradeComp=true;
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
  FilterFn(){
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

// sort
  sortResult(prop,asc){
    this.GradeList=this.GradeListWithoutFilter.sort(function(a,b){
      if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
