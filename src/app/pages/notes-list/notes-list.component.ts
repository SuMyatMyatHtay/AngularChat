import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';

@Component({
  selector: 'app-notes-list',
  //standalone: true,
  //imports: [],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  // cardTitle: string = 'abc';
  // cardBody: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    //we want to retrieve all notes from NoteService 
    this.notes = this.notesService.getAll();
  }

  deleteNote(id: number) {
    this.notesService.delete(id);
  }
}
