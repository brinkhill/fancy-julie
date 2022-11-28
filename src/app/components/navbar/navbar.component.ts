import {
  Component,
  Input,
} from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.css"],
})
export class Navbar {
  @Input()
  image_alt: string = "top-logo";
  @Input()
  image_alt1: string = "footer-logo";
  @Input()
  text: string = "Follow us";
  @Input()
  PrimaryBtn: string =
    "Request A Quote";
  @Input()
  PrimaryBtn1: string = "Get started";

  constructor() {}
}
