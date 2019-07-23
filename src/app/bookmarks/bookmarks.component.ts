import { Component} from '@angular/core';
import {BookmarksService} from '../bookmarks.service'
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {
items;
  constructor(
    private bookmarksService: BookmarksService
  ) {
    this.items = this.bookmarksService.getBookmarks();
   }
   dataSource = new MatTableDataSource(this.bookmarksService.getBookmarks());
   displayedColumns: string[] = ['name', 'date', 'customColumn1'];

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
