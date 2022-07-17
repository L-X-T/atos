import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AirportService } from '@flight-workspace/flight-lib';

import { AirportComponent } from './airport.component';

describe('AirportComponent', () => {
  let component: AirportComponent;
  let fixture: ComponentFixture<AirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirportComponent],
      imports: [HttpClientTestingModule],
      providers: [AirportService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
