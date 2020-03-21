import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  usersFound;
  totalUsersFound;
  pageNumber = 1;
  pageSize = 20;
  searchWord: string = "";
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.searchWord = this.route.snapshot.queryParamMap.get("searchTerm");
    this.getUsers(this.searchWord);
  }

  pageChanged(page: number) {
    console.log("here", page);
    this.pageNumber = page;
    this.getUsers(this.searchWord);
  }

  getUsers(searchWord) {
    this.dataService
      .getCorrespondingUsers(searchWord, this.pageNumber, this.pageSize)
      .subscribe(response => {
        this.usersFound = response.items;
        this.totalUsersFound = response.total_count;
        console.log(this.usersFound);
      });
  }
  routeToSingleUser() {
    let id = this.usersFound.login;
    console.log(id);
  }
}
