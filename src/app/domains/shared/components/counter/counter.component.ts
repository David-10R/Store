import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor(){
    // No ASYNC
    // before render
    // Corre una vez
    console.log('Constructor');
    console.log('-'.repeat(10));

  }

  ngOnChanges(change: SimpleChange){
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(change);
  }

  ngOnInit(){
    // after render
    // Corre una vez
    // Async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('menssage =>', this.message);

  }

  ngAfterViewInit(){
    //after render
    // Si los ya fuero pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));

  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

}
