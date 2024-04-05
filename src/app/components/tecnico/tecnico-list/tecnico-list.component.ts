import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from './models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
    id:  1,
    nome: 'Sheegwa Molina',
    cpf: '123.1223.123-10',
    email: 'sheegwa.molina@mail.com',
    senha: '123',
    perfis: ['0'],
    dataCriacao: '05/04/2024'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email','acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

