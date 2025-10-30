import { Component } from '@angular/core';
import { LucideAngularModule, Building2, FileText, CreditCard, TrendingUp } from 'lucide-angular';
import { Card } from '@owner/components/card/card';
import { PageTemplate } from "@owner/layout/page-template/page-template";
import { TitlePage } from "@owner/components/page/title-page/title-page";

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
