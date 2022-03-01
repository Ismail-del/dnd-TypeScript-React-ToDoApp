export interface Todo {
  id: string;
  text: string;
  modifText: boolean;
  lineThrough: boolean;

  // assigned: [
  //   | {
  //       id: string;
  //       text: string;
  //       modifText: boolean;
  //       lineThrough: boolean;
  //     }
  //   | {}
  // ];
}

export const intitalState = {
  available: [{}],
  assigned: [{}],
};

export interface TodoNew {
  available: Todo[];
}
