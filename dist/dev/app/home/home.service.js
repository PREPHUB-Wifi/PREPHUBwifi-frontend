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
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var BASE_URL = 'http://localhost:8081';
var ARCHIVE_END_POINT = BASE_URL + '/users';
var NameListService = (function () {
    function NameListService(http) {
        this.http = http;
    }
    NameListService.prototype.get = function () {
        var headers = new http_1.Headers();
        return this.http.get(ARCHIVE_END_POINT, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'server error trying to get all reports'); });
    };
    NameListService.prototype.sendNewNote = function (note) {
        console.log("In send New Note");
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Origin', 'localhost');
        return this.http.post(ARCHIVE_END_POINT, {
            body: note,
            headers: headers
        }).subscribe();
    };
    NameListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixJQUFNLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztBQUN6QyxJQUFNLGlCQUFpQixHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFJOUM7SUFDRSx5QkFDVSxJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUNqQixDQUFDO0lBR0osNkJBQUcsR0FBSDtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLGlCQUFpQixFQUNyQztZQUNFLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQ0Y7YUFDRSxHQUFHLENBQUMsVUFBQyxHQUFZLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2pDLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSx3Q0FBd0MsQ0FBQyxFQUFoRixDQUFnRixDQUFDLENBQUM7SUFFNUcsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxJQUFTO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLGlCQUFpQixFQUN0QztZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FDRixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUE5QlcsZUFBZTtRQUQ1QixpQkFBVSxFQUFFO3lDQUdLLFdBQUk7T0FGUixlQUFlLENBK0I1QjtJQUFELHNCQUFDO0NBL0JELEFBK0JDLElBQUE7QUEvQmEsMENBQWUiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODEnO1xuY29uc3QgQVJDSElWRV9FTkRfUE9JTlQgPSBCQVNFX1VSTCArICcvdXNlcnMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyAgTmFtZUxpc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxuICApIHt9XG5cbiAgLy9nZXQgYWxsIHVzZXJzXG4gIGdldCgpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCggQVJDSElWRV9FTkRfUE9JTlQsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgIH1cbiAgICApXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ3NlcnZlciBlcnJvciB0cnlpbmcgdG8gZ2V0IGFsbCByZXBvcnRzJykpO1xuXG4gIH1cblxuICBzZW5kTmV3Tm90ZShub3RlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluIHNlbmQgTmV3IE5vdGVcIik7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnbG9jYWxob3N0Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoIEFSQ0hJVkVfRU5EX1BPSU5ULFxuICAgICAge1xuICAgICAgICBib2R5OiBub3RlLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICB9XG4gICAgKS5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
