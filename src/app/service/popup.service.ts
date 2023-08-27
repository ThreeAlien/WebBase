import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class PopupService {
  constructor(public dialog: MatDialog) { }
  private dialogRef;
  popupData: any;
  /**傳送跳窗資料 */
  public sendData(data: any) {
    this.popupData = data;
  }
  showDialogWithSize(showComponent: any, height: number, width: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = height;
    dialogConfig.minWidth = width;
    dialogConfig.height = "auto";
    dialogConfig.data = this.popupData;
    this.dialogRef = this.dialog.open(showComponent, dialogConfig);
  }
  showDialog(showComponent: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = document.documentElement.clientHeight - 20;
    dialogConfig.minWidth = document.documentElement.clientWidth - 20;
    dialogConfig.data = this.popupData;
    this.dialogRef = this.dialog.open(showComponent, dialogConfig);
  }
}
