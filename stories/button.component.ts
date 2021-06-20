import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { Direction, Directionality } from "@angular/cdk/bidi";
import { Subscription } from "rxjs";

@Component({
  selector: "storybook-button",
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ direction }}
  </button>`,
  styleUrls: ["./button.css"],
})
export default class ButtonComponent implements OnDestroy {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: "small" | "medium" | "large" = "medium";

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = "Button";

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? "storybook-button--primary"
      : "storybook-button--secondary";

    return ["storybook-button", `storybook-button--${this.size}`, mode];
  }

  direction: Direction = "ltr";

  private sub = new Subscription();

  constructor(directionality: Directionality) {
    this.sub = directionality.change.subscribe((dir) => {
      this.direction = dir;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
