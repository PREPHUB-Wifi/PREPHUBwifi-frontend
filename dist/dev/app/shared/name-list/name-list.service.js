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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
var NameListService = (function () {
    function NameListService(http) {
        this.http = http;
    }
    NameListService.prototype.get = function () {
        return this.http.get('assets/data.json')
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log('server data:', data); })
            .catch(this.handleError);
    };
    NameListService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    NameListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUErQztBQUMvQyw4Q0FBNkM7QUFDN0MsZ0NBQThCO0FBTTlCO0lBT0UseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQU1sQyw2QkFBRyxHQUFIO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsRUFBRSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQWpDLENBQWlDLENBQUM7YUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBS08scUNBQVcsR0FBbkIsVUFBcUIsS0FBVTtRQUc3QixJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFJLEtBQUssQ0FBQyxNQUFNLFdBQU0sS0FBSyxDQUFDLFVBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUE5QlUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQVFlLFdBQUk7T0FQbkIsZUFBZSxDQStCM0I7SUFBRCxzQkFBQztDQS9CRCxBQStCQyxJQUFBO0FBL0JZLDBDQUFlIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7ICAvLyBmb3IgZGVidWdnaW5nXG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cbiAgICogQHBhcmFtIHtIdHRwfSBodHRwIC0gVGhlIGluamVjdGVkIEh0dHAuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIEdFVCByZXF1ZXN0IGZvciB0aGUgSlNPTiByZXNvdXJjZS5cbiAgICogQHJldHVybiB7c3RyaW5nW119IFRoZSBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCByZXF1ZXN0LlxuICAgKi9cbiAgZ2V0KCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnYXNzZXRzL2RhdGEuanNvbicpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdzZXJ2ZXIgZGF0YTonLCBkYXRhKSkgIC8vIGRlYnVnXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgICogSGFuZGxlIEhUVFAgZXJyb3JcbiAgICAqL1xuICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XG4gICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICAvLyBXZSdkIGFsc28gZGlnIGRlZXBlciBpbnRvIHRoZSBlcnJvciB0byBnZXQgYSBiZXR0ZXIgbWVzc2FnZVxuICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gIH1cbn1cblxuIl19
