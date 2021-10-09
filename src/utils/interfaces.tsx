export type Item = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
  quantity?: number;
};

export interface Action {
  payload: Item[];
  type: string;
}

export interface State {
  products: Item[];
  wishlist: Item[];
  bags: Item[];
}

export interface DispatchState {
  payload: Item[];
  type: string;
}

export type Dispatch = (data: DispatchState) => {};
