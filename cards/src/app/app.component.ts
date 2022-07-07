import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      imageUrl: 'assets/tree.jpeg',
      title: 'Neat Tree',
      username: '@nature',
      content: 'Saw the awesome tree',
    },
    {
      imageUrl: 'assets/biking.jpeg',
      title: 'Biking outside',
      username: '@biker',
      content: 'I jump with my bike',
    },
    {
      imageUrl: 'assets/mountain.jpeg',
      title: 'Snowy mountain',
      username: '@krasus',
      content: 'Ouah the mountain',
    },
  ];
}
