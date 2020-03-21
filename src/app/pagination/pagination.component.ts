import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent implements OnInit {
  isVisible: boolean;
  constructor() {}
  private _pagerPageSize: number;
  private _pagerTotalItems: number;
  pages: number[] = [];
  totalPages: number;
  currentPage: number = 1;
  window: number = 10;

  @Input() get pageSize(): number {
    return this._pagerPageSize;
  }
  set pageSize(value: number) {
    this._pagerPageSize = value;
    this.update();
  }
  @Input() get totalItems(): number {
    return this._pagerTotalItems;
  }

  set totalItems(value: number) {
    this._pagerTotalItems = value;
    this.update();
  }

  @Output() pageChanged: EventEmitter<any> = new EventEmitter();

  update() {
    if (this._pagerPageSize && this._pagerTotalItems) {
      this.pages = [];
      this.totalPages = Math.ceil(this._pagerTotalItems / this.pageSize);

      var maxLeft = this.currentPage - Math.floor(this.window / 2);
      console.log(maxLeft);
      var maxRight = this.currentPage + Math.floor(this.window / 2);

      if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = this.window;
      }

      if (maxRight > this.totalPages) {
        maxRight = this.totalPages - (this.window - 1);
        maxRight = this.totalPages;

        if (maxLeft < 1) {
          maxLeft = 1;
        }
      }

      if (this.totalItems >= this.pageSize) {
        for (let i = maxLeft; i < maxRight + 1; i++) {
          // console.log(i);
          this.pages.push(i);
        }
      }
      return;
    }

    this.isVisible = false;
  }
  changePage(page: number, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    if (this.currentPage === page) {
      return;
    }
    this.currentPage = page;
    this.update();
    this.pageChanged.emit(page);
  }
  changeToAnotherPage(direction: number, event?: MouseEvent) {
    console.log("herre");
    let page: number = this.currentPage;
    console.log(page);
    if (direction === -1) {
      if (page > 1) {
        page = 1;
      }
    } else {
      if (page < this.totalPages) {
        page = this.totalPages;
      }
    }
    this.update();

    this.changePage(page, event);
  }

  ngOnInit() {}
}
