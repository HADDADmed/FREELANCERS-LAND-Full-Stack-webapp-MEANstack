import { Component } from '@angular/core';
import { UserService } from 'src/app/models-services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  user!:User;
  categries:String[]=[
    "Graphic Design",
    "Writing and Content Creation",
    "Web Development",
    "Video Editing",
    "Translation",
    "Illustration",
    "Transcription",
    "Bookkeeping",
    "Voice Over",
    "Proofreading"
  ];

  constructor(private userService:UserService){
    userService.userObservable.subscribe((newUser)=>{
      this.user  = newUser;
    })

  }

  scrollAmount = 360; // Amount of scroll in pixels
  scrollDuration = 400; // Duration of the scroll animation in milliseconds

  leftScroll() {
    const list = document.getElementById('categories'); // Get the element to scroll
    const scrollLeft = list!.scrollLeft; // Get the current scroll position
    const targetScrollLeft = scrollLeft - this.scrollAmount; // Calculate the target scroll position

    this.animateScroll(list!, scrollLeft, targetScrollLeft); // Initiate the scroll animation
  }

  rightScroll() {
    const list = document.getElementById('categories'); // Get the element to scroll
    const scrollLeft = list!.scrollLeft; // Get the current scroll position
    const targetScrollLeft = scrollLeft + this.scrollAmount; // Calculate the target scroll position

    this.animateScroll(list!, scrollLeft, targetScrollLeft); // Initiate the scroll animation
  }

  animateScroll(element: HTMLElement, start: number, end: number) {
    const startTime = performance.now(); // Get the start time of the animation

    const scroll = () => {
      const currentTime = performance.now(); // Get the current time
      const timeElapsed = currentTime - startTime; // Calculate the elapsed time
      const scrollProgress = this.easeInOutQuad(timeElapsed, start, end - start); // Calculate the scroll position based on the elapsed time

      element.scrollLeft = scrollProgress; // Update the scroll position of the element

      if (timeElapsed < this.scrollDuration) {
        requestAnimationFrame(scroll); // Continue the animation until the duration is reached
      }
    };

    requestAnimationFrame(scroll); // Start the animation
  }

  easeInOutQuad(t: number, b: number, c: number) {
    t /= this.scrollDuration / 2;
    if (t < 1) return c / 2 * t * t + b; // Easing equation for the first half of the animation
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b; // Easing equation for the second half of the animation
  }



}
