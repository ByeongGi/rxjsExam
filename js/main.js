import Rx from 'rxjs/Rx';

/**
 * RXJS 기초 공부
 */
let source = Rx.Observable.range(0,10);
let subscription = source.subscribe(
    x => console.log('Next: ' + x),
    err => console.log('Error: ' + err),
    () =>console.log('Completed')
    );



