import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    // HeaderComponent,
    InputComponent,
    RadioComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // HeaderComponent,
    InputComponent,
    RadioComponent,
    RatingComponent,
  ],
})

export class ComponentsModule { }
