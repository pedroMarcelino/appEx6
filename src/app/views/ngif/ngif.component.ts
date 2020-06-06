import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  inp1: number;
  valueselect: string;

  n1: number;
  n2: number;
  opc: string;

  constructor() { }

  ngOnInit(): void {
  }
  result(opc: string, n1: number, n2: number): number{
    n1 = Number(n1);
    n2 = Number(n2);
    if (opc === '+'){
      return n1 + n2;
    }else
    if (opc === '-'){
      return n1 - n2;
    }else
    if (opc === '*'){
      return n1 * n2;
    }else
    if (opc === '/'){
      return n1 / n2;
    }else{
      return 0;
    }
  }
}
