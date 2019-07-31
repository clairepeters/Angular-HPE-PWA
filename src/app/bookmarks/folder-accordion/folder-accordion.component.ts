import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bmk-accordion/bmk-service/bookmarks.service'
import { FoldersService } from './folders/folders.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ModalComponent } from './folders/new-folder-modal/modal.component';
import { generate } from 'rxjs';
import {SearchComponent} from '../search/search.component'
import { ActivatedRoute } from '@angular/router';
import{RecentsComponent} from '../recents/recents.component'
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-folder-accordion',
  templateUrl: './folder-accordion.component.html',
  styleUrls: ['./folder-accordion.component.scss']
})
export class FolderAccordionComponent implements OnInit {

  //Data for folder modal


  "folder": {
    "name": string,
    "ID": string,
    "products": [],


  }
  folders;
  //Array of bookmarked items from bookmarks service
  items;


  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
    private foldersService: FoldersService,
    public dialog: MatDialog //this is used for the "new folder pop-up"
  ) {
    //set items to the array that the service allows us to grab
    this.items = this.bookmarksService.getBookmarks();
    //set folders to the array that the service allows us to grab
    this.folders = this.foldersService.getFolders();
  } //end constructor


  generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  openDialog(): void {
    //gets rid of the focus on add folder button
    document.getElementById("btn").blur();
    //specs for dialog
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { folder: this.folder }
    });
    // this is what happens when closing the dialog box
    dialogRef.afterClosed().subscribe(result => {
      if (result == null) {
        return;
      }
      console.log(this.folders);
      this.folder = { name: result, ID: this.generateID(), products: [] }


      //requirements for folder 

      this.foldersService.addFolder(this.folder)

    });
  } //end export class

  ngOnInit() {
  }

}
