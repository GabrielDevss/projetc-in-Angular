import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup;
  public title = 'Alunos';
  public alunoSelected: Aluno;
  public textSimple: string;


   public alunos = [

    {id: 1, name: 'Felipe', lastName: 'Deschamps', telephone: 456548151 },
    {id: 2, name: 'Marta',  lastName: 'Loize', telephone: 5132151351 },
    {id: 3, name: 'Lucas', lastName: 'Basto', telephone: 32155135 },
    {id: 4, name: 'Milena',  lastName: 'Campos', telephone:  51531551 },

  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.alunoForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    this.alunoForm.value;
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

    voltar() {
      this.alunoSelected = null;
    }


}
