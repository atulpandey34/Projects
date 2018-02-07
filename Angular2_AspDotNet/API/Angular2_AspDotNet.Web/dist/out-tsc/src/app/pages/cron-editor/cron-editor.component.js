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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var enums_1 = require("./enums");
var CronGenComponent = /** @class */ (function () {
    function CronGenComponent() {
        // the name is an Angular convention, @Input variable name + "Change" suffix
        this.cronChange = new core_1.EventEmitter();
        this.selectOptions = this.getSelectOptions();
    }
    Object.defineProperty(CronGenComponent.prototype, "cron", {
        get: function () { return this.localCron; },
        set: function (value) {
            this.localCron = value;
            this.cronChange.emit(this.localCron);
        },
        enumerable: true,
        configurable: true
    });
    CronGenComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.state = this.getDefaultState();
                this.handleModelChange(this.cron);
                return [2 /*return*/];
            });
        });
    };
    CronGenComponent.prototype.ngOnChanges = function (changes) {
        return __awaiter(this, void 0, void 0, function () {
            var newCron;
            return __generator(this, function (_a) {
                newCron = changes["cron"];
                if (newCron && !newCron.firstChange) {
                    this.handleModelChange(this.cron);
                }
                return [2 /*return*/];
            });
        });
    };
    CronGenComponent.prototype.setActiveTab = function (tab) {
        if (!this.disabled) {
            this.activeTab = tab;
            this.regenerateCron();
        }
    };
    CronGenComponent.prototype.dayDisplay = function (day) {
        return enums_1.Days[day];
    };
    CronGenComponent.prototype.monthWeekDisplay = function (monthWeekNumber) {
        return enums_1.MonthWeeks[monthWeekNumber];
    };
    CronGenComponent.prototype.monthDisplay = function (month) {
        return enums_1.Months[month];
    };
    CronGenComponent.prototype.monthDayDisplay = function (month) {
        if (month === "L") {
            return "Last Day";
        }
        else if (month === "LW") {
            return "Last Weekday";
        }
        else if (month === "1W") {
            return "First Weekday";
        }
        else {
            return "" + month + this.getOrdinalSuffix(month) + " day";
        }
    };
    CronGenComponent.prototype.regenerateCron = function () {
        var _this = this;
        this.isDirty = true;
        switch (this.activeTab) {
            case "minutes":
                this.cron = this.state.minutes.seconds + " 0/" + this.state.minutes.minutes + " * 1/1 * ? *";
                break;
            case "hourly":
                this.cron = this.state.hourly.seconds + " " + this.state.hourly.minutes + " 0/" + this.state.hourly.hours + " 1/1 * ? *";
                break;
            case "daily":
                switch (this.state.daily.subTab) {
                    case "everyDays":
                        this.cron = this.state.daily.everyDays.seconds + " " + this.state.daily.everyDays.minutes + " " + this.hourToCron(this.state.daily.everyDays.hours, this.state.daily.everyDays.hourType) + " 1/" + this.state.daily.everyDays.days + " * ? *";
                        break;
                    case "everyWeekDay":
                        this.cron = this.state.daily.everyWeekDay.seconds + " " + this.state.daily.everyWeekDay.minutes + " " + this.hourToCron(this.state.daily.everyWeekDay.hours, this.state.daily.everyWeekDay.hourType) + " ? * MON-FRI *";
                        break;
                    default:
                        throw "Invalid cron daily subtab selection";
                }
                break;
            case "weekly":
                var days = this.selectOptions.days
                    .reduce(function (acc, day) { return _this.state.weekly[day] ? acc.concat([day]) : acc; }, [])
                    .join(",");
                this.cron = this.state.weekly.seconds + " " + this.state.weekly.minutes + " " + this.hourToCron(this.state.weekly.hours, this.state.weekly.hourType) + " ? * " + days + " *";
                break;
            case "monthly":
                switch (this.state.monthly.subTab) {
                    case "specificDay":
                        this.cron = this.state.monthly.specificDay.seconds + " " + this.state.monthly.specificDay.minutes + " " + this.hourToCron(this.state.monthly.specificDay.hours, this.state.monthly.specificDay.hourType) + " " + this.state.monthly.specificDay.day + " 1/" + this.state.monthly.specificDay.months + " ? *";
                        break;
                    case "specificWeekDay":
                        this.cron = this.state.monthly.specificWeekDay.seconds + " " + this.state.monthly.specificWeekDay.minutes + " " + this.hourToCron(this.state.monthly.specificWeekDay.hours, this.state.monthly.specificWeekDay.hourType) + " ? 1/" + this.state.monthly.specificWeekDay.months + " " + this.state.monthly.specificWeekDay.day + this.state.monthly.specificWeekDay.monthWeek + " *";
                        break;
                    default:
                        throw "Invalid cron monthly subtab selection";
                }
                break;
            case "yearly":
                switch (this.state.yearly.subTab) {
                    case "specificMonthDay":
                        this.cron = this.state.yearly.specificMonthDay.seconds + " " + this.state.yearly.specificMonthDay.minutes + " " + this.hourToCron(this.state.yearly.specificMonthDay.hours, this.state.yearly.specificMonthDay.hourType) + " " + this.state.yearly.specificMonthDay.day + " " + this.state.yearly.specificMonthDay.month + " ? *";
                        break;
                    case "specificMonthWeek":
                        this.cron = this.state.yearly.specificMonthWeek.seconds + " " + this.state.yearly.specificMonthWeek.minutes + " " + this.hourToCron(this.state.yearly.specificMonthWeek.hours, this.state.yearly.specificMonthWeek.hourType) + " ? " + this.state.yearly.specificMonthWeek.month + " " + this.state.yearly.specificMonthWeek.day + this.state.yearly.specificMonthWeek.monthWeek + " *";
                        break;
                    default:
                        throw "Invalid cron yearly subtab selection";
                }
                break;
            case "advanced":
                this.cron = this.state.advanced.expression;
                break;
            default:
                throw "Invalid cron active tab selection";
        }
    };
    CronGenComponent.prototype.getAmPmHour = function (hour) {
        return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
    };
    CronGenComponent.prototype.getHourType = function (hour) {
        return this.options.use24HourTime ? undefined : (hour >= 12 ? "PM" : "AM");
    };
    CronGenComponent.prototype.hourToCron = function (hour, hourType) {
        if (this.options.use24HourTime) {
            return hour;
        }
        else {
            return hourType === "AM" ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
        }
    };
    CronGenComponent.prototype.handleModelChange = function (cron) {
        var _this = this;
        if (this.isDirty) {
            this.isDirty = false;
            return;
        }
        else {
            this.isDirty = false;
        }
        if (!this.cronIsValid(cron)) {
            throw "Invalid cron expression, there must be 6 or 7 segments";
        }
        var _a = cron.split(" "), seconds = _a[0], minutes = _a[1], hours = _a[2], dayOfMonth = _a[3], month = _a[4], dayOfWeek = _a[5];
        if (cron.match(/\d+ 0\/\d+ \* 1\/1 \* \? \*/)) {
            this.activeTab = "minutes";
            this.state.minutes.minutes = parseInt(minutes.substring(2));
            this.state.minutes.seconds = parseInt(seconds);
        }
        else if (cron.match(/\d+ \d+ 0\/\d+ 1\/1 \* \? \*/)) {
            this.activeTab = "hourly";
            this.state.hourly.hours = parseInt(hours.substring(2));
            this.state.hourly.minutes = parseInt(minutes);
            this.state.hourly.seconds = parseInt(seconds);
        }
        else if (cron.match(/\d+ \d+ \d+ 1\/\d+ \* \? \*/)) {
            this.activeTab = "daily";
            this.state.daily.subTab = "everyDays";
            this.state.daily.everyDays.days = parseInt(dayOfMonth.substring(2));
            var parsedHours = parseInt(hours);
            this.state.daily.everyDays.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyDays.hourType = this.getHourType(parsedHours);
            this.state.daily.everyDays.minutes = parseInt(minutes);
            this.state.daily.everyDays.seconds = parseInt(seconds);
        }
        else if (cron.match(/\d+ \d+ \d+ \? \* MON-FRI \*/)) {
            this.activeTab = "daily";
            this.state.daily.subTab = "everyWeekDay";
            var parsedHours = parseInt(hours);
            this.state.daily.everyWeekDay.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyWeekDay.hourType = this.getHourType(parsedHours);
            this.state.daily.everyWeekDay.minutes = parseInt(minutes);
            this.state.daily.everyWeekDay.seconds = parseInt(seconds);
        }
        else if (cron.match(/\d+ \d+ \d+ \? \* (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))* \*/)) {
            this.activeTab = "weekly";
            this.selectOptions.days.forEach(function (weekDay) { return _this.state.weekly[weekDay] = false; });
            dayOfWeek.split(",").forEach(function (weekDay) { return _this.state.weekly[weekDay] = true; });
            var parsedHours = parseInt(hours);
            this.state.weekly.hours = this.getAmPmHour(parsedHours);
            this.state.weekly.hourType = this.getHourType(parsedHours);
            this.state.weekly.minutes = parseInt(minutes);
            this.state.weekly.seconds = parseInt(seconds);
        }
        else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) 1\/\d+ \? \*/)) {
            this.activeTab = "monthly";
            this.state.monthly.subTab = "specificDay";
            this.state.monthly.specificDay.day = dayOfMonth;
            this.state.monthly.specificDay.months = parseInt(month.substring(2));
            var parsedHours = parseInt(hours);
            this.state.monthly.specificDay.hours = this.getAmPmHour(parsedHours);
            this.state.monthly.specificDay.hourType = this.getHourType(parsedHours);
            this.state.monthly.specificDay.minutes = parseInt(minutes);
            this.state.monthly.specificDay.seconds = parseInt(seconds);
        }
        else if (cron.match(/\d+ \d+ \d+ \? 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            var day = dayOfWeek.substr(0, 3);
            var monthWeek = dayOfWeek.substr(3);
            this.activeTab = "monthly";
            this.state.monthly.subTab = "specificWeekDay";
            this.state.monthly.specificWeekDay.monthWeek = monthWeek;
            this.state.monthly.specificWeekDay.day = day;
            this.state.monthly.specificWeekDay.months = parseInt(month.substring(2));
            var parsedHours = parseInt(hours);
            this.state.monthly.specificWeekDay.hours = this.getAmPmHour(parsedHours);
            this.state.monthly.specificWeekDay.hourType = this.getHourType(parsedHours);
            this.state.monthly.specificWeekDay.minutes = parseInt(minutes);
            this.state.monthly.specificWeekDay.seconds = parseInt(seconds);
        }
        else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) \d+ \? \*/)) {
            this.activeTab = "yearly";
            this.state.yearly.subTab = "specificMonthDay";
            this.state.yearly.specificMonthDay.month = parseInt(month);
            this.state.yearly.specificMonthDay.day = dayOfMonth;
            var parsedHours = parseInt(hours);
            this.state.yearly.specificMonthDay.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthDay.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthDay.minutes = parseInt(minutes);
            this.state.yearly.specificMonthDay.seconds = parseInt(seconds);
        }
        else if (cron.match(/\d+ \d+ \d+ \? \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            var day = dayOfWeek.substr(0, 3);
            var monthWeek = dayOfWeek.substr(3);
            this.activeTab = "yearly";
            this.state.yearly.subTab = "specificMonthWeek";
            this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
            this.state.yearly.specificMonthWeek.day = day;
            this.state.yearly.specificMonthWeek.month = parseInt(month);
            var parsedHours = parseInt(hours);
            this.state.yearly.specificMonthWeek.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthWeek.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthWeek.minutes = parseInt(minutes);
            this.state.yearly.specificMonthWeek.seconds = parseInt(seconds);
        }
        else {
            this.activeTab = "advanced";
            this.state.advanced.expression = cron;
        }
    };
    CronGenComponent.prototype.cronIsValid = function (cron) {
        if (cron) {
            var cronParts = cron.split(" ");
            return cronParts.length === 6 || cronParts.length === 7;
        }
        return false;
    };
    CronGenComponent.prototype.getDefaultState = function () {
        var _a = this.options.defaultTime.split(":").map(Number), defaultHours = _a[0], defaultMinutes = _a[1], defaultSeconds = _a[2];
        return {
            minutes: {
                minutes: 1,
                seconds: 0
            },
            hourly: {
                hours: 1,
                minutes: 0,
                seconds: 0
            },
            daily: {
                subTab: "everyDays",
                everyDays: {
                    days: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                everyWeekDay: {
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            weekly: {
                MON: true,
                TUE: false,
                WED: false,
                THU: false,
                FRI: false,
                SAT: false,
                SUN: false,
                hours: this.getAmPmHour(defaultHours),
                minutes: defaultMinutes,
                seconds: defaultSeconds,
                hourType: this.getHourType(defaultHours)
            },
            monthly: {
                subTab: "specificDay",
                specificDay: {
                    day: "1",
                    months: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                specificWeekDay: {
                    monthWeek: "#1",
                    day: "MON",
                    months: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            yearly: {
                subTab: "specificMonthDay",
                specificMonthDay: {
                    month: 1,
                    day: "1",
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                specificMonthWeek: {
                    monthWeek: "#1",
                    day: "MON",
                    month: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            advanced: {
                expression: "0 15 10 L-2 * ?"
            }
        };
    };
    CronGenComponent.prototype.getOrdinalSuffix = function (value) {
        if (value.length > 1) {
            var secondToLastDigit = value.charAt(value.length - 2);
            if (secondToLastDigit === "1") {
                return "th";
            }
        }
        var lastDigit = value.charAt(value.length - 1);
        switch (lastDigit) {
            case "1":
                return "st";
            case "2":
                return "nd";
            case "3":
                return "rd";
            default:
                return "th";
        }
    };
    CronGenComponent.prototype.getSelectOptions = function () {
        return {
            months: this.getRange(1, 12),
            monthWeeks: ["#1", "#2", "#3", "#4", "#5", "L"],
            days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
            minutes: this.getRange(0, 59),
            fullMinutes: this.getRange(0, 59),
            seconds: this.getRange(0, 59),
            hours: this.getRange(1, 23),
            monthDays: this.getRange(1, 31),
            monthDaysWithLasts: ["1W"].concat(this.getRange(1, 31).map(String).slice(), ["LW", "L"]),
            hourTypes: ["AM", "PM"]
        };
    };
    CronGenComponent.prototype.getRange = function (start, end) {
        var length = end - start + 1;
        return Array.apply(null, Array(length)).map(function (_, i) { return i + start; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CronGenComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CronGenComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CronGenComponent.prototype, "cron", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CronGenComponent.prototype, "cronChange", void 0);
    CronGenComponent = __decorate([
        core_1.Component({
            selector: "cron-editor",
            templateUrl: "./cron-editor.template.html",
            encapsulation: core_2.ViewEncapsulation.Emulated,
            styleUrls: ["../cron-editor/cron-editor.component.css"]
        })
    ], CronGenComponent);
    return CronGenComponent;
}());
exports.CronGenComponent = CronGenComponent;
//# sourceMappingURL=cron-editor.component.js.map