import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-colors',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
})
export class ColorListComponent implements OnInit {
  iconPen = faPen;
  iconTrash = faTrash;
  colors: Color[] = [];
  dataLoaded = false;
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  deleteColor(color: Color) {
    this.colorService.delete(color).subscribe();
  }
}
