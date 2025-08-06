# Angular Template Test

Since ng-content does not allow duplicates, we need to use ng-template.  Here are the files that got this working:

## main.ts

```ts
import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ChildComponent],
  providers: [ServiceService],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-parent>
    @for(item of children; track $index) {
      <app-child [colorName]="item.name" [colorValue]="item.value" [contentTemplate]="myContent">
        <!-- <div class="my-select">
          <b>{{ item.name }} Title</b>
          <img class="childImg" src="https://www.dummyimage.com/{{item.urlPart}}.png" />
        </div> -->
      </app-child>
      <ng-template #myContent>
        @if($index !== 2) {
        <b>{{ item.name }} Title</b>
        <i>{{item.value}}</i>
        <img class="childImg" src="https://www.dummyimage.com/{{item.urlPart}}.png" />
        }
      </ng-template>
    }
    </app-parent>
  `,
  styles: `.childImg { width: 50px; margin: 4px; }`,
})
export class App {
  name = 'Angular';

  children = [
    { name: 'Gold', value: 'gold', urlPart: '100x80/fd0/000' },
    { name: 'Blue', value: 'blue', urlPart: '100x80/049/fff' },
    { name: 'Green', value: 'green', urlPart: '100x80/0a0/000' },
    { name: 'Red', value: 'red', urlPart: '100x80/a00/fff' },
  ];
}

bootstrapApplication(App);
```

## parent.component.ts

```ts
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [NgTemplateOutlet],
  // providers: [ServiceService],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  templateRef!: TemplateRef<any>;

  constructor(private _service: ServiceService) {}

  ngOnInit() {
    // this._service.elRef$.subscribe((elRef) => {
    //   console.log('parent sub elRef', elRef);
    // });

    this._service.tmpRef$.subscribe((tmplRef) => {
      console.log('parent sub tmplRef', tmplRef);
      this.templateRef = tmplRef;
    });

    // this._service.colorVal$.subscribe((colorVal) => {
    //   this.templateRef = this._service.get(colorVal);
    // });
  }
}
```

## parent.component.html

```html
<div>
  <div>parent component</div>
  <div class="parent-wrapper">
    <ng-template *ngTemplateOutlet="templateRef"></ng-template>
  </div>
  <ng-content></ng-content>
</div>
```


## child.component.ts

```ts
import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() colorName!: string;

  @Input() colorValue!: string;

  @Input() contentTemplate!: TemplateRef<any>;

  // @ViewChild('childTmplRef', { read: TemplateRef })
  // _childTmplRef!: TemplateRef<any>;

  // @ViewChild('childRef2') _childRef2!: ElementRef<HTMLElement>;

  constructor(private _service: ServiceService) {}

  ngOnInit() {}

  passTemplateRef(colorVal: string) {
    // console.log('tmplRef', this._childTmplRef.elementRef);
    // this._service.setTemplateRef(this._childTmplRef);
    // console.log('childRef2', this._childRef2);
    // this._service.setElementRef(this._childRef2);
    // this._service.setTemplateRef(this._childTmplRef);
    // this._service.add(colorVal, this._childTmplRef);
    // this._service.colorVal$.next(colorVal);
    this._service.tmpRef$.next(this.contentTemplate);
  }
}
```

## child.component.html

```html
@if(colorValue) {
<div style="margin-left: 20px;">
  <button type="button" (click)="passTemplateRef(colorValue)">
    <!-- <ng-container [ngTemplateOutlet]="childTmplRef"></ng-container> -->
    <!-- <div #childRef2>
      <ng-template *ngTemplateOutlet="childTmplRef"></ng-template>
    </div> -->
    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
    <div>{{ colorName }}</div>
  </button>
</div>
<!-- <ng-template #childTmplRef>
  <ng-content></ng-content>
</ng-template> -->
}
```


## service.service.html

```ts
import { ElementRef, Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  // elRef$ = new Subject<ElementRef<HTMLElement>>();

  tmpRef$ = new Subject<TemplateRef<any>>();

  // colorVal$ = new Subject<string>();

  constructor() {}

  // templateRef?: TemplateRef<any>;

  // elRef?: ElementRef<HTMLElement>;

  // setTemplateRef(tmplRef: TemplateRef<any>) {
  //   this.templateRef = tmplRef;
  //   this.tmpRef$.next(tmplRef);
  // }

  // setElementRef(elRef: ElementRef<HTMLElement>) {
  //   // console.log('service setref', elRef);
  //   this.elRef = elRef;
  //   this.elRef$.next(elRef);
  // }

  // templates: { [index: string]: TemplateRef<any> } = {};

  // add(name: string, ref: TemplateRef<any>) {
  //   this.templates[name] = ref;
  // }

  // get(name: string) {
  //   return this.templates[name];
  // }
}
```