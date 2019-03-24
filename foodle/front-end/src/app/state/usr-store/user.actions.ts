export class SaveDeal {
  static readonly type = '[Product List] Add to cart';
  constructor(public payload: { id: Int16Array }) {}
}

export class RemoveDeal {
  static readonly type = '[Product List] Remove from cart';
  constructor(public payload: { id: Int16Array }) {}
}

export class LikeDeal {
  static readonly type = '[Cart] Empty cart';
}
