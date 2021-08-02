import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() display: string;
  @Input() content: string;
  @Input() text: string;
  @Output() action = new EventEmitter();
  @Output() close = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  triggerAction() {
    this.action.emit({ display: 'none' });
  }

  closeModal() {
    this.close.emit({ display: 'none' });
  }
}
