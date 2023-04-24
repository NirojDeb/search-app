import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { 
  }

  updateSearchHistory(users:IUser[],searchTerm:string){
    let history:any=localStorage.getItem('history');
    let historyArry=[];
    try{
      historyArry=JSON.parse(history)?JSON.parse(history):[];
    }
    catch{
      console.log(history,'Wrong History');
    }
    let updatedHistory=[...historyArry,{'users':users,'searchTerm':searchTerm}];
    localStorage.setItem('history',JSON.stringify(updatedHistory));
  }

  getSearchHistory(){
    let history:any=localStorage.getItem('history');
    let historyArry=[];
    try{
      historyArry=JSON.parse(history)?JSON.parse(history):[];
    }
    catch{
      console.log('Wrong Format in history');
    }
    return historyArry;
  }

  clearSearchHistory()
  {
    localStorage.setItem('history',JSON.stringify([]));
  }


}
