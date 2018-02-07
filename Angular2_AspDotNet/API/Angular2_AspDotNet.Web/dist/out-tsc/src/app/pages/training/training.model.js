"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TrainingViewModel = /** @class */ (function () {
    function TrainingViewModel() {
        this.TrainingType = 2;
    }
    return TrainingViewModel;
}());
exports.TrainingViewModel = TrainingViewModel;
var TrainingMaterialViewModel = /** @class */ (function () {
    function TrainingMaterialViewModel() {
    }
    return TrainingMaterialViewModel;
}());
exports.TrainingMaterialViewModel = TrainingMaterialViewModel;
var TrainingScheduleViewModel = /** @class */ (function () {
    function TrainingScheduleViewModel() {
        this.Users = [];
        this.Roles = [];
        this.UserList = [];
        this.RoleList = [];
    }
    return TrainingScheduleViewModel;
}());
exports.TrainingScheduleViewModel = TrainingScheduleViewModel;
var TrainingScheduleUserViewModel = /** @class */ (function () {
    function TrainingScheduleUserViewModel() {
    }
    return TrainingScheduleUserViewModel;
}());
exports.TrainingScheduleUserViewModel = TrainingScheduleUserViewModel;
var TrainingScheduleRoleViewModel = /** @class */ (function () {
    function TrainingScheduleRoleViewModel() {
    }
    return TrainingScheduleRoleViewModel;
}());
exports.TrainingScheduleRoleViewModel = TrainingScheduleRoleViewModel;
var TrainingScheduleListViewModel = /** @class */ (function () {
    function TrainingScheduleListViewModel() {
    }
    return TrainingScheduleListViewModel;
}());
exports.TrainingScheduleListViewModel = TrainingScheduleListViewModel;
var TrainingScheduleUserListViewModel = /** @class */ (function () {
    function TrainingScheduleUserListViewModel() {
    }
    return TrainingScheduleUserListViewModel;
}());
exports.TrainingScheduleUserListViewModel = TrainingScheduleUserListViewModel;
var TrainingListFilterModel = /** @class */ (function () {
    function TrainingListFilterModel() {
    }
    return TrainingListFilterModel;
}());
exports.TrainingListFilterModel = TrainingListFilterModel;
var TrainingList = /** @class */ (function () {
    function TrainingList() {
    }
    return TrainingList;
}());
exports.TrainingList = TrainingList;
var TrainingListViewModel = /** @class */ (function () {
    function TrainingListViewModel() {
        this.TrainingList = [];
    }
    return TrainingListViewModel;
}());
exports.TrainingListViewModel = TrainingListViewModel;
var TrainingScheduleListByUserIdViewModel = /** @class */ (function () {
    function TrainingScheduleListByUserIdViewModel() {
    }
    return TrainingScheduleListByUserIdViewModel;
}());
exports.TrainingScheduleListByUserIdViewModel = TrainingScheduleListByUserIdViewModel;
var UserScheduleResultViewModel = /** @class */ (function () {
    function UserScheduleResultViewModel() {
    }
    return UserScheduleResultViewModel;
}());
exports.UserScheduleResultViewModel = UserScheduleResultViewModel;
var TraineeScheduleListByUserIdViewModel = /** @class */ (function () {
    function TraineeScheduleListByUserIdViewModel() {
    }
    return TraineeScheduleListByUserIdViewModel;
}());
exports.TraineeScheduleListByUserIdViewModel = TraineeScheduleListByUserIdViewModel;
var TrainingAssignmentAttemptViewModel = /** @class */ (function () {
    function TrainingAssignmentAttemptViewModel() {
    }
    return TrainingAssignmentAttemptViewModel;
}());
exports.TrainingAssignmentAttemptViewModel = TrainingAssignmentAttemptViewModel;
var ReportViewModel = /** @class */ (function () {
    function ReportViewModel() {
    }
    return ReportViewModel;
}());
exports.ReportViewModel = ReportViewModel;
var TrainingReportViewModel = /** @class */ (function () {
    function TrainingReportViewModel() {
    }
    return TrainingReportViewModel;
}());
exports.TrainingReportViewModel = TrainingReportViewModel;
var TrainingNeedListViewModel = /** @class */ (function () {
    function TrainingNeedListViewModel() {
    }
    return TrainingNeedListViewModel;
}());
exports.TrainingNeedListViewModel = TrainingNeedListViewModel;
var UserListViewModel = /** @class */ (function () {
    function UserListViewModel() {
    }
    return UserListViewModel;
}());
exports.UserListViewModel = UserListViewModel;
var TrainerReportViewModel = /** @class */ (function () {
    function TrainerReportViewModel() {
    }
    return TrainerReportViewModel;
}());
exports.TrainerReportViewModel = TrainerReportViewModel;
var TrainingUserReportViewModel = /** @class */ (function () {
    function TrainingUserReportViewModel() {
    }
    return TrainingUserReportViewModel;
}());
exports.TrainingUserReportViewModel = TrainingUserReportViewModel;
var BaseFilterModel = /** @class */ (function () {
    function BaseFilterModel() {
    }
    return BaseFilterModel;
}());
exports.BaseFilterModel = BaseFilterModel;
var TrainingReportFilterModel = /** @class */ (function (_super) {
    __extends(TrainingReportFilterModel, _super);
    function TrainingReportFilterModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrainingReportFilterModel;
}(BaseFilterModel));
exports.TrainingReportFilterModel = TrainingReportFilterModel;
var TrainerReportFilterModel = /** @class */ (function (_super) {
    __extends(TrainerReportFilterModel, _super);
    function TrainerReportFilterModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrainerReportFilterModel;
}(BaseFilterModel));
exports.TrainerReportFilterModel = TrainerReportFilterModel;
var TrainingUserReportFilterModel = /** @class */ (function (_super) {
    __extends(TrainingUserReportFilterModel, _super);
    function TrainingUserReportFilterModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrainingUserReportFilterModel;
}(BaseFilterModel));
exports.TrainingUserReportFilterModel = TrainingUserReportFilterModel;
//# sourceMappingURL=training.model.js.map