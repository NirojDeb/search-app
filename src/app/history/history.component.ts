import { Component } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  constructor(private historyService:HistoryService) {}

  history:any;

  ngOnInit(){
    let history = this.historyService.getSearchHistory();
    this.history=history
  }

  onClearHistory(){
    this.historyService.clearSearchHistory(); 
  }

}
