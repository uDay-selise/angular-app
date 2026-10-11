import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <div style="font-family: sans-serif; padding: 2rem">
      <h1>Studio Compatibility Test: Angular</h1>
      <p>This is a plain Angular app with no React in it at all. Studio should reject this import.</p>
      <button (click)="count = count + 1">Clicked {{ count }} times</button>
    </div>
  `,
})
export class AppComponent {
  count = 0;
}
