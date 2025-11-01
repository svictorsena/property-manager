import { Component } from '@angular/core';
import { LucideAngularModule, AlertTriangle, Home } from 'lucide-angular';

@Component({
    selector: 'app-not-found',
    imports: [LucideAngularModule],
    templateUrl: './not-found.html',
})
export class NotFound {
    readonly AlertTriangle = AlertTriangle;
    readonly Home = Home;
}
