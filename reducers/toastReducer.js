export const toastReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [{ ...action.payload, id: Math.random() * 100 }, ...state]

    case "remove":
      return action.payload

    default:
      throw new Error("invalid action type")
  }
}
