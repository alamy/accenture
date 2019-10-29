import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
import {DatePicker} from "react-datepicker";
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    legend = [
      {
        name: "coluna 1",
      },
      {
        name: "coluna 2",
      },
      {
        name: "coluna 3",
      },
      {
        name: "coluna 4",
      }
    ]
  
   lista = [
    {
      name: 'Test 1',
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];
    options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'sep=,',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      //headers: ['Column 1', 'Column 2', '3']
    };
   
  
   exportar() {
    const csvExporter = new ExportToCsv(this.options);
    csvExporter.generateCsv(this.lista);
   }

 
 
 

}
