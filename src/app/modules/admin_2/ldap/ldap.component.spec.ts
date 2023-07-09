import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LdapComponent} from './ldap.component';

describe('LdapComponent', () => {
  let component: LdapComponent;
  let fixture: ComponentFixture<LdapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LdapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LdapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
