import { Component, inject, signal } from '@angular/core';
import { SideBar } from '@/components/ui/side-bar/side-bar';
import { Header } from '@/components/ui/header/header';
import { MainTitle } from '@/components/ui/main-title/main-title';
import { LucideAngularModule, Mail, Plus, Search } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { OwnerService } from '@/services/owner-service';
import { RegisterForm } from "@/components/form/register-form/register-form";

@Component({
    selector: 'app-tenants',
    imports: [SideBar, Header, MainTitle, LucideAngularModule, RegisterForm],
    templateUrl: './tenants.html',
})
export class Tenants {
    readonly Plus = Plus;
    readonly Search = Search;
    readonly Mail = Mail;

    ownerService = inject(OwnerService);

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

    showInvitePopUp = signal<boolean>(false);
    inviteLink = signal<string>('');

    copyLink() {
        navigator.clipboard.writeText(this.inviteLink())
    }

    async createInvite() {
        const res = await this.ownerService.createInvite();
        this.inviteLink.set('http://localhost:4200/register?token=' + res.token);
        this.showInvitePopUp.set(true);
    }

    closeInvitePopUp() {
        this.showInvitePopUp.set(false);
    }

    registerPopUp = signal<boolean>(false);

    openRegisterPopUp() {
        this.registerPopUp.set(true);
    }

    closeRegisterPopUp() {
        this.registerPopUp.set(false)
    }
}
