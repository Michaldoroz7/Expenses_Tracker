import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy{

  id: number;
  user: User = null;
  private sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
    this.userService.findOne(this.id).pipe(
      map((user:User) => this.user = user)
    ).subscribe()
  }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
  }
