

import {propertyMap}  from '../functions/propertyMap';
import { statusConverter} from '../functions/statusConverter';

export class DealModel {

  public id: Int16Array;
  @propertyMap('title')
  public info: string;

  @statusConverter
  public completed: string;
  public picture: ImageBitmap;
  public been_liked: boolean;
  public been_disliked: boolean;
  public likes: Int16Array;
  public url: string;
  public category: string;
  public slug: string;
  public address: string;

  constructor() {
    this.id = null;
    this.info = null;
    this.picture = null;
    this.been_liked = null;
    this.been_disliked = null;
    this.likes = null;
    this.url = null;
    this.category = null;
    this.slug = null;
    this.address = null;

  }

}
