import { Component, inject } from '@angular/core';
import { Mail, Plus, Search, LucideAngularModule } from 'lucide-angular';
import { OwnerService } from '@/features/owner/services/owner-service';
import { TitlePage } from '@owner/presentation/components/page/title-page/title-page';
import { PageTemplate } from '@owner/presentation/layout/page-template/page-template';
import { ButtonPage } from '@owner/presentation/components/page/button-page/button-page';
import { InputPage } from '@owner/presentation/components/page/input-page/input-page';

@Component({
    selector: 'app-properties',
    imports: [LucideAngularModule, TitlePage, PageTemplate, ButtonPage, InputPage],
    templateUrl: './properties.html',
})
export class Properties {
    readonly Plus = Plus;
    readonly Search = Search;
    readonly Mail = Mail;

    ownerService = inject(OwnerService);
}
