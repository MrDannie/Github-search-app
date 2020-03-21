import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-user",
  templateUrl: "./single-user.component.html",
  styleUrls: ["./single-user.component.css"]
})
export class SingleUserComponent implements OnInit {
  singleUser = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let userName = this.route.snapshot.queryParamMap.get("userName");
    this.dataService.getSingleUser(userName).subscribe(response => {
      this.singleUser = [response];
      console.log(this.singleUser);
    });
  }
}
