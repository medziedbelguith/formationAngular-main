import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }


  showSuccess(message, title){
    //this.toastr.success(message, title, {positionClass: 'toast-top-center',})
    alert(message)
  }

  showError(message, title){
    //this.toastr.error(message, title, {positionClass: 'toast-top-center',})
    alert(message)
  }

  showMessageErrorBackEnd(nameError){
     for(let i = 0; i < this.messagesErrorsBackend.length; i++){
       if(nameError == this.messagesErrorsBackend[i].name){
         this.showError(this.messagesErrorsBackend[i].message, "Erreur")
       }
     }    
  }

  messagesErrorsBackend = [
    { name:"errorLogin", message: "Authentication Failure"},
    { name:"errorLogin2", message: "Welcome, wait for your account to be activated"}, 
    { name:"errorRegister", message: "Your email already exists"},
    { name:"errorUpdateCompte1", message: 'Your account does not exist'},
    { name:"errorUpdateCompte2", message: "Your new email already exists"},
    { name:"errorUpdateCompte3", message: "Your password not matching"}
  ]

  //erreurs compte
  errorPassword = "Please, the password must be at least six characters long and can consist of letters and numbers !!"
  errorPassowrdConfirm = "Please insert your password confirmation !! "
  errorConfirmPassword = "Please verify your password !! "
  errorTelephone = "Please insert your phone !!"
  errorEmail = "Please enter your email !! "
  errorNewEmail = "Please insert your new email !! "
  errorNewPassword = "Please enter your new password !! "
  errorValidationNewPassword = "Please, validate your new password !! "
  errorValidationNewEmail = "Please validate your new email !! "
  errorNom = "Please insert your name !!"
  errorMessage = "Please insert your message !!"
  errorAdresse = "Please enter your address !!"
  
  //erreurs Validation commande
  errorValidationPremierEtape = "Please, validate the first step !!"
  errorPanierVide ="Sorry, your cart is empty !!"

  //erreurs ajouter produit
  errorNomProduit = "Please insert the name !!"
  errorRefProduit = "Please insert the ref !!"
  errorDisponibiliteProduit = "Please enter the availability !!"
  errorPrixAchatProduit = "Please enter the pricePurchase !!"
  errorPrixVenteProduit = "Please enter the price !!"
  errorDescriptionDessusProduit = "Please insert description !!"
  errorCategoriesProduit =  "Please insert the category !!"
  errorMarqueProduit = "Please insert the marque !! "
  errorCouleurProduit = "Please insert the color !!"
  errorImagesProduit = "Please insert the images !!"

  //success ajouter au panier
  successAjouterPanier = "This product is added to the basket"
  successEnleverPanier = "This product is removed from cart"
  
  alertNotConnexion = "Sorry, there is an internet connection problem"

  messageLogin= "Welcome "
  compteString= "My account"

  TypeFelicitation = "Congratulations"
  TypeError = "Error"
  TypeMessage = "Message"

  successDownloadData = "Your database is registered"
  successCompteActive = "Your account is now activated"
  successUpdateCompte ="Your modification is saved"
  successCommandeEnvoyer = "Your order has been sent !!!"
  sucessProduitEnregistrer = "Your product is successfully registered"
  successContactEnvayer = "Your contact is sent"
  messageYouConnecte = "You are connected with"
  messageFirstStepValide = "The first step is valid"
  successSaveUpdate = "Your modification is saved !!"
  //mot de passe oublie
  messageErrorPasswordForgien1 = "Please check your email"
  messageSuccessPasswordForgien2 = "The modification email is sent"

  messageErrorForgotPassword = "Please repeat the forgotten password procedure"

  //produits speciales
  errorProduitSpecialUrl = "Please insert your product URL !!"
  errorProduitSpecialQuantite = "Please insert the quantity of your product !!"
  errorProduitSpecialProduits = "Please insert your special products !!"
}

