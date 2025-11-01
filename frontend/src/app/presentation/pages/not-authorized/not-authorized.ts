import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Lock, LogIn } from 'lucide-angular';

@Component({
    selector: 'app-not-authorized',
    imports: [RouterLink, LucideAngularModule],
    templateUrl: './not-authorized.html',
})
export class NotAuthorized {
    readonly Lock = Lock;
    readonly LogIn = LogIn;
}
