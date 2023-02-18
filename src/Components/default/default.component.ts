import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  title = 'PassValidationExample';
  constructor(private router: Router) { }
  btnRegisterClick = () => {
    this.router.navigateByUrl('/Register');
  };
  btntodoAppClick = () => {
    this.router.navigateByUrl('/todo-app');
  };
  btnhtmltopdfAppClick = () => {
    this.router.navigateByUrl('/html-to-pdf');
  };
  btnfiledownloadClick = () => {
    this.router.navigateByUrl('/file-download');
  };

  ngOnInit(): void {
  }
}
