"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Title = /** @class */ (function () {
    //Id:number;
    //name:string;
    function Title(id, name) {
        this.id = id;
        this.name = name;
    }
    return Title;
}());
exports.Title = Title;
var SubTitle = /** @class */ (function () {
    // Id:number;
    // titleId:number;
    // name:string;
    function SubTitle(id, titleId, name) {
        this.id = id;
        this.titleId = titleId;
        this.name = name;
    }
    return SubTitle;
}());
exports.SubTitle = SubTitle;
var EventDataModel = /** @class */ (function () {
    function EventDataModel() {
    }
    return EventDataModel;
}());
exports.EventDataModel = EventDataModel;
var EventAttendeeDataModel = /** @class */ (function () {
    function EventAttendeeDataModel() {
    }
    return EventAttendeeDataModel;
}());
exports.EventAttendeeDataModel = EventAttendeeDataModel;
var ActionDataModel = /** @class */ (function () {
    function ActionDataModel() {
        this.IsActionRequired = false;
        this.CorrectionStatusRequired = false;
    }
    return ActionDataModel;
}());
exports.ActionDataModel = ActionDataModel;
var ActionResponsiblePersonDataModel = /** @class */ (function () {
    function ActionResponsiblePersonDataModel() {
    }
    return ActionResponsiblePersonDataModel;
}());
exports.ActionResponsiblePersonDataModel = ActionResponsiblePersonDataModel;
var AgendaDataModel = /** @class */ (function () {
    function AgendaDataModel() {
    }
    return AgendaDataModel;
}());
exports.AgendaDataModel = AgendaDataModel;
var EventViewModel = /** @class */ (function () {
    function EventViewModel() {
        this.IsAppointmnet = false;
    }
    return EventViewModel;
}());
exports.EventViewModel = EventViewModel;
var ObjectiveViewModel = /** @class */ (function () {
    function ObjectiveViewModel() {
    }
    return ObjectiveViewModel;
}());
exports.ObjectiveViewModel = ObjectiveViewModel;
var EventFilterModel = /** @class */ (function () {
    function EventFilterModel() {
    }
    return EventFilterModel;
}());
exports.EventFilterModel = EventFilterModel;
var EventFilterViewModel = /** @class */ (function () {
    function EventFilterViewModel() {
    }
    return EventFilterViewModel;
}());
exports.EventFilterViewModel = EventFilterViewModel;
var LocationModel = /** @class */ (function () {
    function LocationModel() {
    }
    return LocationModel;
}());
exports.LocationModel = LocationModel;
var TitleModel = /** @class */ (function () {
    function TitleModel() {
    }
    return TitleModel;
}());
exports.TitleModel = TitleModel;
var SubTitleModel = /** @class */ (function () {
    function SubTitleModel() {
    }
    return SubTitleModel;
}());
exports.SubTitleModel = SubTitleModel;
var EventActionStatusModel = /** @class */ (function () {
    function EventActionStatusModel() {
    }
    return EventActionStatusModel;
}());
exports.EventActionStatusModel = EventActionStatusModel;
//# sourceMappingURL=formeventdata.js.map