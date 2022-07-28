import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilFormationComponent } from './siteFormation/accueil-formation/accueil-formation.component';
import { NavbarSiteFormationComponent } from './shared/navbarsFormation/navbar-site-formation/navbar-site-formation.component';
import { FooterFormationComponent } from './shared/footer-formation/footer-formation.component';
import { Slider1Component } from './siteFormation/accueil-formation/components/slider1/slider1.component';
import { Slider2Component } from './siteFormation/accueil-formation/components/slider2/slider2.component';
import { Galerie3Component } from './siteFormation/accueil-formation/components/galerie3/galerie3.component';
import { Galerie4Component } from './siteFormation/accueil-formation/components/galerie4/galerie4.component';
import { Galerie5Component } from './siteFormation/accueil-formation/components/galerie5/galerie5.component';
import { TopCategoriesComponent } from './shared/categories/top-categories/top-categories.component';
import { FormationsVoisinComponent } from './shared/formations/formations-voisin/formations-voisin.component';
import { FormationAccueilComponent } from './siteFormation/accueil-formation/components/formation-accueil/formation-accueil.component';
import { FormateursAccueilComponent } from './siteFormation/accueil-formation/components/formateurs-accueil/formateurs-accueil.component';
import { ListFormationsComponent } from './shared/formations/list-formations/list-formations.component';
import { ListFormateursComponent } from './shared/formateur/list-formateurs/list-formateurs.component';

import { LoginFormationComponent } from './siteFormation/compteFormation/login-formation/login-formation.component';
import { InscriptionFormationComponent } from './siteFormation/compteFormation/inscription-formation/inscription-formation.component';

//enseignat
import { ListFormationEnseignantComponent } from './adminEnseignant/list-formation-enseignant/list-formation-enseignant.component';
import { ProfilEnseignantComponent } from './adminEnseignant/profil-enseignant/profil-enseignant.component';
import { ListEtudiantEnseignantComponent } from './adminEnseignant/list-etudiant-enseignant/list-etudiant-enseignant.component';
import { NewFormationComponent } from './adminEnseignant/new-formation/new-formation.component';
import { UpdateFormationComponent } from './adminEnseignant/update-formation/update-formation.component';

import {SidebarEnseignantComponent} from './shared/sidebars/sidebar-enseignant/sidebar-enseignant.component';
import {SidebarEtudiantComponent} from './shared/sidebars/sidebar-etudiant/sidebar-etudiant.component';
import {SidebarAdminComponent} from './shared/sidebars/sidebar-admin/sidebar-admin.component';

import { EtudiantDetailsFormationComponent } from './siteFormation/etudiant-details-formation/etudiant-details-formation.component';
import { CategorieDetailsFormationComponent } from './siteFormation/categorie-details-formation/categorie-details-formation.component';
import { FormationDetailsFormationComponent } from './siteFormation/formation-details-formation/formation-details-formation.component';
import { FormateurDetailsFormationComponent } from './siteFormation/formateur-details-formation/formateur-details-formation.component';
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
import { LoadingComponent } from './shared/loading/loading.component';
import { SafePipe } from './safe.pipe';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { DeleteFormationComponent } from './adminEnseignant/delete-formation/delete-formation.component';
import { InscriptionFormationModalComponent } from './shared/popups/inscription-formation-modal/inscription-formation-modal.component';
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

import { DemandeInscrireComponent } from './shared/popups/demande-inscrire/demande-inscrire.component';
import { InscrirePopusComponent } from './shared/popups/inscrire-popus/inscrire-popus.component';
import { LoginPopupsComponent } from './shared/popups/login-popups/login-popups.component';
import { EventDetailsComponent } from './siteFormation/event-details/event-details.component';
import { ParticipantsEventComponent } from './adminFormation/participants-event/participants-event.component';
import { ListEvaluationEnseignantComponent } from './adminEnseignant/list-evaluation-enseignant/list-evaluation-enseignant.component';
import { SomeVideoComponent } from './siteFormation/accueil-formation/components/some-video/some-video.component';
import { EventsPageComponent } from './siteFormation/events-page/events-page.component';
import { RecherchePageComponent } from './siteFormation/recherche-page/recherche-page.component';
import { DeleteUserComponent } from './adminFormation/delete-user/delete-user.component';

@NgModule({
  declarations: [
    
    SafePipe,
      
    AppComponent,
    
    LoginPopupsComponent,
    
    ListFormationEtudiantComponent,
    ProfilEtudiantComponent,
    
    SidebarAdminComponent,
    SidebarEnseignantComponent,
    SidebarEtudiantComponent,
    
    AccueilFormationComponent,
    LoginFormationComponent,
    InscriptionFormationComponent,
    NavbarSiteFormationComponent,
    FooterFormationComponent,
    ListEnseignantsFormationComponent,
    ListEtudiantsFormationComponent,
    Slider1Component,
    Slider2Component,
    Galerie3Component,
    Galerie4Component,
    Galerie5Component,
    TopCategoriesComponent,
    CategorieDetailsFormationComponent,
    FormationDetailsFormationComponent,
    FormateurDetailsFormationComponent,
    FormationsVoisinComponent,
    FormationAccueilComponent,
    FormateursAccueilComponent,
    ListFormationsComponent,
    ListFormateursComponent,
    NewFormationComponent,
    UpdateFormationComponent,
    ListFormationEnseignantComponent,
    ProfilEnseignantComponent,
    ListEtudiantEnseignantComponent,
    EtudiantDetailsFormationComponent,
    AddEtudiantEnseignantComponent,
    ListFormationsFormationComponent,
    ProfilAdminComponent,
    CategoriesPageComponent,
    FormateursPageComponent,
    FormationsPageComponent,
    CenterFormationPageComponent,
    ProposPageComponent,
    ContactPageComponent,
    LoadingComponent,
    SafePipe,
    PaginationComponent,
    DeleteFormationComponent,
    InscriptionFormationModalComponent,
    ListInscriptionEnseignantComponent,
    ListInscriptionEtudiantComponent,
    NewCentreFormationComponent,
    ListCentreFormationComponent,
    UpdateCentreFormationComponent,
    DeleteCentreFormationComponent,
    ListEventsComponent,
    ListCategoriesComponent,
    NewEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    NewCategorieComponent,
    UpdateCategorieComponent,
    DeleteCategorieComponent,
    DemandeInscrireComponent,
    InscrirePopusComponent,
    EventDetailsComponent,
    ParticipantsEventComponent,
    ListEvaluationEnseignantComponent,
    SomeVideoComponent,
    EventsPageComponent,
    RecherchePageComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
