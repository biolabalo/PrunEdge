const initialState = {
    ajaxData : []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_ASYNC':
          return { 
          ...state,
           ajaxData :  [ 
            { title: 'Invoice',  amount: 12023 },
            { title: 'Application',  amount: 300 },
            { title: 'Legal Documents',  amount: 15 },
            { title: 'Finance  Statement',  amount: 19 },
            { title: 'Reports',  amount: 12 }
          ]
          };
        default:
          return state;
      }
};

export default reducer;