import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, OnDestroy{
  
  private sub!:Subscription;
  userId!:string;

  constructor(private route: ActivatedRoute) {
    console.log('NEW UsersComponent')
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((value: Params) => {
      this.userId = value['userId'];
      console.log(this.userId)
    })

    this.route.queryParams.subscribe((value: Params) => {
      let foo = value['foo']
      console.log(foo)
    })

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

}
