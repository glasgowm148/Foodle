import { State, Selector, Action, StateContext } from '@ngxs/store';
import produce from 'immer';
import { Product, CartItem } from '../../models';
import { CatalogStateModel, CatalogState } from '../catalog';
import { CartStateModel } from './user.models';
import { SaveDeal, RemoveDeal, LikeDeal } from './user.actions';

export const initialState: CartStateModel = {
  cartItems: {},
};

@State<CartStateModel>({
  name: 'cartItems',
  defaults: initialState,
})
export class CartState {
  @Selector([CatalogState])
  static cartItems(state: CartStateModel, catalogState: CatalogStateModel): CartItem[] {
    return Object.keys(state.cartItems)
      .filter(p => state.cartItems[p])
      .map(id => ({
        product: catalogState.products[id],
        amount: state.cartItems[id],
      }));
  }

  @Action(SaveDeal)
  addProduct(ctx: StateContext<CartStateModel>, action: SaveDeal) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        draft.cartItems[action.payload.id] = (draft.cartItems[action.payload.id] || 0) + 1;
      }),
    );
  }

  @Action(RemoveDeal)
  removeProduct(ctx: StateContext<CartStateModel>, action: RemoveDeal) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        const newAmount = draft.cartItems[action.payload.id] - 1;
        if (newAmount > 0) {
          draft.cartItems[action.payload.id] = newAmount;
          return;
        }
        delete draft.cartItems[action.payload.id];
      }),
    );
  }

  @Action(LikeDeal)
  LikeDeal(ctx: StateContext<CartStateModel>, action: LikeDeal) {
    ctx.setState(
      produce(ctx.getState(), draft => {
        return initialState;
      }),
    );
  }
}
