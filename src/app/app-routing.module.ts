import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilFormationComponent } from './siteFormation/accueil-formation/accueil-formation.component';
import { EtudiantDetailsFormationComponent } from './siteFormation/etudiant-details-formation/etudiant-details-formation.component';
import { CategorieDetailsFormationComponent } from './siteFormation/categorie-details-formation/categorie-details-formation.component';
import { FormationDetailsFormationComponent } from './siteFormation/formation-details-formation/formation-details-formation.component';
import { FormateurDetailsFormationComponent } from './siteFormation/formateur-details-formation/formateur-details-formation.component';
//admin

//compte
import { LoginFormationComponent } from './siteFormation/compteFormation/login-formation/login-formation.component';
import { InscriptionFormationComponent } from './siteFormation/compteFormation/inscription-formation/inscription-formation.component';

import { ListFormationEnseignantComponent } from './adminEnseignant/list-formation-enseignant/list-formation-enseignant.component';
import { ProfilEnseignantComponent } from './adminEnseignant/profil-enseignant/profil-enseignant.component';
import { ListEtudiantEnseignantComponent } from './adminEnseignant/list-etudiant-enseignant/list-etudiant-enseignant.component';
import { NewFormationComponent } from './adminEnseignant/new-formation/new-formation.component';
import { UpdateFormationComponent } from './adminEnseignant/update-formation/update-formation.component';
import { AddEtudiantEnseignantComponent } from './adminEnseignant/add-etudiant-enseignant/add-etudiant-enseignant.component';

//etudiant
import { ListFormationEtudiantComponent } from './adminEtudiant/list-formation-etudiant/list-formation-etudiant.component';
import { ProfilEtudiantComponent } from './adminEtudiant/profil-etudiant/profil-etudiant.component';

//admin
import { ListEnseignantsFormationComponent } from './adminFormation/list-enseignants-formation/list-enseignants-formation.component';
import { ListEtudiantsFormationComponent } from './adminFormation/list-etudiants-formation/list-etudiants-formation.component';
import { ListFormationsFormationComponent } from './adminFormation/list-formations-formation/list-formations-formation.component';
import { ProfilAdminComponent } from './adminFormation/profil-admin/profil-admin.component';

import { CategoriesPageComponent } from './siteFormation/categories-page/categories-page.component';
import { FormateursPageComponent } from './siteFormation/formateurs-page/formateurs-page.component';
import { FormationsPageComponent } from './siteFormation/formations-page/formations-page.component';
import { CenterFormationPageComponent } from './siteFormation/center-formation-page/center-formation-page.component';
import { ProposPageComponent } from './siteFormation/propos-page/propos-page.component';
import { ContactPageComponent } from './siteFormation/contact-page/contact-page.component';

import { DeleteFormationComponent } from './adminEnseignant/delete-formation/delete-formation.component';
import { ListInscriptionEnseignantComponent } from './adminEnseignant/list-inscription-enseignant/list-inscription-enseignant.component';
import { ListInscriptionEtudiantComponent } from './adminEtudiant/list-inscription-etudiant/list-inscription-etudiant.component';

import { NewCentreFormationComponent } from './adminFormation/new-centre-formation/new-centre-formation.component';
import { ListCentreFormationComponent } from './adminFormation/list-centre-formation/list-centre-formation.component';
import { UpdateCentreFormationComponent } from './adminFormation/update-centre-formation/update-centre-formation.component';
import { DeleteCentreFormationComponent } from './adminFormation/delete-centre-formation/delete-centre-formation.component';

import { ListEventsComponent } from './adminFormation/list-events/list-events.component';
import { ListCategoriesComponent } from './adminFormation/list-categories/list-categories.component';

import { NewEventComponent } from './adminFormation/new-event/new-event.component';
import { UpdateEventComponent } from './adminFormation/update-event/update-event.component';
import { DeleteEventComponent } from './adminFormation/delete-event/delete-event.component';

import { NewCategorieComponent } from './adminFormation/new-categorie/new-categorie.component';
import { UpdateCategorieComponent } from './adminFormation/update-categorie/update-categorie.component';
import { DeleteCategorieComponent } from './adminFormation/delete-categorie/delete-categorie.component';

import { EventDetailsComponent } from './siteFormation/event-details/event-details.component';
import { ParticipantsEventComponent } from './adminFormation/participants-event/participants-event.component';

import { ListEvaluationEnseignantComponent } from './adminEnseignant/list-evaluation-enseignant/list-evaluation-enseignant.component';

import { EventsPageComponent } from './siteFormation/events-page/events-page.component';

import { RecherchePageComponent } from './siteFormation/recherche-page/recherche-page.component';

import { DeleteUserComponent } from './adminFormation/delete-user/delete-user.component';

const routes: Routes = [

  {path: 'deleteUser/:id' , component: DeleteUserComponent },
  
  {path: 'RecherchePage' , component: RecherchePageComponent },
  
  {path: 'EventsPage' , component: EventsPageComponent },
  
  {path: 'ListEvaluationEnseignant/:id' , component: ListEvaluationEnseignantComponent },

  {path: 'ParticipantsEvent/:id' , component: ParticipantsEventComponent },

  {path: 'EventDetails/:id' , component: EventDetailsComponent },

  {path: 'ListEvents' , component: ListEventsComponent },
  {path: 'ListCategories' , component: ListCategoriesComponent },

  {path: 'NewEvent' , component: NewEventComponent },
  {path: 'UpdateEvent/:id' , component: UpdateEventComponent },
  {path: 'DeleteEvent/:id' , component: DeleteEventComponent },

  {path: 'NewCategorie' , component: NewCategorieComponent },
  {path: 'UpdateCategorie/:id' , component: UpdateCategorieComponent },
  {path: 'DeleteCategorie/:id' , component: DeleteCategorieComponent },

  {path: 'NewCentreFormation' , component: NewCentreFormationComponent },
  {path: 'ListCentreFormation' , component: ListCentreFormationComponent },
  {path: 'UpdateCentreFormation/:id' , component: UpdateCentreFormationComponent },
  {path: 'DeleteCentreFormation/:id' , component: DeleteCentreFormationComponent },
  
  {path: 'CategoriesPage' , component: CategoriesPageComponent },
  {path: 'FormateursPage' , component: FormateursPageComponent },
  {path: 'FormationsPage' , component: FormationsPageComponent },
  {path: 'CenterFormationPage' , component: CenterFormationPageComponent },
  {path: 'ProposPage' , component: ProposPageComponent },
  {path: 'ContactPage' , component: ContactPageComponent },


  {path: '',redirectTo:'accueil',pathMatch:"full"},
  {path: 'accueil' , component: AccueilFormationComponent },

  {path: 'CategorieDetails/:id' , component: CategorieDetailsFormationComponent },
  {path: 'FormationDetails/:id' , component: FormationDetailsFormationComponent },
  {path: 'FormateurDetails/:id' , component: FormateurDetailsFormationComponent },
  {path: 'EtudiantDetails' , component: EtudiantDetailsFormationComponent },


  //
  {path: 'LoginFormation' , component: LoginFormationComponent },
  {path: 'InscriptionFormation' , component: InscriptionFormationComponent },

//enseignant  
  {path: 'NewFormation' , component: NewFormationComponent },
  {path: 'UpdateFormation/:id' , component: UpdateFormationComponent },
  {path: 'DeleteFormation/:id' , component: DeleteFormationComponent },
  
  {path: 'ListFormationEnseignant' , component: ListFormationEnseignantComponent },
  {path: 'ListEtudiantEnseignant/:id' , component: ListEtudiantEnseignantComponent },
  {path: 'ListInscriptionEnseignant/:id' , component: ListInscriptionEnseignantComponent },
  
  {path: 'ProfilEnseignant' , component: ProfilEnseignantComponent },
  {path: 'AddEtudiantEnseignant' , component: AddEtudiantEnseignantComponent },

  //etudiant
  {path: 'ListFormationEtudiant/:id' , component: ListFormationEtudiantComponent },
  {path: 'ListInscriptionEtudiant/:id' , component: ListInscriptionEtudiantComponent },
  {path: 'ProfilEtudiant' , component: ProfilEtudiantComponent },

  //admin
  {path: 'ListEnseignantsFormation' , component: ListEnseignantsFormationComponent },
  {path: 'ListEtudiantsFormation' , component: ListEtudiantsFormationComponent },
  {path: 'ListFormationsFormation' , component: ListFormationsFormationComponent },
  {path: 'ProfilAdmin' , component: ProfilAdminComponent },

  {path: '**', component: AccueilFormationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
