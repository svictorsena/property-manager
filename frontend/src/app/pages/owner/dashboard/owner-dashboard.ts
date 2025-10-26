import { Component } from '@angular/core';
import { LucideAngularModule, Building2, FileText, CreditCard, TrendingUp } from 'lucide-angular';
import { Card } from '@/components/ui/card/card';
import { SideBar } from '@/components/ui/side-bar/side-bar';
import { Header } from '@/components/ui/header/header';

@Component({
    selector: 'app-owner-dashboard',
    imports: [LucideAngularModule, Card, SideBar, Header],
    templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
    readonly Building2 = Building2;
    readonly FileText = FileText;
    readonly CreditCard = CreditCard;
    readonly TrendingUp = TrendingUp;
}
