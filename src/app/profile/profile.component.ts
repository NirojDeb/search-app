import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  @Input() url: string="";
@Input() name: string="";

ngOnInit(){
  console.log(this.name,this.url);
  
}

}
