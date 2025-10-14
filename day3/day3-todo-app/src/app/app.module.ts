import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TitlecasePipe } from './components/titlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    TitlecasePipe
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
