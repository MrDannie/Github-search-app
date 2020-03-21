import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.css"]
})
export class SearchBoxComponent implements OnInit {
  constructor(private router: Router) {}
  title = "Github-search-app";
  _searchTerm: string = "";
  ngOnInit() {}

  @Input() get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value) {
    this._searchTerm = value;
  }

  search() {
    let searchWord = this._searchTerm;
    this.router.navigate(["/users", searchWord], {
      queryParams: { searchTerm: this._searchTerm }
    });
  }
}
