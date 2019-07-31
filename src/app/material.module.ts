import { NgModule } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule,  MatCardModule, MatTabsModule,
    MatIconModule, MatGridListModule, MatExpansionModule, 
    MatTooltipModule, MatDividerModule,} from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule,  MatCardModule, MatTabsModule,
    MatIconModule, MatGridListModule, MatExpansionModule, 
    MatTooltipModule, MatDividerModule,]
})
export class MaterialModule {}