import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs";

interface ContactInfo {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "address-book";

  contactForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl(""),
    phoneNumber: new FormControl(""),
  });

  saveContactInfo$: Observable<ContactInfo>;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  onSubmit() {
    localStorage.setItem("form-data", JSON.stringify(this.contactForm.value));

    this.saveContactInfo$.subscribe((result) => {
      const contactData = {
        firstName: result.firstName,
        lastName: result.lastName,
        address: result.address,
        email: result.email,
        phoneNumber: result.phoneNumber,
      };
    });

    this.cd.detectChanges();
    this.contactForm.reset();
  }

  updateContact() {
    // TO DO: patch value from user
    // this.contactForm.patchValue({ firstName: "James", lastName: "Parker" });
  }

  editContact() {}

  deleteContact() {}

  displayContacts() {}

  sortContacts() {}
}
