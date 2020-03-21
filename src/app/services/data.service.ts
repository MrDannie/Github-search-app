import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCorrespondingUsers(userName, pageNumber, pageSize): Observable<any> {
    return this.http
      .get(
        `https://api.github.com/search/users?q=${userName}&page=${pageNumber}&per_page=${pageSize}`
      )
      .pipe(
        map(result => {
          return result;
        }),
        catchError(this.handleError)
      );
  }

  getSingleUser(user): Observable<any> {
    return this.http.get(`https://api.github.com/users/${user}`).pipe(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error("server error:", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || "Node.js server error");
  }
}
