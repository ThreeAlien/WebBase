import { Component, OnInit } from "@angular/core";

@Component({
  template: '',
})
export class BaseComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
