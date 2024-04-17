import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from '../../models/chamado';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent {

  ELEMENT_DATA: Chamado[] = [
    {
      id: 1,
      dataAbertura: '02/06/2023',
      dataFechamento: '02/06/2023',
      prioridade: 'Alta',
      status: 'ANDAMENTO',
      titulo: 'Chamado 1',
      descricao: 'Teste chamado 1',
      tecnico: 1,
      cliente: 6,
      nomeCliente: 'Elaine Molina',
      nomeTecnico: 'Mascara',
    }
  ];

  displayedColumns: string[] = ['id', 'titulo',  'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

	applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}