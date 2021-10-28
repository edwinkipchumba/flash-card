import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthusService {

   // add api url here
   APIUrl='http://flash-cards-rest-api.herokuapp.com/api/subjects/';
   // readonly APIUrl = 'https://127.0.0.1:8000/api/';
   readonly PhotoUrl = 'http://127.0.0.1:8000/media/';
 
 
   // create new user
   createUser(username: string,email: string, password: string) {
     return this.http.post(
       this.APIUrl + 'users/create/',
       {
         username: username,
         password: password,
         email: email,
       },
       // {
       //   headers: {
       //     Authorization: 'Token ' + this.token,
       //   },
       // }
     );
   }
 
 
   // login user
   loginUser(username: string, password: string) {
     return this.http.post(
       this.APIUrl + 'login/',
       {
         username: username,
         password: password,
       },
       // {
       //   headers: {
       //     Authorization: 'Token ' + this.token,
       //   },
       // }
     );
   }
 
   constructor(private http:HttpClient) { }
 
   getGradeList():Observable<any[]>{
     return this.http.get<any[]>(this.APIUrl + '/grade/');
   }
 
   // getSubjecteList():Observable<any[]>{
   //   return this.http.get<any[]>(this.APIUrl + '/subject/');
   // }
   
   
   addGrade(val:any){
     return this.http.post(this.APIUrl + '/grade/',val);
   }
 
   updateGrade(val:any){
     return this.http.put(this.APIUrl + '/grade/',val);
   }
 
   deleteGrade(val:any){
     return this.http.delete(this.APIUrl + '/grade/',val);
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
     return this.http.delete(this.APIUrl + '/subject/',val);
   }
 
   // method to save profile pictures
   UploadPhoto(val:any){
     return this.http.post(this.APIUrl + '/SaveFile',val);
   }
 
     // method to get all gradenames
   getAllGradeNames():Observable<any[]>{
     return this.http.get<any[]>(this.APIUrl + '/grade/');
   }



}
