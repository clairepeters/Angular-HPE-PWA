import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  constructor(
    private http: HttpClient
  ) {

  }
  folders = [];



  addFolder(folder) {
    this.folders.push(folder);
  }

  getFolders() {
    return this.folders;
  }

  editFolders() {
    //put in code for deleting folders later
  }
}
