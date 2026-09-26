import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Entity } from '../../../domain/model/bccore.entity';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
/**
 * @summary Presentation component that displays a single entity in a card format.
 */
@Component({
  selector: 'app-entity-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslatePipe],
  templateUrl: './entity-item.html',
  styleUrl: './entity-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityItem {
  entity = input.required<Entity>();
}

