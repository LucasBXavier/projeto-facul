import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  imports: [NgFor, NgIf, FormsModule],
  standalone: true
})
export class CardsComponent implements OnInit {

    public receitas: any = [];

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getReceitas();
  }
  public getReceitas(): void {
    this.http.get('https://localhost:7271/api/Receitas/').subscribe(
      response => {
        this.receitas = response;
      },
      error => console.log(error)
    )
  }
  openScrollableContent(longContent:any) {
    this.modalService.open(longContent,{ ariaLabelledBy: 'modal-basic-title', scrollable: true });
  }
}


