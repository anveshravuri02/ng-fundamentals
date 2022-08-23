import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.route";
@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule
    ],

    providers: [],

})
export class UserModule { }