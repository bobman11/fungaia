import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Prodotti",
      urls: [{ title: "About", url: "/about" }, { title: "Prodotti" }],
    },
    component: AboutComponent,
  },

];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatTabsModule
  ],
  declarations: [
  ]
})
export class AboutModule { }
