import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent implements OnInit {

  name = 'Angular 5';
  fileUrl!: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() {
    const data = 'test file download';
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
}
