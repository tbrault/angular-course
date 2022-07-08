import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'beach',
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'mountain',
      url: 'https://images.unsplash.com/photo-1618278942403-e973260cc425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnQlMjBmdWppfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'river',
      url: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'forest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
  ];

  updateCurrentImage(index: number) {
    this.currentPage = index;
  }

  goPreviousImage() {
    --this.currentPage;
  }

  goNextImage() {
    ++this.currentPage;
  }
}
