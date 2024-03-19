import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss'
})
export class NoteDetailsComponent {

  note: Note = new Note();

  constructor(private notesService: NotesService, private router: Router) {

  }

  ngOnInit() {
    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    //Save the note
    //console.log(form);
    this.notesService.add(form.value);
    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
