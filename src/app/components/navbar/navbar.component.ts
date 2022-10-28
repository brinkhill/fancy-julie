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
  image_src: string =
    "assets/images/conecept-logo-01.png";
  @Input()
  image_src1: string =
    "assets/images/conecept-logo-01.png";
  @Input()
  image_alt: string = "top-logo";
  @Input()
  image_alt1: string = "footer-logo";
  @Input()
  text: string = "Follow us";
  @Input()
  PrimaryBtn: string =
    "Call us: (434) 229-4864";
  @Input()
  PrimaryBtn1: string = "Get started";

  constructor() {}
}
