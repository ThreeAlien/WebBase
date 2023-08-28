import { media } from './../report-manage.models';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { exportSampleManageModels } from '../report-manage.models';

@Component({
  selector: 'app-add-rep-exmple-pop',
  templateUrl: './add-rep-exmple-pop.component.html',
  styleUrls: ['./add-rep-exmple-pop.component.css']
})
/**新增報表範本 */
export class AddRepExmplePopComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddRepExmplePopComponent>,
    @Inject(MAT_DIALOG_DATA) public inPutdata:exportSampleManageModels) { }
  mediaType = "";
  mediaG = "G";
  mediaM = "M"
  ngOnInit(): void {
    this.mediaType = "";
  }
  changeFormType(value:string){
    this.mediaType = value;
  }
  onOk():void{
    this.dialogRef.close({ data: false });
  }
  onCancel(): void {
    this.dialogRef.close({ data: false });
  }
}
