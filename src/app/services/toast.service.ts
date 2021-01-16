import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private myToast: any;
  constructor(public toast: ToastController) { }

  ShowToast(message: string) {
    this.myToast = this.toast.create({
      message: message,
      duration: 3000
    }).then((toastData) => {
      toastData.present();
    });
  }

  HideToast() {
    this.myToast = this.toast.dismiss();
  }
}
