import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Mail, Plus, Search, LucideAngularModule, Loader2 } from 'lucide-angular';
import { OwnerService } from '@/features/owner/services/owner-service';
import { PageLayout } from '@owner/layout';
import { ButtonPage, InputPage, TitlePage, PropertiesPopup } from '@owner/presentation/components';
import { CreateQueryResult, injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { IPage, ITotalProperties, IProperties } from '@owner/interfaces';
import { Pagination } from '@/shared/components';
import { PropertyStatusTranslatePipe } from "@owner/pipes/property-status-translate-pipe";

@Component({
    selector: 'app-properties',
    imports: [
    LucideAngularModule,
    TitlePage,
    PageLayout,
    ButtonPage,
    InputPage,
    PropertiesPopup,
    Pagination,
    PropertyStatusTranslatePipe
],
    templateUrl: './properties.html',
})
export class Properties {
    ownerService = inject(OwnerService);
    queryClient = inject(QueryClient);

    readonly Plus = Plus;
    readonly Search = Search;
    readonly Mail = Mail;
    readonly Loader2 = Loader2;

    currentPage = signal<number>(1);
    search = signal<string>('');

    changePage(page: number) {
        this.currentPage.set(page);
    }

    searchProperties(value: string) {
        this.search.set(value);
    }

    propertiesQuery: CreateQueryResult<IPage<IProperties>, Error> = injectQuery(() => ({
        queryKey: ['properties', this.currentPage(), this.search()],
        queryFn: () => this.ownerService.getProperties(this.currentPage(), this.search()),
    }));

    readonly properties: Signal<IProperties[]> = computed(
        () => this.propertiesQuery.data()?.content ?? []
    );
    readonly totalPages: Signal<number> = computed(
        () => this.propertiesQuery.data()?.totalPages ?? 0
    );

    private totalPropertiesQuery: CreateQueryResult<ITotalProperties, Error> = injectQuery(() => ({
        queryKey: ['totalProperties'],
        queryFn: () => this.ownerService.getTotalProperties(),
    }));

    readonly totalProperties: Signal<number> = computed(
        () => this.totalPropertiesQuery.data()?.totalProperties ?? 0
    );

    invalidateProperties() {
        this.queryClient.invalidateQueries({ queryKey: ['properties'] });
        this.queryClient.invalidateQueries({ queryKey: ['totalProperties'] });
    }

    isPropertiesPopupOpened = signal<boolean>(false);

    openPropertiesPopup() {
        this.isPropertiesPopupOpened.set(true);
    }

    closePropertiesPopup() {
        this.isPropertiesPopupOpened.set(false);
    }
}
