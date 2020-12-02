import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheService } from './cache.service';
import { SharedModule } from '../shared/shared.module';
import {TicketService} from "./ticket.service";
import {HttpClient} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[
    CacheService,
    TicketService
  ]
})
export class CoreModule { }
