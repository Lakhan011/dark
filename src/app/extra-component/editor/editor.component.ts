import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { Editor } from 'ngx-editor';

@Component({
  templateUrl: './editor.component.html',
  standalone: true,
  imports: [NgxEditorModule, FormsModule, ReactiveFormsModule, CommonModule, ],
})
export class EditorComponent implements OnInit, OnDestroy {
  editor: Editor;
  html: string = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
