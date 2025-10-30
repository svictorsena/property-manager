import { Component } from '@angular/core';
import { LucideAngularModule, Building2, FileText, CreditCard, TrendingUp } from 'lucide-angular';
import { Card, TitlePage } from '@owner/presentation/components';
import { PageTemplate } from "@owner/presentation/layout";

@Component({
    selector: 'app-owner-dashboard',
    imports: [LucideAngularModule, Card, PageTemplate, TitlePage],
    templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
    readonly Building2 = Building2;
    readonly FileText = FileText;
    readonly CreditCard = CreditCard;
    readonly TrendingUp = TrendingUp;
}
