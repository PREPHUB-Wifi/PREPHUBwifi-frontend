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
        return this.http.get(ARCHIVE_END_POINT, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'server error trying to get all reports'); });
    };
    NameListService.prototype.sendNewNote = function (note) {
        console.log("In send New Note");
        var bodyString = JSON.stringify(note);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', 'localhost');
        var options = new RequestOptions({ headers: headers });
        return this.http.post(ARCHIVE_END_POINT, note, options).subscribe();
    };
    NameListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixJQUFNLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztBQUN6QyxJQUFNLGlCQUFpQixHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFJOUM7SUFDRSx5QkFDVSxJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUNqQixDQUFDO0lBR0osNkJBQUcsR0FBSDtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLGlCQUFpQixFQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzFELEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDakMsS0FBSyxDQUFDLFVBQUMsS0FBUyxJQUFLLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLHdDQUF3QyxDQUFDLEVBQWhGLENBQWdGLENBQUEsQ0FBQztJQUN6RyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLElBQVM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFyQlcsZUFBZTtRQUQ1QixpQkFBVSxFQUFFO3lDQUdLLFdBQUk7T0FGUixlQUFlLENBc0I1QjtJQUFELHNCQUFDO0NBdEJELEFBc0JDLElBQUE7QUF0QmEsMENBQWUiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODEnO1xuY29uc3QgQVJDSElWRV9FTkRfUE9JTlQgPSBCQVNFX1VSTCArICcvdXNlcnMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyAgTmFtZUxpc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxuICApIHt9XG5cbiAgLy9nZXQgYWxsIHVzZXJzXG4gIGdldCgpOiBPYnNlcnZhYmxlPE5vdGVzW10+IHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoIEFSQ0hJVkVfRU5EX1BPSU5ULHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdzZXJ2ZXIgZXJyb3IgdHJ5aW5nIHRvIGdldCBhbGwgcmVwb3J0cycpO1xuICB9XG5cbiAgc2VuZE5ld05vdGUobm90ZTogYW55KTogT2JzZXJ2YWJsZTxOb3Rlc1tdPiB7XG4gICAgY29uc29sZS5sb2coXCJJbiBzZW5kIE5ldyBOb3RlXCIpO1xuICAgIGxldCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobm90ZSk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTsgXG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICdsb2NhbGhvc3QnKTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoIEFSQ0hJVkVfRU5EX1BPSU5ULCBub3RlLCBvcHRpb25zKS5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
