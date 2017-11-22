import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListHeadComponent } from './list-head.component';
import { ListBodyComponent } from './list-body.component';
import { ConvertBolPipe } from '../common/convertBol.pipe';
import { ListService } from './list.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers   : [
      {
          provide: ListService,
          useClass: ListService
      }
  ],
  exports: [ConvertBolPipe],
  declarations: [ListComponent, ListHeadComponent, ListBodyComponent, ConvertBolPipe]
})
export class ListModule { }
