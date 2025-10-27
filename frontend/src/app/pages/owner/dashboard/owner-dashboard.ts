import { Component } from '@angular/core';
import { LucideAngularModule, Building2, FileText, CreditCard, TrendingUp } from 'lucide-angular';
import { Card } from '@/components/ui/card/card';
import { SideBar } from '@/components/ui/side-bar/side-bar';
import { Header } from '@/components/ui/header/header';
import { MainTitle } from "@/components/ui/main-title/main-title";

@Component({
    selector: 'app-owner-dashboard',
    imports: [LucideAngularModule, Card, SideBar, Header, MainTitle],
    templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
    readonly Building2 = Building2;
    readonly FileText = FileText;
    readonly CreditCard = CreditCard;
    readonly TrendingUp = TrendingUp;
}
