import { ComponentInteractionComponent } from './presentation/component-interaction/component-interaction.component';
import { RoutingComponent } from './presentation/routing/routing.component';
import { FormsComponent } from './presentation/forms/forms.component';
import { PipesComponent } from './presentation/pipes/pipes.component';
import { ModulesComponent } from './presentation/modules/modules.component';
import { ComponentsComponent } from './presentation/components/components.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './presentation/introduction/introduction.component';
import { TemplateComponent } from './presentation/template/template.component';
import { DirectivesComponent } from './presentation/directives/directives.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent},
    { path: 'components', component: ComponentsComponent},
    { path: 'modules', component: ModulesComponent},
    { path: 'template', component: TemplateComponent},
    { path: 'directives', component: DirectivesComponent},
    { path: 'pipes', component: PipesComponent},
    { path: 'routing', component: RoutingComponent},
    { path: 'componentinteraction', component: ComponentInteractionComponent},
    { path: 'forms', component: FormsComponent},
];
