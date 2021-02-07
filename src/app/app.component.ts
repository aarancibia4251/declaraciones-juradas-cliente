import {Component, OnDestroy, OnInit} from '@angular/core';
import {SingleSpaProps, singleSpaPropsSubject} from '../single-spa/single-spa-props';
import {Subscription} from 'rxjs';
// @ts-ignore
import { publicApiFunction } from '@xeiteam/utility-store';

@Component({
  selector: 'declared-jurisdictions-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  title = 'declared-jurisdictions-client';

  ngOnInit(): void {
    const value = publicApiFunction();
    console.log(value);
    this.subscription = singleSpaPropsSubject.subscribe(
      (props: any) => {
        this.singleSpaProps = props;
        console.log(this.singleSpaProps);
        // props.loggedInUser.then(res => console.log(res));
      },
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
