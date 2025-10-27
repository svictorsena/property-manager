import { Component } from '@angular/core';
import { SideBar } from "@/components/ui/side-bar/side-bar";
import { Header } from "@/components/ui/header/header";
import { MainTitle } from "@/components/ui/main-title/main-title";

@Component({
  selector: 'app-tenants',
  imports: [SideBar, Header, MainTitle],
  templateUrl: './tenants.html',
})
export class Tenants {

}
