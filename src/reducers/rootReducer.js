const initialState = {
  articles: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      const newarticles = [...state.articles, ...action.articles];
      console.log(newarticles);
      return { articles: [...state.articles, ...action.articles] };
    case "USER_ERROR":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export default rootReducer;
