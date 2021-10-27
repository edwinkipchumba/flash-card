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
  Grade:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  GradeList:any=[];

  ngOnInit(): void {
    this.loadGradeList();

  }

    loadGradeList(){
      this.service.getAllGradeNames().subscribe((data:any)=>{
        this.GradeList=data;

        this.SubjectId=this.subject.SubjectId;
        this.SubjectName=this.subject.SubjectName;
        this.Grade=this.subject.Grade;
        this.PhotoFileName=this.subject.PhotoFileName;
        this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
      });
    }
 

  // add subject
  AddSubject(){
    var val = {SubjectId:this.SubjectId,
               SubjectName:this.SubjectName,
               Grade:this.Grade,
               PhotoFileName:this.PhotoFileName};

    this.service.addSubject(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  // update subject
  updateSubject(){
    var val = {SubjectId:this.SubjectId,
               SubjectName:this.SubjectName,
               Grade:this.Grade,
               PhotoFileName:this.PhotoFileName};

    this.service.updateSubject(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  // uploading photo
  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}

