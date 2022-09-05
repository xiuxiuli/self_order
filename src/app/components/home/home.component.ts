import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public common: CommonService) { }

  ngOnInit(): void {
  }

}
