import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewModule } from './view/view.module';

import { AppComponent } from './app.component';
import { Eg1DateComponent } from './eg1-date/eg1-date.component';
import { Eg2UserAddressComponent } from './eg2-user-address/eg2-user-address.component';
import { Eg4LoggerService } from './services/eg4-logger.service';
import { Eg5HttpClientComponent } from './eg5-http-client/eg5-http-client.component';
import { Eg6PipesComponent } from './eg6-pipes/eg6-pipes.component';
import { TruncatePipe } from './eg6-pipes/truncate.pipe';
import { Eg7BlogPostListComponent } from './eg7-parent-child/eg7-blog-post-list/eg7-blog-post-list.component';
import { Eg7BlogPostTileComponent } from './eg7-parent-child/eg7-blog-post-tile/eg7-blog-post-tile.component';
import { Eg7PaginatorComponent } from './eg7-parent-child/eg7-paginator/eg7-paginator.component';
import { Eg8HighlightDirective } from './eg8-directive/eg8-highlight.directive';
import { Eg9ShellPatternComponent } from './eg9-content-projection/eg9-shell-pattern/eg9-shell-pattern.component';



@NgModule({
  declarations: [
    AppComponent,
    Eg1DateComponent,
    Eg2UserAddressComponent,
    Eg5HttpClientComponent,
    Eg6PipesComponent,
    TruncatePipe,
    Eg7BlogPostListComponent,
    Eg7BlogPostTileComponent,
    Eg7PaginatorComponent,
    Eg8HighlightDirective,
    Eg9ShellPatternComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,// importing user created module to use <eg3-display>
    HttpClientModule// For httpClient eg5
  ],
  providers: [Eg4LoggerService,  //Services needs to be registered here
    TruncatePipe], //Pipe used as Service
  bootstrap: [AppComponent]
})
export class AppModule { }
