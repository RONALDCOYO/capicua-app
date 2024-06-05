import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapicuaCheckerComponent } from './capicua-checker.component';

describe('CapicuaCheckerComponent', () => {
  let component: CapicuaCheckerComponent;
  let fixture: ComponentFixture<CapicuaCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapicuaCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapicuaCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
