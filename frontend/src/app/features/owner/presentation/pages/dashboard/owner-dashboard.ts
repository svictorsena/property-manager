import { Component } from '@angular/core';
import { LucideAngularModule, Building2, FileText, CreditCard, TrendingUp } from 'lucide-angular';
import { Card, TitlePage } from '@owner/presentation/components';
import { PageLayout } from "@owner/layout";

@Component({
    selector: 'app-owner-dashboard',
    imports: [LucideAngularModule, Card, PageLayout, TitlePage],
    templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
    readonly Building2 = Building2;
    readonly FileText = FileText;
    readonly CreditCard = CreditCard;
    readonly TrendingUp = TrendingUp;
}
