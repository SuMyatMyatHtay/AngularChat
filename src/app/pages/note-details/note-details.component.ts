import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss'
})
export class NoteDetailsComponent {

  note!: Note;
  noteId!: number;
  new!: boolean;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.note = new Note();

    //we want to find out if we are creating new note or editing an existing one. 
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.note = this.notesService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      }
      else {
        this.new = true;
      }
    })

  }

  ngAfterViewInit(): void {

  }

  onSubmit(form: NgForm) {
    //Save the note
    //console.log(form);


    if (this.new) {
      //we should save the route 
      this.notesService.add(form.value);

    }
    else {
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
