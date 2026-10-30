import { trigger, transition, style, animate } from '@angular/animations';

export function fadeIn() {
  return trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('{{ duration }}ms ease-out', style({
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ], { params: { duration: 200 } })
  ]);
}
