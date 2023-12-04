import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { User } from '../modules/users/models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  drawer = new EventEmitter();

  public authUser$: Observable <User | null>
  constructor(private authService: AuthService){
    this.authUser$ = this.authService.authUser$
  }
  logOut(): void {
    this.authService.logOut()
  }
}
