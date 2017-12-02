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

  newName: string = ''; 
  needHelp: string = ''; 
  notes: string = '';
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
  addName(): any {
    var newNote:Note = {
     newName: this.newName,
     needHelp: this.needHelp,
     notes: this.notes,
     time: new Date().getTime()
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
