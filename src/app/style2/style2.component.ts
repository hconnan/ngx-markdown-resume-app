import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-style-2',
  templateUrl: './style2.component.html',
  styleUrls: ['./style2.component.scss']
})
export class AppStyle2Component implements OnInit {
  public header: string;
  public body: string;
  public sidebar: string;

  constructor( private __httpClient: HttpClient ) { }

  public ngOnInit() {
    this.__httpClient.get('assets/resume2/header.md', { responseType: 'text' })
      .subscribe(data => this.header = data );

    this.__httpClient.get('assets/resume2/body.md', { responseType: 'text' })
      .subscribe(data => this.body = data);

    this.__httpClient.get('assets/resume2/sidebar.md', { responseType: 'text' })
      .subscribe(data => this.sidebar = data );
  }
}
