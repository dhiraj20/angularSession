import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './presentation/introduction/introduction.component';
import { ComponentsComponent } from './presentation/components/components.component';
import { ModulesComponent } from './presentation/modules/modules.component';
import { TemplateComponent } from './presentation/template/template.component';
import { DirectivesComponent } from './presentation/directives/directives.component';
import { PipesComponent } from './presentation/pipes/pipes.component';
import { FormsComponent } from './presentation/forms/forms.component';
import { RoutingComponent } from './presentation/routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    SideNavComponent,
    HeaderComponent,
    IntroductionComponent,
    ComponentsComponent,
    ModulesComponent,
    TemplateComponent,
    DirectivesComponent,
    PipesComponent,
    FormsComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
