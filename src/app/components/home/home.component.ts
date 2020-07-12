import { Component } from "@angular/core";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    moduleId: module.id
})
export class HomeComponent { 
    public appName = 'Inho le boss!'

    constructor() {
        // console.log("NativeScript Playground!");
    }
}
