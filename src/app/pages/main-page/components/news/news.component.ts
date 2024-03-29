import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {A} from "@angular/cdk/keycodes";
import {GlobalConstants} from "../../../../global-constants";
import {min} from "rxjs";
import {New} from 'src/app/core/models/new';
import {NewsService} from 'src/app/core/services/news.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  countOfNews = 0;
  ables: Array<boolean> = Array<boolean>(0);
  data: Array<string> = Array<string>(0);
  pageId = 0;
  news: New[] = [];

  constructor(private router: Router, private newsService: NewsService, private _route: ActivatedRoute) {

  }

  createNewsList() {
    this.countOfNews = this.news.length;
  }

  createSwitcher() {
    let pagesCount = (this.countOfNews + GlobalConstants.countOfNewsPerPage - 1) / (GlobalConstants.countOfNewsPerPage);
    pagesCount = Math.floor(pagesCount);
    if (pagesCount == 1) {
      return
    }

    if (pagesCount <= 9) {

      this.data.push("<i class='fas fa-angle-left'></i>");
      this.ables.push(true)

      let x = 1;
      while (x <= pagesCount) {
        this.data.push(x.toString());
        this.ables.push(true)
        x += 1;
      }
      this.ables.push(true)
      this.data.push("<i class='fas fa-angle-right'></i>");
    } else {
      this.data.push("<i class='fas fa-angle-left'></i>");
      this.ables.push(true)
      if (this.pageId < 4) {
        let x = 1;
        while (x <= 6) {
          this.data.push(x.toString());
          this.ables.push(true)
          x += 1;
        }
        this.data.push("...");
        this.ables.push(false)
        this.data.push(pagesCount.toString());
        this.ables.push(true)
      } else if (this.pageId >= 4 && this.pageId <= pagesCount - 4) {
        this.data.push("1")
        this.ables.push(true)
        if (this.pageId - 2 != 1) {
          this.data.push("...")
          this.ables.push(false)
        }
        let f = 0;
        for (let i = this.pageId - 1; i <= this.pageId - 1 + 4; i++) {
          this.data.push(i.toString());
          this.ables.push(true)
          f = i;
        }
        if (f - 1 + 2 != pagesCount) {
          this.data.push("...")
          this.ables.push(false)
        }
        this.data.push(pagesCount.toString())
        this.ables.push(true)
      } else {
        this.data.push("1")
        this.ables.push(true)
        this.data.push("...");
        this.ables.push(false)
        for (let i = pagesCount - 4; i <= pagesCount; i++) {
          this.data.push(i.toString());
          this.ables.push(true)
        }
      }
      this.ables.push(true)
      this.data.push("<i class='fas fa-angle-right'></i>");
    }

    if (this.pageId == 0)
      this.ables[0] = false;
    else
      this.ables[0] = true;
    if (this.pageId == pagesCount - 1)
      this.ables[this.ables.length - 1] = false;
    else
      this.ables[this.ables.length - 1] = true;

  }

  switch_tabs(id: number) {
    if (!this.ables[id])
      return
    let x = 0;
    if (id == 0)
      x = this.pageId - 1;
    else if (id == this.data.length - 1)
      x = this.pageId - 1 + 2;
    else {
      x = parseInt(this.data[id]);
      x -= 1;
    }
    return x.toString();
  }

  isAble(id: number) {
    return this.ables[id];
  }

  getName(id: number): string {
    return this.data[id];
  }

  counter(i: number) {
    let range: Array<number> = Array<number>(0);
    for (let x = 0; x < i; x++) {
      range.push(x);
    }
    return range;
  }

  f(): void {
    this.createNewsList();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this._route.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.pageId = params.id;
      }
    )
    let pagesCount = (this.countOfNews + GlobalConstants.countOfNewsPerPage - 1) / (GlobalConstants.countOfNewsPerPage);
    pagesCount = Math.floor(pagesCount);
    if (isNaN(this.pageId) || this.pageId < 0 || this.pageId >= pagesCount) {
      this.router.navigate(["/"]);
    }
    this.createSwitcher();
  }

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe((data: New[]) => {
        this.news = data;
        this.f();
      });
  }

  isThis(id: number) {
    return this.data[id] == (this.pageId - 1 + 1 + 1).toString();
  }

  scrollTop(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  getNewsForPage(): New[] {
    let pageNews: New[] = [];
    for (let i = GlobalConstants.countOfNewsPerPage * this.pageId; i < Math.min(GlobalConstants.countOfNewsPerPage * (2 + (this.pageId-1)), this.countOfNews); i++) {
      pageNews.push(this.news[this.news.length - i - 1]);
    }
    return pageNews;
  }

}
