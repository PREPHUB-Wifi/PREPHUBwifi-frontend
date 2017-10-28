"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_service_1 = require("./home.service");
var HomeComponent = (function () {
    function HomeComponent() {
        this.newName = '';
        this.needHelp = '';
        this.notes = '';
        this.names = [];
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
constructor(public, nameListService, home_service_1.NameListService);
{ }
ngOnInit();
{
    this.getNotes();
}
getNotes();
{
    this.nameListService.get()
        .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
}
addName();
boolean;
{
    var newNote = {
        newName: this.newName,
        needHelp: this.needHelp,
        notes: this.notes,
        time: this.time
    };
    this.nameListService.sendNewNote(newNote);
    this.newName = '';
    this.needHelp = '';
    this.notes = '';
    return false;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxpQkEyRUE7O0FBM0VBLHNDQUFrRDtBQUNsRCwrQ0FBaUQ7QUFXakQ7SUFOQTtRQVFFLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLFVBQUssR0FBVSxFQUFFLENBQUM7SUFFbEIsQ0FGa0IsQUFFakI7SUFSVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO09BQ1csYUFBYSxDQU1OO0lBRWxCLG9CQUFDO0NBUkgsQUFNb0IsSUFBQTtBQU5QLHNDQUFhO0FBb0J4QixXQUFXLENBQUMsTUFBTSxFQUFDLGVBQWUsRUFBRSw4QkFBZSxDQUFDLENBQUE7QUFBQyxDQUFDLENBQUEsQ0FBQztBQUt2RCxRQUFRLEVBQUUsQ0FBQTtBQUFDLENBQUM7SUFDVixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQUtELFFBQVEsRUFBRSxDQUFBO0FBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO1NBQ3ZCLFNBQVMsQ0FDUixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUN4QyxDQUFDO0FBQ04sQ0FBQztBQU1ELE9BQU8sRUFBRSxDQUFBO0FBQUUsT0FBTyxDQUFBO0FBQUMsQ0FBQztJQUVsQixJQUFJLE9BQU8sR0FBVztRQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1FBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7S0FDZixDQUFBO0lBSUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUMiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi9ob21lLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbmV3TmFtZTogc3RyaW5nID0gJyc7IFxuICBuZWVkSGVscDogc3RyaW5nID0gJyc7IFxuICBub3Rlczogc3RyaW5nID0gJyc7XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBuYW1lczogYW55W10gPSBbXTtcblxuICBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gICAgbmV3TmFtZTogc3RyaW5nO1xuICAgIG5lZWRIZWxwOiBzdHJpbmc7XG4gICAgbm90ZXM6IHN0cmluZztcbiAgICB0aW1lOiBuZXcgRGF0ZSgpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXG4gICAqIE5hbWVMaXN0U2VydmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZUxpc3RTZXJ2aWNlOiBOYW1lTGlzdFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldE5vdGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHRoZSBuYW1lTGlzdFNlcnZpY2Ugb2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0Tm90ZXMoKSB7XG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0KClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIG5hbWVzID0+IHRoaXMubmFtZXMgPSBuYW1lcyxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2hlcyBhIG5ldyBuYW1lIG9udG8gdGhlIG5hbWVzIGFycmF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgKi9cbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBpbXBsZW1lbnQgbmFtZUxpc3RTZXJ2aWNlLnBvc3QgIFxuICAgIHZhciBuZXdOb3RlOk1lc3NhZ2UgPSB7IFxuICAgICBuZXdOYW1lOiB0aGlzLm5ld05hbWUsXG4gICAgIG5lZWRIZWxwOiB0aGlzLm5lZWRIZWxwLCBcbiAgICAgbm90ZXM6IHRoaXMubm90ZXMsXG4gICAgIHRpbWU6IHRoaXMudGltZVxuICAgIH0gXG4gICAgLy9sZXQgbmV3Tm90ZSA9IHsgXCJuZXdOYW1lXCI6IHRoaXMubmV3TmFtZSwgXCJuZWVkSGVscFwiOiB0aGlzLm5lZWRIZWxwLCBcIm5vdGVzXCI6IHRoaXMubm90ZXMsIFwidGltZVwiIDogLy9uZXcgRGF0ZSgpfTsgXG4gICAgLy90aGlzLm5hbWVzLnB1c2goW3RoaXMubmV3TmFtZSx0aGlzLm5lZWRIZWxwLHRoaXMubm90ZXMsIG5ldyBEYXRlKCldKTtcblxuICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLnNlbmROZXdOb3RlKG5ld05vdGUpOyBcbiAgICB0aGlzLm5ld05hbWUgPSAnJzsgXG4gICAgdGhpcy5uZWVkSGVscCA9ICcnOyBcbiAgICB0aGlzLm5vdGVzID0gJyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==
