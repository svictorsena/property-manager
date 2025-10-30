import { Component, effect, inject, signal } from '@angular/core';
import { TitlePage } from '@owner/components/page/title-page/title-page';
import { LucideAngularModule, Mail, Plus, Search } from 'lucide-angular';
import { OwnerService } from '@/features/owner/services/owner-service';
import { PageTemplate } from '@owner/layout/page-template/page-template';
import { ButtonPage } from '@owner/components/page/button-page/button-page';
import { InputPage } from '@owner/components/page/input-page/input-page';
import { RegisterPopup } from '@owner/components/popup/register-popup/register-popup';
import { InvitePopup } from '@owner/components/popup/invite-popup/invite-popup';
import { ITenant } from '../../interfaces/ITenant';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-tenants',
    imports: [
        TitlePage,
        LucideAngularModule,
        PageTemplate,
        ButtonPage,
        InputPage,
        RegisterPopup,
        InvitePopup,
        AsyncPipe
    ],
    standalone: true,
    templateUrl: './tenants.html',
})
export class Tenants {
    readonly Plus = Plus;
    readonly Search = Search;
    readonly Mail = Mail;

    ownerService = inject(OwnerService);

    tenants$: Observable<ITenant[]> = this.ownerService.getTenants();;

    // constructor() {
    //     effect(() => {
    //         this.tenants$ = 
    //     });
    // }

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
        console.log(this.registerPopUp);

        this.registerPopUp.set(true);
    }

    closeRegisterPopUp() {
        this.registerPopUp.set(false);
    }

    onClick() {
        this.ownerService.getTenants();
    }
}
