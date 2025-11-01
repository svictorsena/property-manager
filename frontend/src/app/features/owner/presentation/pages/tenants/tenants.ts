import { Component, computed, inject, Signal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { LucideAngularModule, Mail, Plus, Search, Loader2 } from 'lucide-angular';
import { OwnerService } from '@owner/services/owner-service';
import { IPage, ITenant } from '@owner/interfaces';
import { PageLayout } from '@owner/layout';
import { Pagination } from '@/shared/components';
import {
    RegisterPopup,
    InvitePopup,
    InputPage,
    ButtonPage,
    TitlePage,
} from '@owner/presentation/components';


@Component({
    selector: 'app-tenants',
    imports: [
        TitlePage,
        LucideAngularModule,
        PageLayout,
        ButtonPage,
        InputPage,
        RegisterPopup,
        InvitePopup,
        Pagination,
    ],
    standalone: true,
    templateUrl: './tenants.html',
})
export class Tenants {
    ownerService = inject(OwnerService);

    readonly Plus = Plus;
    readonly Search = Search;
    readonly Mail = Mail;
    readonly Loader2 = Loader2;

    readonly currentPage = signal<number>(1);

    changePage(page: number) {
        this.currentPage.set(page);
    }

    readonly data = rxResource<IPage, { currentPage: number }>({
        params: () => ({ currentPage: this.currentPage() }),
        stream: ({ params }) => this.ownerService.getTenants(params.currentPage),
        defaultValue: { content: [], totalPages: 0, totalElements: 0 },
    });

    readonly tenants: Signal<ITenant[]> = computed(() => this.data.value()?.content ?? []);
    readonly totalTenants: Signal<number> = computed(() => this.data.value().totalElements ?? 0);
    readonly totalPages: Signal<number> = computed(() => this.data.value().totalPages ?? 0);

    openInvitePopUp = signal<boolean>(false);
    inviteLink = signal<string>('');

    copyLink() {
        navigator.clipboard.writeText(this.inviteLink());
    }

    async createInvite() {
        const res = await this.ownerService.createInvite();
        this.inviteLink.set('http://localhost:4200/register?token=' + res.token);
        this.openInvitePopUp.set(true);
    }

    closeInvitePopUp() {
        this.openInvitePopUp.set(false);
    }

    registerPopUp = signal<boolean>(false);

    openRegisterPopUp() {
        this.registerPopUp.set(true);
    }

    closeRegisterPopUp() {
        this.registerPopUp.set(false);
    }
}
