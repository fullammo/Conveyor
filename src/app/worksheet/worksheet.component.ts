import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkSheetItem } from '../models/worksheet';
import { MomentService } from '../providers/moment.service';

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

  readonly zeroIncomeColumnName: string = 'Bevétel 0%';
  readonly fiveIncomeColumnName: string = 'Bevétel 5%';
  readonly eighteenIncomeColumnName: string = 'Bevétel 18%';
  readonly twentySevenIncomeColumnName: string = 'Bevétel 27%';

  public zeroIncomeColumDisplayed = true;
  public fiveIncomeColumnDisplayed = true;
  public eighteenIncomeColumnDisplayed = true;
  public twentySevenIncomeColumnDisplayed = true;

  constructor(private momentService: MomentService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [
    'Nap',
    'Pt.gép' //,
    // this.zeroIncomeColumnName,
    // this.fiveIncomeColumnName,
    // this.eighteenIncomeColumnName,
    // this.twentySevenIncomeColumnName
  ];

  columnsToDisplay: string[] = this.displayedColumns.slice();

  addIncomeColumn(columnName: string): void {
    // this.columnsToDisplay.push(columnName);
    this.toggleDisplayStatus(columnName);
  }

  removeIncomeColumn(columnName: string): void {
    // this.columnsToDisplay = this.columnsToDisplay.filter(
    //   column => column !== columnName
    // );
    this.toggleDisplayStatus(columnName);
  }

  toggleDisplayStatus(columnName: string): void {
    switch (columnName) {
      case this.zeroIncomeColumnName:
        this.zeroIncomeColumDisplayed = !this.zeroIncomeColumDisplayed;
        break;
      case this.fiveIncomeColumnName:
        this.fiveIncomeColumnDisplayed = !this.fiveIncomeColumnDisplayed;
        break;
    }
  }

  ngOnInit() {
    console.log(this.momentService.getNow());
  }

  getTotalCost() {
    return this.workSheetItems
      .map(item => item.cashierNumber)
      .reduce((acc, value) => acc + value, 0);
  }
}
