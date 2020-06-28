import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-test',
  templateUrl: './git-test.component.html',
  styleUrls: ['./git-test.component.css']
})
export class GitTestComponent implements OnInit {


  post: {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true').subscribe(po =>
      this.post = po)
    console.log("wath is this " + this.post);

  }

}
