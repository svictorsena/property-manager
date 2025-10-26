import { Component, signal } from '@angular/core';
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
    selector: 'app-owner-dashboard',
    imports: [LucideAngularModule],
    templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
    readonly PanelLeft = PanelLeft;

    ownerItems = [
        { title: 'Dashboard', url: '/admin', icon: Home, id: 0 },
        { title: 'Unidades', url: '/admin/units', icon: Building2, id: 1 },
        { title: 'Contratos', url: '/admin/contracts', icon: FileText, id: 2 },
        { title: 'Pagamentos', url: '/admin/payments', icon: CreditCard, id: 3 },
        { title: 'Manutenção', url: '/admin/maintenance', icon: Wrench, id: 4 },
        { title: 'Usuários', url: '/admin/users', icon: Users, id: 5 },
        { title: 'Relatórios', url: '/admin/reports', icon: BarChart3, id: 6 },
        { title: 'Configurações', url: '/admin/settings', icon: Settings, id: 7 },
    ];

    isShow = signal<boolean>(true);

    toggleIsShow() {
        this.isShow.update((a) => !a);
    }
}
