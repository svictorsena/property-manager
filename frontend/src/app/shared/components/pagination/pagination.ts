import { Component, input, output } from '@angular/core';
import { rangePages } from '@/shared/utils/pagination-utils';

@Component({
    selector: 'app-pagination',
    imports: [],
    templateUrl: './pagination.html',
    host: {
        class: ' fixed bottom-15',
    },
})
export class Pagination {
    protected readonly rangePages = rangePages;

    changePage = output<number>();
    totalPages = input.required<number>();
    currentPage = input.required<number>();

    previousPage() {
        this.changePage.emit(Math.max(1, this.currentPage() - 1));
    }

    selectPage(page: number | string) {
        if (typeof page === 'number' && page !== this.currentPage()) {
            this.changePage.emit(page);
        }
    }

    nextPage() {
        this.changePage.emit(Math.min(this.totalPages(), this.currentPage() + 1));
    }
}
