import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/models/interface';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  array: Interface[] = [];

  constructor(private arraySrv: ServiceService) {
    this.arraySrv.recuperaLista().then((response) => {
      this.array = response;
    })
  }

  ngOnInit(): void {
  }

}
