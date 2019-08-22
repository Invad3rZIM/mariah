export default function reducer(state={page:"PRESENT", minipage:""}, action) {

    switch (action.type) {
      case "PRESENT": {
        state = {...state, page: "PRESENT"}
        break
      }
      case "PAST": {
        state = {...state, page: "PAST"}
        state = {...state, minipage: ""}
        break
      }
      case "FUTURE": {
        state = {...state, page: "FUTURE"}
        state = {...state, minipage: ""}
        break
      }

      case "WALLS": {
        state = {...state, minipage: "WALLS"}
        break
      }
      case "COLLECTIONS": {
        state = {...state, minipage: "COLLECTIONS"}
        break
      }
      case "GIFTS": {
        state = {...state, minipage: "GIFTS"}
        break
      }

      case "FAVORITES": {
        state = {...state, minipage: "FAVORITES"}
        break
      }
      case "PROGRESSION": {
        state = {...state, minipage: "PROGRESSION"}
        break
      }

      default: break
    }

    return state
}
