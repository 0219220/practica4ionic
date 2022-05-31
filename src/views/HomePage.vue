<template>
  <ion-page>
     <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Log in to your favorite bus ticket system, Qr Trip</ion-title>
        <div id="app">
   <div class="login-page">
      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div v-if="!registerActive" class="card login" >
                  <h1>Login</h1>
                  <form class="form-group">
                     <input v-model="emailLogin" type="email" class="form-control" id="emailinput" placeholder="Email" required>
                     <input type="password" class="form-control" id="passwordinput" placeholder="Password" required>
                     <ion-button expand="block" @click="doLogin"
>Log in</ion-button
>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">



      
        
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/Tab1Page">
          <ion-icon :icon="ellipse" />
          <ion-label>Claves</ion-label>
        </ion-tab-button> 
        
        <ion-tab-button tab="tab2" href="/Tab2Page">
          <ion-icon :icon="square" />
          <ion-label>Usuarios</ion-label>
        </ion-tab-button> 

        <ion-tab-button tab="tab3" href="/Tab3Page">
          <ion-icon :icon="triangle" />
          <ion-label>Agregar Claves</ion-label>
        </ion-tab-button>    
      </ion-tab-bar>
    </ion-tabs></ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';



import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default defineComponent({
  name: 'HomePage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle},
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  },

async doLogin() {
const auth = getAuth();
signInWithEmailAndPassword(auth, this.$refs["emailinput"],
this.$refs["passwordinput"])
.then((userCredential) => {
// Signed in
const user = userCredential.user;
if(user== null)
{
console.log("el usuario no esta autenticado") }
else
{
console.log("el usuario esta autenticado", user);
}
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorCode, errorMessage);
});
},
}

);
</script>

<style>
ion-col > div {
background-color: #f7f7f7;
border: solid 1px #ddd;
padding: 10px;
}


</style>

