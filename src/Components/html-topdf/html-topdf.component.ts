import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-html-topdf',
  templateUrl: './html-topdf.component.html',
  styleUrls: ['./html-topdf.component.css']
})
export class HtmlTopdfComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  getBase64Image(img: CanvasImageSource) {
    var canvas = document.createElement("canvas");
    console.log("image");
    canvas.width = Number(img.width);
    canvas.height = Number(img.height);
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      return dataURL;
    }
    return "";
  }
  download() {
    let doc = new jsPDF();
    (doc as any).autoTable({ html: '#table' });
    doc.save('test.pdf');
  }
}
