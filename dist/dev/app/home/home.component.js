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
var home_service_1 = require("./home.service");
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = '';
        this.needHelp = '';
        this.notes = '';
        this.names = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    HomeComponent.prototype.getNames = function () {
        var _this = this;
        this.nameListService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.addName = function () {
        var newNote = { "newName": this.newName, "needHelp": this.needHelp, "notes": this.notes };
        this.nameListService.sendNewNote(newNote);
        this.names.push([this.newName, this.needHelp, this.notes, new Date()]);
        this.newName = '';
        this.needHelp = '';
        this.notes = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        }),
        __metadata("design:paramtypes", [home_service_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELCtDQUFpRDtBQVdqRDtJQWNFLHVCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFabkQsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsVUFBSyxHQUFVLEVBQUUsQ0FBQztJQVFvQyxDQUFDO0lBS3ZELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUtELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO2FBQ3ZCLFNBQVMsQ0FDUixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUN4QyxDQUFDO0lBQ04sQ0FBQztJQU1ELCtCQUFPLEdBQVA7UUFFRSxJQUFJLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBRSxPQUFPLENBQUMsQ0FBQztRQUVySSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBL0NVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7eUNBZW9DLDhCQUFlO09BZHhDLGFBQWEsQ0FpRHpCO0lBQUQsb0JBQUM7Q0FqREQsQUFpREMsSUFBQTtBQWpEWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuL2hvbWUuc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuZXdOYW1lOiBzdHJpbmcgPSAnJzsgXG4gIG5lZWRIZWxwOiBzdHJpbmcgPSAnJzsgXG4gIG5vdGVzOiBzdHJpbmcgPSAnJztcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIG5hbWVzOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXG4gICAqIE5hbWVMaXN0U2VydmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldE5hbWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHRoZSBuYW1lTGlzdFNlcnZpY2Ugb2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0TmFtZXMoKSB7XG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0KClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIG5hbWVzID0+IHRoaXMubmFtZXMgPSBuYW1lcyxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2hlcyBhIG5ldyBuYW1lIG9udG8gdGhlIG5hbWVzIGFycmF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgKi9cbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBpbXBsZW1lbnQgbmFtZUxpc3RTZXJ2aWNlLnBvc3QgXG4gICAgbGV0IG5ld05vdGUgPSB7IFwibmV3TmFtZVwiOiB0aGlzLm5ld05hbWUsIFwibmVlZEhlbHBcIjogdGhpcy5uZWVkSGVscCwgXCJub3Rlc1wiOiB0aGlzLm5vdGVzfTsgdGhpcy5uYW1lTGlzdFNlcnZpY2Uuc2VuZE5ld05vdGUoIG5ld05vdGUpO1xuXG4gICAgdGhpcy5uYW1lcy5wdXNoKFt0aGlzLm5ld05hbWUsdGhpcy5uZWVkSGVscCx0aGlzLm5vdGVzLCBuZXcgRGF0ZSgpXSk7XG4gICAgdGhpcy5uZXdOYW1lID0gJyc7IFxuICAgIHRoaXMubmVlZEhlbHAgPSAnJzsgXG4gICAgdGhpcy5ub3RlcyA9ICcnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=
