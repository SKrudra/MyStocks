import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {
  @Input() set dealy(ms: number) {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, ms);
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
