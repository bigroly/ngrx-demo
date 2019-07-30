import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { IappState } from '../store/state/app.state';
import { selectUserList } from '../store/selectors/user.selector';
import { GetUsers } from '../store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private users$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IappState>) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

}
