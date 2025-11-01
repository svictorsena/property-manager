import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    LucideAngularModule,
    Building2,
    Home,
    FileText,
    CreditCard,
    Wrench,
    Users,
    BarChart3,
    Settings,
    PanelLeft,
} from 'lucide-angular';
@Component({
    selector: 'app-side-bar',
    imports: [LucideAngularModule, RouterLink],
    templateUrl: './side-bar.html',
})
export class SideBar {
    readonly PanelLeft = PanelLeft;

    isOpened = signal<boolean>(true);

    toggleIsOpened() {
        this.isOpened.update((isOpened) => !isOpened);
    }

    ownerItems = [
        { title: 'Dashboard', url: '/owner/dashboard', icon: Home, id: 0 },
        { title: 'Propriedades', url: '/owner/properties', icon: Building2, id: 1 },
        { title: 'Contratos', url: '/owner/contracts', icon: FileText, id: 2 },
        { title: 'Pagamentos', url: '/owner/payments', icon: CreditCard, id: 3 },
        { title: 'Manutenção', url: '/owner/maintenance', icon: Wrench, id: 4 },
        { title: 'Inquilinos', url: '/owner/tenants', icon: Users, id: 5 },
        { title: 'Relatórios', url: '/owner/reports', icon: BarChart3, id: 6 },
        { title: 'Configurações', url: '/owner/settings', icon: Settings, id: 7 },
    ];
}
