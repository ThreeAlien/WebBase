import { Component, OnInit } from '@angular/core';
import { exportSampleManageModels } from './report-manage.models';

@Component({
  selector: 'app-report-manage',
  templateUrl: './report-manage.component.html',
  styleUrls: ['./report-manage.component.css']
})
export class ReportManageComponent implements OnInit {
  constructor() { }
  /**報表範本資料*/
  exportSampleData: exportSampleManageModels[] = [
    { accActName: "好市多_觸及廣告", exptSampleName: "範本名稱1", goalAds: "觸及廣告", mediaType: "FB", creatDt: "2023/07/12" },
    { accActName: "好市多_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "FB", creatDt: "2023/07/13" },
    { accActName: "好市多_互動廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "FB", creatDt: "2023/07/14" },
    { accActName: "好市多_觸及廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "IG", creatDt: "2023/07/15" },
    { accActName: "好市多_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "IG", creatDt: "2023/07/16" },
    { accActName: "好市多_搜尋廣告", exptSampleName: "範本名稱1", goalAds: "搜尋廣告", mediaType: "Google", creatDt: "2023/07/11" },
    { accActName: "好市多_影音廣告", exptSampleName: "範本名稱2", goalAds: "影音廣告", mediaType: "Google", creatDt: "2023/07/19" },
    { accActName: "好市多_購物廣告", exptSampleName: "範本名稱1", goalAds: "購物廣告", mediaType: "Google", creatDt: "2023/07/18" },
    { accActName: "全聯_觸及廣告", exptSampleName: "範本名稱1", goalAds: "觸及廣告", mediaType: "FB", creatDt: "2023/07/12" },
    { accActName: "全聯_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "FB", creatDt: "2023/07/13" },
    { accActName: "全聯_互動廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "FB", creatDt: "2023/07/14" },
    { accActName: "全聯_觸及廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "IG", creatDt: "2023/07/15" },
    { accActName: "全聯_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "IG", creatDt: "2023/07/16" },
    { accActName: "全聯_搜尋廣告", exptSampleName: "範本名稱1", goalAds: "搜尋廣告", mediaType: "Google", creatDt: "2023/07/11" },
    { accActName: "全聯_影音廣告", exptSampleName: "範本名稱2", goalAds: "影音廣告", mediaType: "Google", creatDt: "2023/07/19" },
    { accActName: "全聯_購物廣告", exptSampleName: "範本名稱1", goalAds: "購物廣告", mediaType: "Google", creatDt: "2023/07/18" },
    { accActName: "Nike_觸及廣告", exptSampleName: "範本名稱1", goalAds: "觸及廣告", mediaType: "FB", creatDt: "2023/07/01" },
    { accActName: "Nike_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "FB", creatDt: "2023/07/12" },
    { accActName: "Nike_互動廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "FB", creatDt: "2023/07/13" },
    { accActName: "Nike_觸及廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "IG", creatDt: "2023/07/05" },
    { accActName: "Nike_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "IG", creatDt: "2023/07/16" },
    { accActName: "Nike_搜尋廣告", exptSampleName: "範本名稱1", goalAds: "搜尋廣告", mediaType: "Google", creatDt: "2023/07/11" },
    { accActName: "Nike_影音廣告", exptSampleName: "範本名稱2", goalAds: "影音廣告", mediaType: "Google", creatDt: "2023/07/12" },
    { accActName: "Nike_購物廣告", exptSampleName: "範本名稱1", goalAds: "購物廣告", mediaType: "Google", creatDt: "2023/07/13" },
    { accActName: "家樂福_觸及廣告", exptSampleName: "範本名稱1", goalAds: "觸及廣告", mediaType: "FB", creatDt: "2023/07/12" },
    { accActName: "家樂福_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "FB", creatDt: "2023/07/13" },
    { accActName: "家樂福_互動廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "FB", creatDt: "2023/07/14" },
    { accActName: "家樂福_觸及廣告", exptSampleName: "範本名稱3", goalAds: "互動廣告", mediaType: "IG", creatDt: "2023/07/15" },
    { accActName: "家樂福_流量廣告", exptSampleName: "範本名稱2", goalAds: "流量廣告", mediaType: "IG", creatDt: "2023/07/16" },
    { accActName: "家樂福_搜尋廣告", exptSampleName: "範本名稱1", goalAds: "搜尋廣告", mediaType: "Google", creatDt: "2023/07/11" },
    { accActName: "家樂福_影音廣告", exptSampleName: "範本名稱2", goalAds: "影音廣告", mediaType: "Google", creatDt: "2023/07/19" },
    { accActName: "家樂福_購物廣告", exptSampleName: "範本名稱1", goalAds: "購物廣告", mediaType: "Google", creatDt: "2023/07/18" },
  ]
  displayedColumns = ['accActName', 'exptSampleName', 'goalAds', 'mediaType','creatDt','func'];
  ngOnInit(): void {}
}
