import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";


@NgModule({
    exports:[
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatDialogModule,
        

    ]
})
export class MaterialModule{

}