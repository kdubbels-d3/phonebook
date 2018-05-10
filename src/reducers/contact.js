const initState = {
  contacts: [
    {id: 1, firstName:'Bruce', lastName: 'Wayne', phone: '555-555-5555'},
    {id: 2, firstName:'Clark', lastName: 'Kent', phone: '555-555-5555'},
    {id: 3, firstName:'Diana', lastName: 'Prince', phone: '555-555-5555'}
  ],
  currentFirstName: 'Arthur',
  currentLastName: 'Curry',
  currentPhone: '555-555-5555'
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'CONTACT_ADD':
      return {...state, contacts: state.contacts.concat(action.payload)}
    default:
      return state

  }
}
