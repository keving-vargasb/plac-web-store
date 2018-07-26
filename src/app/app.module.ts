import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Environment
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Firebase
import { AngularFireModule } from 'angularfire2';

//Estilos
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//SideMenu
import { SidebarModule } from 'ng-sidebar';

//Componentes
import { AppComponent } from './app.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserFormComponent } from './users/components/user-form/user-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoaderComponent } from './loader/loader.component';
import { SidemenuComponent } from './main/sidemenu/sidemenu.component';
import { LoginComponent } from './users/components/login/login.component';
import { NavComponent } from './main/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    PageNotFoundComponent,
    LoaderComponent,
    SidemenuComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
