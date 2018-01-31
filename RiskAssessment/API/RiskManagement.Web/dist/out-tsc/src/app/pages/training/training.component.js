"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var training_service_1 = require("./training.service");
var training_model_1 = require("./training.model");
var assignment_service_1 = require("../assignment/assignment.service");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var user_service_1 = require("../user/user.service");
var environment_1 = require("../../../environments/environment");
var FileSaver = require("file-saver");
var apiURL = environment_1.environment.apiEndpoint;
var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(_UserService, _assignmentService, _masterDataService, _trainingService, router, location, _fb, route) {
        this._UserService = _UserService;
        this._assignmentService = _assignmentService;
        this._masterDataService = _masterDataService;
        this._trainingService = _trainingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.trainingId = 0;
        this.disableTabSchedule = true;
        this.usersOptions = [];
        this.rolesOptions = [];
        this.trainersList = [];
        this.assignmentList = [];
        this.responsiblePersonTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.responsiblePersonSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '300px'
        };
        this.rolesTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.rolesSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '300px'
        };
        this.scheduleListData = [];
        this.totalScheduleRecords = 0;
        this.trainingScheduleUserList = [];
        // Material List
        this.trainingMaterialList = [];
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    TrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addhtmltoform(new training_model_1.TrainingViewModel());
        this.addTrainingMaterialHtmlToForm(new training_model_1.TrainingMaterialViewModel());
        this.addTrainingScheduleHtmlToForm(new training_model_1.TrainingScheduleViewModel());
        this.EnableDisableTrainingEvent(2);
        this.trainingTypeUser.nativeElement.checked = true;
        this._assignmentService.getAllAssignment().subscribe(function (res) {
            _this.assignmentList = res;
        });
        this._masterDataService.getUserList().subscribe(function (res) {
            var compare = function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                var comparison = 0;
                if (nameA > nameB) {
                    comparison = 1;
                }
                else if (nameA < nameB) {
                    comparison = -1;
                }
                return comparison;
            };
            res.sort(compare);
            _this.usersOptions = res;
            _this.trainersList = res;
        });
        this._UserService.getRoleMultipleList().subscribe(function (res) {
            _this.rolesOptions = res;
        });
        this.userDropdown.disabled = true;
        this.roleDropdown.disabled = true;
        this.route.params.subscribe(function (params) {
            _this.trainingId = params['id']; //log the value of id
        });
        if (this.trainingId > 0) {
            this.getTrainingScheduleListData();
            this._trainingService.getTraining(this.trainingId).subscribe(function (res) {
                _this.EnableDisableTrainingEvent(res.TrainingType);
                _this.addhtmltoform(res);
                if (res.TrainingType == 1) {
                    _this.trainingTypeEvent.nativeElement.checked = true;
                }
                else {
                    _this.trainingTypeUser.nativeElement.checked = true;
                }
                _this.EnableDisableTrainingEvent(res.TrainingType);
                _this.disableTabSchedule = false;
                _this.getMaterialListData();
                _this._assignmentService.getAssignment(res.AssignmentID).subscribe(function (res) {
                    _this.assignmentList.push(res);
                });
            });
        }
    };
    TrainingComponent.prototype.EnableDisableAssignmentDropDown = function () {
        if (this.assigmentResuiredCheckBox.nativeElement.checked == true) {
            this.assignmentDropDown.nativeElement.disabled = false;
        }
        else {
            this.assignmentDropDown.nativeElement.disabled = true;
            this.assignmentDropDown.nativeElement.value = '0';
        }
    };
    TrainingComponent.prototype.addhtmltoform = function (model) {
        this.myForm = this._fb.group({
            TrainingId: [model.TrainingId],
            TrainingNeed: new forms_1.FormControl(model.TrainingNeed, [forms_1.Validators.required]),
            TrainerRequired: [model.TrainerRequired],
            TrainingType: [model.TrainingType],
            TrainingEventID: new forms_1.FormControl(model.TrainingEventID),
            IsAssignmentRequired: [model.IsAssignmentRequired],
            AssignmentID: [model.AssignmentID],
            Active: [model.Active],
            YouTubeLink: [model.YouTubeLink],
        });
    };
    TrainingComponent.prototype.addTrainingMaterialHtmlToForm = function (model) {
        this.materialForm = this._fb.group({
            TrainingMaterialId: [model.TrainingMaterialId],
            YouTubeLink: [model.YouTubeLink],
            FilePath: [model.FilePath],
            FileName: [model.FileName],
            TrainingId: [this.trainingId],
            FileExtension: [model.FileExtension],
            File: [''],
        });
    };
    TrainingComponent.prototype.addTrainingScheduleHtmlToForm = function (model) {
        this.scheduleForm = this._fb.group({
            TrainingScheduleId: [model.TrainingScheduleId],
            TrainingId: [this.trainingId],
            StartDateStruct: [{ year: new Date(model.StartDate).getFullYear(), month: new Date(model.StartDate).getMonth() + 1, day: new Date(model.StartDate).getDate() }, forms_1.Validators.required],
            EndDateStruct: [{ year: new Date(model.EndDate).getFullYear(), month: new Date(model.EndDate).getMonth() + 1, day: new Date(model.EndDate).getDate() }, forms_1.Validators.required],
            Trainer: [model.Trainer, forms_1.Validators.required],
            Users: [model.Users],
            Roles: [model.Roles],
        });
    };
    TrainingComponent.prototype.SaveTraining = function (model) {
        var _this = this;
        model.TrainingId = this.trainingId;
        this._trainingService.addUpdateTraining(model).subscribe(function (res) {
            _this.trainingId = res;
            //this.divMaterial.nativeElement.hidden = true;
            _this.getMaterialListData();
            _this.disableTabSchedule = false;
            _this.saveMaterial();
            _this.youtubelinktextbox.nativeElement.value = '';
            _this.router.navigate(['/pages/training/' + res.toString()]);
        });
    };
    TrainingComponent.prototype.EnableDisableTrainingEvent = function (value) {
        this.dropDownTrainingEvent.nativeElement.value = 0;
        if (value == 1) {
            this.dropDownTrainingEvent.nativeElement.disabled = false;
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = true;
            this.roleDropdown.disabled = true;
        }
        else {
            this.dropDownTrainingEvent.nativeElement.disabled = true;
            this.assignedToTrainee.nativeElement.checked = true;
            this.EnableDisableAssignedTo(1);
        }
    };
    TrainingComponent.prototype.EnableDisableAssignedTo = function (value) {
        if (value == 1) {
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = false;
            this.roleDropdown.disabled = true;
        }
        else {
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = true;
            this.roleDropdown.disabled = false;
        }
    };
    TrainingComponent.prototype.saveSchedule = function (data) {
        var _this = this;
        data.TrainingId = this.trainingId;
        data.StartDate = new Date(data.StartDateStruct.year, data.StartDateStruct.month - 1, data.StartDateStruct.day).toLocaleDateString();
        data.EndDate = new Date(data.EndDateStruct.year, data.EndDateStruct.month - 1, data.EndDateStruct.day).toLocaleDateString();
        if (data.Users != null && data.Users.length > 0) {
            data.UserList = [];
            for (var _i = 0, _a = data.Users; _i < _a.length; _i++) {
                var d = _a[_i];
                var user = new training_model_1.TrainingScheduleUserViewModel();
                user.TrainingScheduleUserId = 0;
                user.UserId = d;
                user.TrainingScheduleId = data.TrainingScheduleId;
                data.UserList.push(user);
            }
        }
        if (data.Roles != null && data.Roles.length > 0) {
            data.RoleList = [];
            for (var _b = 0, _c = data.Roles; _b < _c.length; _b++) {
                var d = _c[_b];
                var role = new training_model_1.TrainingScheduleRoleViewModel();
                role.TrainingScheduleRoleId = 0;
                role.RoleId = d;
                role.TrainingScheduleId = data.TrainingScheduleId;
                data.RoleList.push(role);
            }
        }
        this._trainingService.addUpdateTrainingSchedule(data).subscribe(function (res) {
            _this.addTrainingScheduleHtmlToForm(new training_model_1.TrainingScheduleViewModel());
            _this.getTrainingScheduleListData();
        });
    };
    TrainingComponent.prototype.fileChange = function (input) {
        this.fileToUpload = input.target.files;
        //const reader = new FileReader();
        //if (input.files.length) {
        //    this.fileName = input.files[0].name;
        //    this.fileToUpload = input.files[0];
        //}
    };
    TrainingComponent.prototype.removeFile = function () {
        this.fileName = '';
        this.fileToUpload = null;
    };
    TrainingComponent.prototype.saveMaterial = function () {
        var _this = this;
        if (this.fileToUpload != null && this.fileToUpload != undefined && this.fileToUpload.length > 0) {
            var files = this.fileToUpload;
            this.fileToUpload = null;
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var _formData = new FormData();
                _formData.append("FileName", file.name);
                _formData.append("MyFile", file);
                _formData.append("YouTubeLink", '');
                _formData.append("TrainingId", this.trainingId.toString());
                var body = _formData;
                this._trainingService.uploadMaterial(body).subscribe(function (res) {
                    _this.getMaterialListData();
                });
            }
        }
    };
    TrainingComponent.prototype.getTrainingScheduleListData = function () {
        var _this = this;
        this.scheduleListData = [];
        this.totalScheduleRecords = 0;
        this._trainingService.getTrainingScheduleList(this.trainingId).subscribe(function (res) {
            _this.scheduleListData = res;
            _this.totalScheduleRecords = res.length;
        });
    };
    TrainingComponent.prototype.deleteSchedule = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this training schedule ?")) {
            this._trainingService.deleteTrainingSchedule(event.TrainingScheduleId).subscribe(function (res) {
                _this.getTrainingScheduleListData();
            });
        }
    };
    TrainingComponent.prototype.getTrainingScheduleUserList = function (id) {
        var _this = this;
        this.trainingScheduleUserList = [];
        this._trainingService.getTrainingScheduleUserList(id).subscribe(function (res) {
            _this.trainingScheduleUserList = res;
        });
    };
    TrainingComponent.prototype.getMaterialListData = function () {
        var _this = this;
        this.trainingMaterialList = [];
        this._trainingService.getTrainingMaterialList(this.trainingId).subscribe(function (res) {
            _this.trainingMaterialList = res;
        });
    };
    TrainingComponent.prototype.deleteMaterial = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this material ?")) {
            this._trainingService.deleteTrainingMaterial(event.TrainingMaterialId).subscribe(function (res) {
                _this.getMaterialListData();
            });
        }
    };
    TrainingComponent.prototype.downloadMaterial = function (id, fileName) {
        debugger;
        this._trainingService.downloadMaterial(id).subscribe(function (res) {
            FileSaver.saveAs(res, fileName);
        });
    };
    __decorate([
        core_1.ViewChild('assigmentResuiredCheckBox'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "assigmentResuiredCheckBox", void 0);
    __decorate([
        core_1.ViewChild('dropDownTrainingEvent'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "dropDownTrainingEvent", void 0);
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "closeDialog", void 0);
    __decorate([
        core_1.ViewChild('assignmentDropDown'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "assignmentDropDown", void 0);
    __decorate([
        core_1.ViewChild('youtubelinktextbox'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "youtubelinktextbox", void 0);
    __decorate([
        core_1.ViewChild('trainingTypeEvent'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "trainingTypeEvent", void 0);
    __decorate([
        core_1.ViewChild('trainingTypeUser'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "trainingTypeUser", void 0);
    __decorate([
        core_1.ViewChild('assignedToTrainee'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "assignedToTrainee", void 0);
    __decorate([
        core_1.ViewChild('userDropdown'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "userDropdown", void 0);
    __decorate([
        core_1.ViewChild('roleDropdown'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "roleDropdown", void 0);
    __decorate([
        core_1.ViewChild('iframeDownload'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "iframeDownload", void 0);
    TrainingComponent = __decorate([
        core_1.Component({
            selector: 'app-training-component',
            templateUrl: './training.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './training.component.css'
            ],
            providers: [training_service_1.TrainingService, assignment_service_1.AssignmentService, Mastereventdata_1.MasterEventDataService, user_service_1.UserService],
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, assignment_service_1.AssignmentService, Mastereventdata_1.MasterEventDataService, training_service_1.TrainingService, router_1.Router, common_1.Location, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], TrainingComponent);
    return TrainingComponent;
}());
exports.TrainingComponent = TrainingComponent;
//# sourceMappingURL=training.component.js.map