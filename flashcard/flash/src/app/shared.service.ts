// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// // import {Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SharedService {

//   // add api url here
//   url='https://nancyflashcards.herokuapp.com/';
//   // readonly APIUrl = 'https://127.0.0.1:8000/api/';
//   readonly Photourl = 'http://127.0.0.1:8000/media/';


//   // create new user
//   createUser(username: string,email: string, password: string) {
//     return this.http.post(
//       this.url + 'users/create/',
//       {
//         username: username,
//         password: password,
//         email: email,
//       },
//       // {
//       //   headers: {
//       //     Authorization: 'Token ' + this.token,
//       //   },
//       // }
//     );
//   }


//   // login user
//   loginUser(username: string, password: string) {
//     return this.http.post(
//       this.url + 'login/',
//       {
//         username: username,
//         password: password,
//       },
//       // {
//       //   headers: {
//       //     Authorization: 'Token ' + this.token,
//       //   },
//       // }
//     );
//   }

//   constructor(private http:HttpClient) { }

//   getGradeList():Observable<any[]>{
//     return this.http.get<any[]>(this.APIurl + '/grade/');
//   }

//   // getSubjecteList():Observable<any[]>{
//   //   return this.http.get<any[]>(this.APIUrl + '/subject/');
//   // }
  
  
//   addGrade(val:any){
//     return this.http.post(this.APIurl + '/grade/',val);
//   }

//   updateGrade(val:any){
//     return this.http.put(this.APIurl + '/grade/',val);
//   }

//   deleteGrade(val:any){
//     return this.http.delete(this.APIurl + '/grade/',val);
//   }

//   // subjects

//   getSubjectList():Observable<any[]>{
//     return this.http.get<any[]>(this.APIurl + '/subject/');
//   }
  
//   addSubject(val:any){
//     return this.http.post(this.APIurl + '/subject/',val);
//   }

//   updateSubject(val:any){
//     return this.http.put(this.APIurl + '/subject/',val);
//   }

//   deleteSubject(val:any){
//     return this.http.delete(this.APIurl + '/subject/',val);
//   }

//   // method to save profile pictures
//   UploadPhoto(val:any){
//     return this.http.post(this.APIurl + '/SaveFile',val);
//   }

//     // method to get all gradenames
//   getAllGradeNames():Observable<any[]>{
//     return this.http.get<any[]>(this.APIurl + '/grade/');
//   }

  
// }

