import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  contract$: any;

  ngOnInit() {
    this.contract$ = of(this.contractData.result.data); // assume I am using http service here. and it is sending me the response json like contractData.
    of(1, 2, 4, 6, 8, 10).subscribe((nos) => console.log(nos));
    //const data$ = of([{'attr1': 'test', 'total' : 500}, {'attr1': 'test', 'total' : 500}]);
    const data$ = from([
      { attr1: 'test', total: 500 },
      { attr1: 'test', total: 500 },
    ]);
    const sub = data$.subscribe({
      next: (data) => {
        console.log(`Data received is :: ${data}`);
        console.log(JSON.stringify(data));
      },
      error: (err) => console.log(`Error occurred is :: ${err}`),
      complete: () => console.log('Operation completed'),
    });
  }

  contractData = {
    result: {
      data: [
        {
          number: 'CNTR0010065',
          sys_id: 'c1a667732f7f9910998ec886f699b6e6',
          vendor: 'Adobe Systems',
          starts: '2022-12-24',
        },
        {
          number: 'CNTR0010062',
          sys_id: 'f1c3b6052fbf1110998ec886f699b6ce',
          vendor: 'Creative Labs',
          starts: '2022-12-30',
        },
        {
          number: 'CNTR0009001',
          sys_id: '83be799c9770300000f8d7b8fa297500',
          vendor: 'Visio',
          starts: '2018-09-28',
        },
        {
          number: 'CNTR0010059',
          sys_id: '2540cac92ffb1110998ec886f699b63f',
          vendor: 'Creative Labs',
          starts: '',
        },
      ],
      message: 'Success',
      status: 200,
    },
  };
}
