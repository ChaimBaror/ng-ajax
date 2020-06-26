import { Component, OnInit } from '@angular/core';
import { GitDbService } from 'src/app/server/git-db.service';

@Component({
  selector: 'app-git-db',
  templateUrl: './git-db.component.html',
  styleUrls: ['./git-db.component.css']
})
export class GitDbComponent implements OnInit {

  constructor(private myService: GitDbService) { }
  keyarr = []
  dbAjaxContent = {}

  ngOnInit(): void {

    // this.myService.httpget(this.myService.urlindex.txt)
    //   .subscribe(strgRes => this.dbAjaxContent["txt"] = strgRes);


    for (let key in this.myService.urlindex) {

      this.keyarr.push(key)
      this.myService.httpget(this.myService.urlindex[key])
        .subscribe(strgRes => this.dbAjaxContent[key] = strgRes);
        console.log('this is key' +key);
        
    }

  }
}