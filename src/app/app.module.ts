import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { AppComponent } from './app.component';

// export { InfiniteScroll }   
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // InfiniteScrollModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  // exports: [InfiniteScroll],
  bootstrap: [AppComponent]
})
export class AppModule { }
