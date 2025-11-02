import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { LucideAngularModule, Mail, Plus, Search, Loader2 } from 'lucide-angular';
import { OwnerService } from '@owner/services/owner-service';
import { IPage, ITenant, ITotalTenants } from '@owner/interfaces';
import { PageLayout } from '@owner/layout';
import { Pagination } from '@/shared/components';
import {
    RegisterPopup,
    InvitePopup,
    InputPage,
    ButtonPage,
    TitlePage,
} from '@owner/presentation/components';
import { CreateQueryResult, injectQuery, QueryClient } from '@tanstack/angular-query-experimental';

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
    private queryClient = inject(QueryClient);

    readonly Plus = Plus;
    readonly Search = Search;
    readonly Mail = Mail;
    readonly Loader2 = Loader2;

    readonly currentPage = signal<number>(1);
    readonly search = signal<string>('');

    changePage(page: number) {
        this.currentPage.set(page);
    }

    searchTenant(value: string) {
        this.search.set(value);
    }

    tenantsQuery: CreateQueryResult<IPage<ITenant>, Error> = injectQuery(() => ({
        queryKey: ['tenants', this.currentPage(), this.search()],
        queryFn: () => this.ownerService.getTenants(this.currentPage(), this.search()),
        keepPreviousData: true,
        staleTime: 5 * 60 * 1000,
    }));

    readonly tenants: Signal<ITenant[]> = computed(() => this.tenantsQuery.data()?.content ?? []);
    readonly totalPages: Signal<number> = computed(() => this.tenantsQuery.data()?.totalPages ?? 0);

    private totalTenantsQuery: CreateQueryResult<ITotalTenants, Error> = injectQuery(() => ({
        queryKey: ['totalTenants'],
        queryFn: () => this.ownerService.getTotalTenants(),
    }));

    readonly totalTenants: Signal<number> = computed(() => this.totalTenantsQuery.data()?.totalTenants ?? 0)

    invalidateTenants() {
        this.queryClient.invalidateQueries({ queryKey: ['tenants'] });
        this.queryClient.invalidateQueries({ queryKey: ['totalTenants'] });
    }

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
