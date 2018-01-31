
import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuditReportViewModel, AuditReport } from '../audit/audit.model';
import { AuditService } from '../audit/audit.service';

import { LocationModel} from '../calendar/formeventdata';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import * as html2canvas from "html2canvas";

@Component({
    selector: 'app-auditreport',
    templateUrl: './auditreport.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [AuditService, { provide: 'Window', useValue: window }],

})
export class AuditReportComponent implements OnInit {
    public apiEndPoint: string;
    AuditID: number = 0;
    AuditReportObj: AuditReport = new AuditReport();
    @ViewChild('closeDialog') closeDialog;

    constructor( private _AuditService: AuditService, private route: ActivatedRoute, private router: Router, private location: Location) {
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    ngOnInit() {
        this.onload();
    }

    onload() {
        this.route.params.subscribe(params => {
            this.AuditID = params['auditid'] as number; //log the value of id
        });

        this._AuditService.getAuditReport(this.AuditID).subscribe((res: AuditReportViewModel) => {
            this.AuditReportObj = res.AuditReport;
        });
    }
    downloadMaterial(id: number, fileName: string) {
        this._AuditService.downloadMaterial(id).subscribe(res => {
            FileSaver.saveAs(res, fileName);
        });
    }
    downloadPdf() {
        let doc = new jsPDF();

        // Add a title to your PDF
        doc.setFontSize(30);
        doc.text(12, 10, "Audit Report");

        // Create your table here (The dynamic table needs to be converted to canvas).
        let element = <HTMLScriptElement>document.getElementsByClassName("auditreport")[0];
        html2canvas(element)
            .then((canvas: any) => {
                doc.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 5, 20, doc.internal.pageSize.width-10, element.offsetHeight / 5);
                doc.save(`Report-${Date.now()}.pdf`);
            });
    }
}


