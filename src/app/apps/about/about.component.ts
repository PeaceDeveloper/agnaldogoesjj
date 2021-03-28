import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  

  constructor(public service:ServiceblogService, private router: Router) {
    this.service.showEdit=false;
    

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          const tree = router.parseUrl(router.url);
          if (tree.fragment) {
              const element = document.querySelector("#" + tree.fragment);
              if (element) { element.scrollIntoView(); }
          }
       }
  });
  }

}
