import { Component, computed, inject, Signal, signal } from '@angular/core';
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
import { CreateQueryResult, injectQuery } from '@tanstack/angular-query-experimental';

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

    query: CreateQueryResult<IPage, Error> = injectQuery(() => ({
        queryKey: ['inquilinos', this.currentPage()],
        queryFn: () => this.ownerService.getTenants(this.currentPage()),
        keepPreviousData: true,
        staleTime: 5 * 60 * 1000,
    }));

    readonly tenants: Signal<ITenant[]> = computed(() => this.query.data()?.content ?? []);
    readonly totalTenants: Signal<number> = computed(() => this.query.data()?.totalElements ?? 0);
    readonly totalPages: Signal<number> = computed(() => this.query.data()?.totalPages ?? 0);

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
