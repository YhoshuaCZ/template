import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Entity } from '../../../domain/model/bccore.entity';
import { EntityItem } from '../entity-item/entity-item';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-entity-list',
  standalone: true,
  imports: [EntityItem, TranslatePipe],
  templateUrl: './entity-list.html',
  styleUrl: './entity-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityList {
  entities = input.required<Entity[]>();
}
