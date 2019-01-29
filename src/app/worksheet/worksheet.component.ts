import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkSheetItem } from '../models/worksheet';
import { MomentService } from '../providers/Moment.service';

const EXAMPLE_DATA: WorkSheetItem[] = [
  { actualDay: 1, cashierNumber: 1 },
  { actualDay: 2, cashierNumber: 1 },
  { actualDay: 3, cashierNumber: 1 },
  { actualDay: 4, cashierNumber: 1 },
  { actualDay: 5, cashierNumber: 1 },
  { actualDay: 6, cashierNumber: 1 },
  { actualDay: 7, cashierNumber: 1 },
  { actualDay: 8, cashierNumber: 1 },
  { actualDay: 9, cashierNumber: 1 },
  { actualDay: 10, cashierNumber: 1 },
  { actualDay: 11, cashierNumber: 1 },
  { actualDay: 12, cashierNumber: 1 },
  { actualDay: 13, cashierNumber: 1 },
  { actualDay: 14, cashierNumber: 1 },
  { actualDay: 15, cashierNumber: 1 },
  { actualDay: 16, cashierNumber: 1 },
  { actualDay: 17, cashierNumber: 1 },
  { actualDay: 18, cashierNumber: 1 },
  { actualDay: 19, cashierNumber: 1 },
  { actualDay: 20, cashierNumber: 1 }
];

@Component({
  selector: 'conv-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent implements OnInit {
  workSheetItems: WorkSheetItem[] = EXAMPLE_DATA;

  constructor(private momentService: MomentService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'Nap',
    'Pt.gép'
    // 'Bevétel 5%',
    // 'Bevétel 18%',
    // 'Bevétel 27%'
  ];

  ngOnInit() {}

  getTotalCost() {
    return this.workSheetItems
      .map(item => item.cashierNumber)
      .reduce((acc, value) => acc + value, 0);
  }
}
