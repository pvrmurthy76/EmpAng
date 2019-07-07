import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  private searchTerms = new Subject<string>();

  constructor(private empService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employees = this.searchTerms.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap((term: string) => this.empService.searchEmployees(term)),
    );

  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
