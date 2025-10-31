import { Component, AfterViewInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [], 
  templateUrl: './planes.html',
  styleUrls: ['./planes.css'], 
})
export class Planes implements AfterViewInit {
  ngAfterViewInit() {
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects); 

  }
}