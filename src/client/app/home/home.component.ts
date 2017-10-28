import { Component, OnInit } from '@angular/core';
import { NameListService } from './home.service';

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

  interface Message {
    newName: string;
    needHelp: string;
    notes: string;
    time: new Date();
  }
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
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post  
    var newNote:Message = { 
     newName: this.newName,
     needHelp: this.needHelp, 
     notes: this.notes,
     time: this.time
    } 
    //let newNote = { "newName": this.newName, "needHelp": this.needHelp, "notes": this.notes, "time" : //new Date()}; 
    //this.names.push([this.newName,this.needHelp,this.notes, new Date()]);

    this.nameListService.sendNewNote(newNote); 
    this.newName = ''; 
    this.needHelp = ''; 
    this.notes = '';
    return false;
  }

}
