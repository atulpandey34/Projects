"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Audit Report View Model
var AuditReportViewModel = /** @class */ (function () {
    function AuditReportViewModel() {
        this.AuditReport = new AuditReport();
    }
    return AuditReportViewModel;
}());
exports.AuditReportViewModel = AuditReportViewModel;
var AuditReport = /** @class */ (function () {
    function AuditReport() {
        this.AuditReportSubjectList = [];
    }
    return AuditReport;
}());
exports.AuditReport = AuditReport;
var AuditReportSubject = /** @class */ (function () {
    function AuditReportSubject() {
        this.AuditSubjectReviewList = []; //List of Auditdates
        this.AuditReportSubjectQuestionResponseList = [];
    }
    return AuditReportSubject;
}());
exports.AuditReportSubject = AuditReportSubject;
var AuditReportSubjectQuestionResponse = /** @class */ (function () {
    function AuditReportSubjectQuestionResponse() {
    }
    return AuditReportSubjectQuestionResponse;
}());
exports.AuditReportSubjectQuestionResponse = AuditReportSubjectQuestionResponse;
// Audit Review Detail page model
var AuditSubjectReviewViewModel = /** @class */ (function () {
    function AuditSubjectReviewViewModel() {
        this.AuditSubjectQuestionResponses = [];
    }
    return AuditSubjectReviewViewModel;
}());
exports.AuditSubjectReviewViewModel = AuditSubjectReviewViewModel;
var AuditSubjectReviewQuestion = /** @class */ (function () {
    function AuditSubjectReviewQuestion() {
        this.Observation = false;
    }
    return AuditSubjectReviewQuestion;
}());
exports.AuditSubjectReviewQuestion = AuditSubjectReviewQuestion;
// Audit Detail page models
var AuditViewModel = /** @class */ (function () {
    function AuditViewModel() {
        this.AuditSubjects = [];
        this.AuditSubjectReviews = [];
    }
    return AuditViewModel;
}());
exports.AuditViewModel = AuditViewModel;
var AuditSubject = /** @class */ (function () {
    function AuditSubject() {
        this.IsTabActive = false;
        this.AuditSubjectQuestions = [];
    }
    return AuditSubject;
}());
exports.AuditSubject = AuditSubject;
var AuditSubjectQuestion = /** @class */ (function () {
    function AuditSubjectQuestion() {
    }
    return AuditSubjectQuestion;
}());
exports.AuditSubjectQuestion = AuditSubjectQuestion;
//Audit Subject list view model
var AuditSubjectListFilterModel = /** @class */ (function () {
    function AuditSubjectListFilterModel() {
    }
    return AuditSubjectListFilterModel;
}());
exports.AuditSubjectListFilterModel = AuditSubjectListFilterModel;
var AuditSubjectListViewResult = /** @class */ (function () {
    function AuditSubjectListViewResult() {
        this.AuditSubjectListResult = [];
    }
    return AuditSubjectListViewResult;
}());
exports.AuditSubjectListViewResult = AuditSubjectListViewResult;
var AuditSubjectListResult = /** @class */ (function () {
    function AuditSubjectListResult() {
    }
    return AuditSubjectListResult;
}());
exports.AuditSubjectListResult = AuditSubjectListResult;
// List page models
var AuditListFilterModel = /** @class */ (function () {
    function AuditListFilterModel() {
    }
    return AuditListFilterModel;
}());
exports.AuditListFilterModel = AuditListFilterModel;
var AuditListViewResult = /** @class */ (function () {
    function AuditListViewResult() {
        this.AuditListResult = [];
    }
    return AuditListViewResult;
}());
exports.AuditListViewResult = AuditListViewResult;
var AuditListResult = /** @class */ (function () {
    function AuditListResult() {
    }
    return AuditListResult;
}());
exports.AuditListResult = AuditListResult;
//# sourceMappingURL=audit.model.js.map