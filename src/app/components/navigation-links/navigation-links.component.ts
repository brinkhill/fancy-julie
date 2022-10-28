import { Component, Input } from "@angular/core";
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "navigation-links",
  templateUrl: "navigation-links.component.html",
  styleUrls: ["navigation-links.component.css"],
})
export class NavigationLinks {
  @Input()
  text2: string = "Location";
  @Input()
  text3: string = "About";
  @Input()
  rootClassName: string = "";
  @Input()
  text4: string = "FAQ";
  @Input()
  text: string = "Home";
  @Input()
  text1: string = "Services";

  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  services() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById("services").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  location() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById("location").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  about() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  faq() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById("faq").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
