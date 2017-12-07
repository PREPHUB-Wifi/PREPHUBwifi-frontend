import { Component, OnInit } from '@angular/core';
import { NameListService } from './home.service';
import { Note } from './home.module';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit { 
  
  prep_id: number = 1;
  newName: string = ''; 
  needHelp: string = ''; 
  notes: string = ''; 
  count: any = 0;
  errorMessage: string;
  names: any[] = []; 

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNotes();
  }

  /**
   * Handle the nameListService observable
   */
  getNotes() {
    this.nameListService.get()
      .subscribe(
        //names => this.names = names,
        (names) => {
          console.log("names: ");
          console.log(names);
          if (names) {
            this.names = names.reverse(); 
            var digits = (""+names[0].pckt_id).split(""); 
            digits.shift();
            var res = ''; 
            for(var d = 0; d < digits.length; d++){
                res += digits[d].toString();
            }
            this.count = parseInt(res) + 1;
            
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): any {
    var id_val = parseInt(this.prep_id.toString() + this.count.toString());
    var newNote:Note = {
      pckt_id: id_val,
      newName: this.newName,
      needHelp: this.needHelp,
      notes: this.notes,
      time: new Date().getTime()
    } 
    this.names.unshift(newNote);

    return this.nameListService.sendNewNote(newNote).subscribe(
      () => {},
      (err) => console.error("Error: ", err),
      () => {
        this.count +=  1;
        this.newName = '';
        this.needHelp = '';
        this.notes = '';
      });
  }

  updateNote(pckt_id,update_Name,update_help,notes){
    var index = -1
    for( var i = 0; i < this.names.length; i++ ) {
      if( this.names[i].pckt_id.toString() === pckt_id) { 
          console.log('found match');
          this.names[i].newName = update_Name;
          this.names[i].needHelp = update_help;
          this.names[i].notes = notes; 
          this.names[i].time = new Date().getTime();
          index = i;
      }
    } 
    console.log(this.names[index].toString() + ', ' + index)
    return this.nameListService.updateNote(this.names[index]).subscribe(() => {},(err) => console.error("Error: ", err));

  }

  removeItem(item){ 
    var index = -1;
    for( var i = 0; i < this.names.length; i++ ) {
      if( this.names[i].id === item.id ) {
          index = i;
          break;
       }
    }
    this.names.splice(index,1); 
    this.count -=  1;
    return this.nameListService.deleteNote(item).subscribe(() => {},
      (err) => console.error("Error: ", err));
    
  }
}
