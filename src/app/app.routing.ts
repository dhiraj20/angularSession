import { FormsComponent } from './presentation/forms/forms.component';
import { PipesComponent } from './presentation/pipes/pipes.component';
import { ModulesComponent } from './presentation/modules/modules.component';
import { ComponentsComponent } from './presentation/components/components.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { IntroductionComponent } from './presentation/introduction/introduction.component';
import { TemplateComponent } from './presentation/template/template.component';
import { DirectivesComponent } from './presentation/directives/directives.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'introduction', component: IntroductionComponent},
    { path: 'components', component: ComponentsComponent},
    { path: 'modules', component: ModulesComponent},
    { path: 'template', component: TemplateComponent},
    { path: 'directives', component: DirectivesComponent},
    { path: 'pipes', component: PipesComponent},
    { path: 'forms', component: FormsComponent},
];
