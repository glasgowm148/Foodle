export class SaveDeal {
  static readonly type = '[Product List] Add to cart';
  constructor(public payload: { id: Int16Array }) {}
}
