<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Usuarios</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
 <ion-grid>
      <ion-row>
        <ion-col>
          <div>Claves</div>
        </ion-col>
        <ion-col>
          <div>Status</div>
        </ion-col>
      </ion-row>
      <ion-row v-for="(item,index) in listaClaves" :key="index">
      <ion-col>
        <div>{{listaKeys[index]}}</div>
      </ion-col>
      <ion-col>
        <div>{{item.status}}</div>
      </ion-col>
      </ion-row>
    </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
IonPage,
IonHeader,
IonToolbar,IonTitle,
IonContent,
IonCol,
IonGrid,
IonRow,
} from "@ionic/vue";

export default {
name: "Tab1Page",
components: {
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonPage,
IonCol,
IonGrid,
IonRow,
}
};
</script>



<style>
ion-col > div {
background-color: #f7f7f7;
border: solid 1px #ddd;
padding: 10px;
}
</style>