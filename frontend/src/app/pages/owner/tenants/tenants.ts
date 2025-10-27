import { Component } from '@angular/core';
import { SideBar } from '@/components/ui/side-bar/side-bar';
import { Header } from '@/components/ui/header/header';
import { MainTitle } from '@/components/ui/main-title/main-title';
import { LucideAngularModule, Plus, Search } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tenants',
    imports: [SideBar, Header, MainTitle, LucideAngularModule, RouterLink],
    templateUrl: './tenants.html',
})
export class Tenants {
    readonly Plus = Plus;
    readonly Search = Search;

    users = [
        {
            id: 1,
            name: 'João Silva',
            username: 'joaosilva',
            phone: '(11) 98888-8888',
            unit: '101-A',
        },
        {
            id: 2,
            name: 'Emanuel Marques',
            username: 'emanuelmarques',
            phone: '(11) 96666-6666',
            unit: '103-A',
        },
        {
            id: 3,
            name: 'Maria Santos',
            username: 'mariasantos',
            phone: '(11) 97777-7777',
            unit: '102-A',
        },
    ];
}
