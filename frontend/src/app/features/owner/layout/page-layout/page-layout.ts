import { Component } from '@angular/core';
import { SideBar } from "../side-bar/side-bar";
import { Header } from "../header/header";

@Component({
  selector: 'app-page-layout',
  imports: [SideBar, Header],
  templateUrl: './page-layout.html',
})
export class PageLayout {

}
