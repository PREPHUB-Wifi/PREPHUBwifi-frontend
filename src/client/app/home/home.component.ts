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
    this.count = 0;
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
            this.names = names;
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean { 
    var id_val = parseInt(this.prep_id.toString() + this.count.toString());
    var newNote:Note = {
     pckt_id: id_val,
     newName: this.newName,
     needHelp: this.needHelp,
     notes: this.notes,
     time: new Date().getTime()
    } 
    
    console.log(this.count);
    this.names.push(newNote);
    
    this.nameListService.sendNewNote(newNote);
    this.count +=  1;
    this.newName = ''; 
    this.needHelp = ''; 
    this.notes = '';
    return false;
  } 
    }

    this.names.push(newNote);
   
    return this.nameListService.sendNewNote(newNote).subscribe(
      () => {},
      (err) => console.error("Error: ", err),
      () => {
        this.newName = '';
        this.needHelp = '';
        this.notes = '';
      });
  }
}
