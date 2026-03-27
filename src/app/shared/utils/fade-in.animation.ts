import { animate, style, transition, trigger } from "@angular/animations";

export function fadeIn() {
  return [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('200ms',
          style({ opacity: 1 })
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })
        )
      ])
    ])
  ]
}
