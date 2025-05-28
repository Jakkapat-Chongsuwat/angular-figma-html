import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-button",
  templateUrl: "./bootstrap-button.component.html",
  styleUrls: ["./bootstrap-button.component.scss"],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BootstrapButtonComponent {
  @Input() text: string = "Button";
  @Input() variant: "btn" | "btn-outline" = "btn-outline";
  @Input() color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "info"
    | "warning" = "primary";
}
