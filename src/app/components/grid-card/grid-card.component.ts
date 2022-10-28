import { Component, Input } from "@angular/core";

@Component({
  selector: "grid-card",
  templateUrl: "grid-card.component.html",
  styleUrls: ["grid-card.component.css"],
})
export class GridCard {
  @Input()
  text1: string = " ipsum dolor sit amet. Velit officia lorem ipsum dolor consequat duis enim velit mollit.​";
  @Input() Lorem;
  image_src: string = "/assets/photos/car.jpg";
  @Input()
  text: string = "Auto Body Repair";
  @Input()
  image_alt: string = "image";

  constructor() {}
}
