import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { exportSampleManageModels } from './report-manage.models';

@Component({
  selector: 'app-report-manage',
  templateUrl: './report-manage.component.html',
  styleUrls: ['./report-manage.component.css']
})
export class ReportManageComponent implements OnInit {

  constructor(private _liveAnnouncer: LiveAnnouncer) {};
  displayedColumns:string[] = ['accActName', 'exptSampleName', 'goalAds', 'mediaType','creatDt','func'];
  exportSampleData = new MatTableDataSource<exportSampleManageModels>(Data);
  totalCount = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.exportSampleData.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.exportSampleData.paginator = this.paginator;
    this.exportSampleData.sort = this.sort;
  }
  changeSort(sortInfo: Sort) {
    console.log(sortInfo);
    if (sortInfo.direction) {

    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
/**報表範本資料*/
const Data: exportSampleManageModels[] = [
  { accActName: "A好市多_鞋子_觸及廣告", exptSampleName: "範本名稱1", goalAds: "觸及廣告", mediaType: "FB", creatDt: "2023/07/12" },
  { accActName: "A好市多_衣服_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "FB", creatDt: "2023/07/13" },
  { accActName: "A好市多_玩具_互動廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "FB", creatDt: "2023/07/14" },
  { accActName: "A好市多_觸及廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "IG", creatDt: "2023/07/15" },
  { accActName: "A好市多_食物_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "IG", creatDt: "2023/07/16" },
  { accActName: "A好市多_露營_搜尋廣告", exptSampleName: "範本名稱1", goalAds: "搜尋廣告", mediaType: "Google", creatDt: "2023/07/11" },
  { accActName: "A好市多_工具_影音廣告", exptSampleName: "範本名稱2", goalAds: "影音廣告", mediaType: "Google", creatDt: "2023/07/19" },
  { accActName: "A好市多_水果_購物廣告", exptSampleName: "範本名稱1", goalAds: "購物廣告", mediaType: "Google", creatDt: "2023/07/18" },
  { accActName: "B全聯_鞋子_觸及廣告", exptSampleName: "範本名稱1", goalAds: "觸及廣告", mediaType: "FB", creatDt: "2023/07/12" },
  { accActName: "B全聯_衣服_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "FB", creatDt: "2023/07/13" },
  { accActName: "B全聯_玩具_互動廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "FB", creatDt: "2023/07/14" },
  { accActName: "B全聯_觸及_觸及廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "IG", creatDt: "2023/07/15" },
  { accActName: "B全聯_食物_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "IG", creatDt: "2023/07/16" },
  { accActName: "B全聯_露營_搜尋廣告", exptSampleName: "範本名稱1", goalAds: "搜尋廣告", mediaType: "Google", creatDt: "2023/07/11" },
  { accActName: "B全聯_工具_影音廣告", exptSampleName: "範本名稱2", goalAds: "影音廣告", mediaType: "Google", creatDt: "2023/07/19" },
  { accActName: "B全聯_水果_購物廣告", exptSampleName: "範本名稱1", goalAds: "購物廣告", mediaType: "Google", creatDt: "2023/07/18" },
  { accActName: "CNike_鞋子_觸及廣告", exptSampleName: "範本名稱1", goalAds: "觸及廣告", mediaType: "FB", creatDt: "2023/07/01" },
  { accActName: "CNike_衣服_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "FB", creatDt: "2023/07/12" },
  { accActName: "CNike_玩具_互動廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "FB", creatDt: "2023/07/13" },
  { accActName: "CNike_觸及_觸及廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "IG", creatDt: "2023/07/05" },
  { accActName: "CNike_食物_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "IG", creatDt: "2023/07/16" },
  { accActName: "CNike_露營_搜尋廣告", exptSampleName: "範本名稱1", goalAds: "搜尋廣告", mediaType: "Google", creatDt: "2023/07/11" },
  { accActName: "CNike_工具_影音廣告", exptSampleName: "範本名稱2", goalAds: "影音廣告", mediaType: "Google", creatDt: "2023/07/12" },
  { accActName: "CNike_水果_購物廣告", exptSampleName: "範本名稱1", goalAds: "購物廣告", mediaType: "Google", creatDt: "2023/07/13" },
  { accActName: "D家樂福_鞋子_觸及廣告", exptSampleName: "範本名稱1", goalAds: "觸及廣告", mediaType: "FB", creatDt: "2023/07/12" },
  { accActName: "D家樂福_衣服_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "FB", creatDt: "2023/07/13" },
  { accActName: "D家樂福_玩具_互動廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "FB", creatDt: "2023/07/14" },
  { accActName: "D家樂福_觸及_觸及廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "IG", creatDt: "2023/07/15" },
  { accActName: "D家樂福_食物_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "IG", creatDt: "2023/07/16" },
  { accActName: "D家樂福_露營_搜尋廣告", exptSampleName: "範本名稱1", goalAds: "搜尋廣告", mediaType: "Google", creatDt: "2023/07/11" },
  { accActName: "D家樂福_工具_影音廣告", exptSampleName: "範本名稱2", goalAds: "影音廣告", mediaType: "Google", creatDt: "2023/07/19" },
  { accActName: "D家樂福_水果_購物廣告", exptSampleName: "範本名稱1", goalAds: "購物廣告", mediaType: "Google", creatDt: "2023/07/18" },
];
