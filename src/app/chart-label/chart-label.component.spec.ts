import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartLabelComponent } from './chart-label.component';

describe('ChartLabelComponent', () => {
  let component: ChartLabelComponent;
  let fixture: ComponentFixture<ChartLabelComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLabelComponent ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLabelComponent);
    component = fixture.componentInstance;
    component.text = 'hello';
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display right text in component', (() => {
    const expected: string = 'hello';
    const text = component.text;
    expect(text).toEqual(expected);
  }));

});
