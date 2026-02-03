import { NgModule } from '@angular/core';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';





@NgModule({
  declarations: [],
  imports: [

    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule


  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule
    ]
})
export class AngularMaterialModule { }
