import { Direction, Directionality } from "@angular/cdk/bidi";
import {
  EventEmitter,
  Injectable,
  OnDestroy,
  NgZone,
} from "@angular/core";
import addons from "@storybook/addons";
import { fromEvent, Subscription } from "rxjs";
import { map, startWith } from "rxjs/operators";

/**
 * This service mimics a CDK `dir` directive to notify components of directionality changes based on the storybook-addon-rtl plugin.
 */
@Injectable()
export class StorybookDirectionalityService
  implements Directionality, OnDestroy
{
  get value() {
    return this._value;
  }
  readonly change = new EventEmitter<Direction>();
  private _value: Direction = "ltr";
  private _subscription?: Subscription;

  constructor(private zone: NgZone) {
    const directionalityChangeEvent = "storybook/rtl/rtl-update";
    const channel = addons.getChannel();
    const defaultDirection = "ltr";
    // channel.last returns an array that contains one element: the most recent event with the given ID.
    // This is useful because we need an initial value when you switch stories and this service gets re-initialized.
    this._value =
      channel.last(directionalityChangeEvent)?.[0].direction ??
      defaultDirection;

    this._subscription = fromEvent<{ direction: Direction }>(
      channel,
      directionalityChangeEvent
    )
      .pipe(
        map((event) => event.direction),
        startWith(this.value)
      )
      .subscribe((dir) => {
        if (this.value !== dir) {
          // Make changes inside angular zone so change detection is run.
          this.zone.run(() => {
            this._value = dir;
            this.change.emit(dir);
          });
        }
      });
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }
}
