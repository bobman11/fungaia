import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from '../home/home.component';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ["./about.component.scss"],
  selector: "app-about",
})
export class AboutComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  slides = [
    { 'path': 'assets/images/header-about2.jpg' },
    { 'path': 'assets/images/header-prodotti.jpg' },
    { 'path': 'assets/images/img10.jpg' },
    { 'path': 'assets/images/img7.jpg' },
    { 'path': 'assets/images/img29.jpg' },
    { 'path': 'assets/images/shiitake2.jpg' },
    { 'path': 'assets/images/zuca.jpg' },
    { 'path': 'assets/images/zucchini.jpg' },
    { 'path': 'assets/images/pomodori.jpg' },
    { 'path': 'assets/images/fave.jpg' },
    { 'path': 'assets/images/funghi.jpg' },
    { 'path': 'assets/images/zucc.jpg' },
  ];

  constructor(private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
    this.accordion = new MatAccordion();
  }

  openPic(event: any) {
    if (window.innerWidth < 992) {
      this.router.navigateByUrl('/image', { state: { iamge: event.path } });
      return;
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        img: event.path
      },
    });

  }

  open(key: string, value: string) {
    if (!key) {
      window.open(value, '_blank');
      return;
    }
    document.location.href = key + ":" + value;
  }



}
