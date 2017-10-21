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
var name_list_service_1 = require("../shared/name-list/name-list.service");
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
        __metadata("design:paramtypes", [name_list_service_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF3RTtBQVd4RTtJQWNFLHVCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFabkQsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsVUFBSyxHQUFVLEVBQUUsQ0FBQztJQVFvQyxDQUFDO0lBS3ZELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUtELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO2FBQ3ZCLFNBQVMsQ0FDUixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUN4QyxDQUFDO0lBQ04sQ0FBQztJQU1ELCtCQUFPLEdBQVA7UUFHRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBOUNVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7eUNBZW9DLG1DQUFlO09BZHhDLGFBQWEsQ0FnRHpCO0lBQUQsb0JBQUM7Q0FoREQsQUFnREMsSUFBQTtBQWhEWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG5ld05hbWU6IHN0cmluZyA9ICcnOyBcbiAgbmVlZEhlbHA6IHN0cmluZyA9ICcnOyBcbiAgbm90ZXM6IHN0cmluZyA9ICcnO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgbmFtZXM6IGFueVtdID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIEhvbWVDb21wb25lbnQgd2l0aCB0aGUgaW5qZWN0ZWRcbiAgICogTmFtZUxpc3RTZXJ2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge05hbWVMaXN0U2VydmljZX0gbmFtZUxpc3RTZXJ2aWNlIC0gVGhlIGluamVjdGVkIE5hbWVMaXN0U2VydmljZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lcyBPbkluaXRcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0TmFtZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgdGhlIG5hbWVMaXN0U2VydmljZSBvYnNlcnZhYmxlXG4gICAqL1xuICBnZXROYW1lcygpIHtcbiAgICB0aGlzLm5hbWVMaXN0U2VydmljZS5nZXQoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgbmFtZXMgPT4gdGhpcy5uYW1lcyA9IG5hbWVzLFxuICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUHVzaGVzIGEgbmV3IG5hbWUgb250byB0aGUgbmFtZXMgYXJyYXlcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAqL1xuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE86IGltcGxlbWVudCBuYW1lTGlzdFNlcnZpY2UucG9zdCBcblxuICAgIHRoaXMubmFtZXMucHVzaChbdGhpcy5uZXdOYW1lLHRoaXMubmVlZEhlbHAsdGhpcy5ub3RlcywgbmV3IERhdGUoKV0pO1xuICAgIHRoaXMubmV3TmFtZSA9ICcnOyBcbiAgICB0aGlzLm5lZWRIZWxwID0gJyc7IFxuICAgIHRoaXMubm90ZXMgPSAnJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuIl19
