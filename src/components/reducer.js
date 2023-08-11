export const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Pomegranate',
            number: '1562494',
        },
        {
            id: 2,
            name: 'Scaramouche',
            number: '31569451',
        },
        {
            id: 3,
            name: 'Mista',
            number: '4444444',
        },
    ]
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        return {
          ...state,
          contacts: [...state.contacts, action.payload]
        };
  
      case "DELETE_CONTACT":
        return {
          ...state,
          contacts: [...state.contacts.filter(cont => cont.id !== action.payload)]
        };
  
      default:
        return state;
    }
  };
  