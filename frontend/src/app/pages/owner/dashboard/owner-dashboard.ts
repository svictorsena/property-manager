import { Component } from '@angular/core';
import {
    LucideAngularModule,
    Building2,
    FileText,
    CreditCard,
    Search,
    User,
    TrendingUp,
} from 'lucide-angular';
import { Card } from '@/components/ui/card/card';
import { SideBar } from '@/components/side-bar/side-bar';

@Component({
    selector: 'app-owner-dashboard',
    imports: [LucideAngularModule, Card, SideBar],
    templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
    readonly Search = Search;
    readonly User = User;
    readonly Building2 = Building2;
    readonly FileText = FileText;
    readonly CreditCard = CreditCard;
    readonly TrendingUp = TrendingUp;
}
