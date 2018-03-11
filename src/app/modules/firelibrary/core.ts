import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as firebase from 'firebase';
import { FireService } from './providers/fire.service';
export * from './providers/fire.service';
import { Base } from './providers/etc/base';
export * from './providers/etc/base';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [FireService]
})
export class FirelibraryModule {
  public static forRoot(firebaseApp: firebase.app.App): ModuleWithProviders {
    Base.firebase = firebaseApp;
    return {
      ngModule: FirelibraryModule,
      providers: [FireService],
    };
  }
}