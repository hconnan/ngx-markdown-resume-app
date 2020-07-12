import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-style-1',
  templateUrl: './style1.component.html',
  styleUrls: ['./style1.component.scss']
})
export class AppStyle1Component implements OnInit {
  public header: string;
  public subheader: string;
  public body: string;
  public sidebar: string;
  public footer: string;

  constructor( private __httpClient: HttpClient ) { }

  public ngOnInit() {
    this.__httpClient.get('assets/resume/header.md', { responseType: 'text' })
      .subscribe(data => this.header = data );

    this.__httpClient.get('assets/resume/subheader.md', { responseType: 'text' })
      .subscribe(data => this.subheader = data );

    this.__httpClient.get('assets/resume/body.md', { responseType: 'text' })
      .subscribe(data => this.body = data);

    this.__httpClient.get('assets/resume/sidebar.md', { responseType: 'text' })
      .subscribe(data => this.sidebar = data );

    this.__httpClient.get('assets/resume/footer.md', { responseType: 'text' })
      .subscribe(data => this.footer = data );
  }
}
