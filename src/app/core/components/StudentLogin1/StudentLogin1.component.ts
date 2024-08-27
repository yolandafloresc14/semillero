import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: "student-login1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./StudentLogin1.component.html",
  styleUrls: ["./StudentLogin1.component.css"],
})
export class StudentLogin1 {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  /** Value props */
  @Input() aLUMNO: string = "";
  @Input() icon: string = "";
  /** Style props */
  @Input() propBackgroundColor: string | number = "";
  @Input() propBackgroundColor1: string | number = "";
  /** Action props */
  @Input() onStudentButtonClick: () => void = () => {};

  onStudentButtonClick1() {
    this.router.navigate(["/studentlogin"]);
  }
  get studentLoginStyle() {
    return {
      "background-color": this.propBackgroundColor,
    };
  }

  get studentButtonStyle() {
    return {
      "background-color": this.propBackgroundColor1,
    };
  }
}
