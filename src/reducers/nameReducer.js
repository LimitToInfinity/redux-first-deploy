export const nameReducer = (state = 'person', action) => {
  switch (action.type) {
    case "stacey":
      return "Stacey";
    case "eric":
      return "Eric";
    case "amr":
      return "amr";
    default:
      return state;
  }
}