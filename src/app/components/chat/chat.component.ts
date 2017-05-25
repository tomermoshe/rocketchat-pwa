import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {

  public channels = ['channel1', 'channel2', 'kentak', 'tomer'];

  constructor(private menuCtrl: MenuController, private router: Router, private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.menuCtrl.open();
  }

  gotoChannel(channelId) {
    this.router.navigate(['channel', channelId], {relativeTo: this.route});
  }

}
