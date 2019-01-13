import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbuttonComponent } from "src/app/common-components/addbutton/addbutton.component";
import { HeaderComponent } from "src/app/common-components/header/header.component";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [HeaderComponent, AddbuttonComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [HeaderComponent, AddbuttonComponent]
})
export class CommonComponentsModule { }
