import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  userId: number = null;
  user: User = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
      this.userService.findOne(this.userId).pipe(
        map((user:User) => this.user = user)
      ).subscribe();
    }
  }
