import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate!: TemplateRef<any>;
  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = ['Lesson 1', 'Lessons 2'];
  totalEstimate = 10;
  templateCtx = { estimate: this.totalEstimate };


  @ViewChild('defaultTabButtons') private defaultTabButtonsTpl!: TemplateRef<any>;
  constructor(private vref: ViewContainerRef) {

  }

  ngOnInit(): void {
    console.log(this.defaultTabButtonsTpl);
  }

  ngAfterViewInit(): void {
    this.vref.createEmbeddedView(this.sayHelloTemplate);
  }


  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }

}
