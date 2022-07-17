import { Observable, of } from 'rxjs';
import { Flight } from '@flight-workspace/flight-lib';

export const flightSearchResultMock = [
  { id: 17, from: 'Graz', to: 'Hamburg', date: 'now', delayed: true },
  { id: 18, from: 'Vienna', to: 'Barcelona', date: 'now', delayed: true },
  { id: 19, from: 'Frankfurt', to: 'Salzburg', date: 'now', delayed: true }
];

export const flightServiceMock = {
  find(from: string, to: string): Observable<Flight[]> {
    return of(flightSearchResultMock);
  },
  // Implement the following members only if this code is used in your Component
  flights: [] as Flight[],
  load(from: string, to: string): void {
    this.find(from, to).subscribe((f) => {
      this.flights = f;
    });
  }
};
