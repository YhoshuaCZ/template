/**
 * @summary Represents a entity in the business domain.
 */
export class Entity {
  /**
   * parameters of the class entity
   */
  id: number;
  title: string;
  type:string;
  episodes: number;
  image: string;
  status:string;
  score:number;
  /**
   * constructor of entity
   */
  constructor() {
    this.id = 0;
    this.title = '';
    this.type = '';
    this.episodes = 0;
    this.image = '';
    this.status = '';
    this.score = 0;
  }
}
