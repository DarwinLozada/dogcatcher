export const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return action.payload

    case "signOut":
      return null

    default:
      throw new Error("invalid action type")
  }
}
