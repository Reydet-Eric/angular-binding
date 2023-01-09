import { Component } from "@angular/core";

@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.css"]
})
export class BlockComponent {
  title = "angular-binding";
  user = {

  name : 'Doe',

  firstName : 'John',

  age : 25,

  quote : '',

  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'

};
}
