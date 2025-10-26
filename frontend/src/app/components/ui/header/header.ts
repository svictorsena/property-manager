import { Component } from '@angular/core';
import { LucideAngularModule, Search, User } from 'lucide-angular';

@Component({
    selector: 'app-header',
    imports: [LucideAngularModule],
    templateUrl: './header.html',
})
export class Header {
    readonly Search = Search;
    readonly User = User;
}
