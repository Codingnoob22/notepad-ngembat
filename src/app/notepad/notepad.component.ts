import { Component, OnInit } from '@angular/core';
import { Message } from './Message';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  NoteMessage: string;
  MessageIO: Array<Message> = [];
  MessageIOEdit: Array<Message> = [];
  MessageIOObj: any;
  MessageIOObjEdit: any;
  showButton: Array<boolean>;
  showButtonEdit: Array<boolean>;
  index: number = 0;
  EditedMessage: string;

  constructor() {
    this.NoteMessage = '';
    this.showButton = [];
    this.showButtonEdit = [];
  }

  ngOnInit() {}

  AddNote() {
    if (this.NoteMessage != '') {
      this.MessageIOObj = new Message();
      this.MessageIOObj.NoteMessage = this.NoteMessage;
      this.MessageIOObj.index = this.index;

      this.MessageIO.push(this.MessageIOObj);
      this.NoteMessage = '';
      this.index++;
    }
  }

  RemoveNote(reply) {
    this.MessageIO.splice(this.MessageIO.indexOf(reply), 1);
  }

  EditNote(Note) {
    if (this.showButtonEdit[Note.index] == null) {
      this.showButtonEdit[Note.index] = false;
    }
    this.showButtonEdit[Note.index] = !this.showButtonEdit[Note.index];
  }

  EditMessage(NoteEdit) {
    NoteEdit.NoteMessage = this.EditedMessage;

    this.MessageIO[NoteEdit.index].NoteMessage = NoteEdit.NoteMessage;

    this.showButtonEdit[NoteEdit.index] = false;
    this.showButton[NoteEdit.index] = false;
    this.EditedMessage = '';
  }

  ShowButton(index) {
    if (this.showButton[index.index] == null) {
      this.showButton[index.index] = false;
    }
    this.showButton[index.index] = !this.showButton[index.index];
    this.showButtonEdit[index.index] = false;
  }
}
