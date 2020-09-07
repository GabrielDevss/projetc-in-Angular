import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/Teacher'

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

 public title = 'Professores';

 public teacherSelected: Teacher;

 public professores = [
    {id: 1,  name: 'Marisa', discipline: 'Markting Digital'  },
    {id: 2,  name: 'Gabriel', discipline: 'Inglês'  },
    {id: 3,  name: 'Arthur', discipline: 'Segurança Digital'  },
    {id: 4,  name: 'Josy', discipline: 'Programação'  },
  ];

  teacherSelect(teacher: Teacher) {
    this.teacherSelected = teacher;
  }

  voltar() {
    this.teacherSelected = null;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
