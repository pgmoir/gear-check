import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStore: DataStorageService, public authService: AuthService) { }

  ngOnInit() {
  }

  saveData() {
    this.dataStore.storeBikes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onLogout() {
    this.authService.signOut();
  }

  fetchData() {
    this.dataStore.getBikes();
  }
}
