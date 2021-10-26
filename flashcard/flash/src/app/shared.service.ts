import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // add api url here
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly PhotoUrl = 'http://127.0.0.1:8000/media/';

  constructor(private http:HttpClient) { }

  getGradeList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/grade/');
  }
  
  addGrade(val:any){
    return this.http.post(this.APIUrl + '/grade/',val);
  }

  updateGrade(val:any){
    return this.http.put(this.APIUrl + '/grade/',val);
  }

  deleteGrade(val:any){
    return this.http.put(this.APIUrl + '/grade/',val);
  }

  // subjects

  getSubjectList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/subject/');
  }
  
  addSubject(val:any){
    return this.http.post(this.APIUrl + '/subject/',val);
  }

  updateSubject(val:any){
    return this.http.put(this.APIUrl + '/subject/',val);
  }

  deleteSubject(val:any){
    return this.http.put(this.APIUrl + '/subject/',val);
  }

  // method to save profile pictures
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/SaveFile',val);
  }

    // method to get all gradenames
  getAllGradeNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'grade');
  }

  
}

