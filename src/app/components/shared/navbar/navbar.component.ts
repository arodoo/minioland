import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchCharacter(term: string) {
    console.log(term);
    this.router.navigate(['/search', term]);
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    const term = event.target.searchTerm.value;
    this.searchCharacter(term);
  }
}
