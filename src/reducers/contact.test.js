import reducer from './contact'

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, {type:'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('adds a contact', () => {
    const startState = {
      contacts: [
        {id: 1, firstName:'Bruce', lastName: 'Wayne', phone: '555-555-5555'},
        {id: 2, firstName:'Clark', lastName: 'Kent', phone: '555-555-5555'},
        {id: 3, firstName:'Diana', lastName: 'Prince', phone: '555-555-5555'}
      ]
    }
    const expectedState = {
      contacts: [
        {id: 1, firstName:'Bruce', lastName: 'Wayne', phone: '555-555-5555'},
        {id: 2, firstName:'Clark', lastName: 'Kent', phone: '555-555-5555'},
        {id: 3, firstName:'Diana', lastName: 'Prince', phone: '555-555-5555'},
        {id: 4, firstName:'Arthur', lastName: 'Curry', phone: '555-555-5555'}
      ]
    }
    const action = {type:'CONTACT_ADD', payload: {id: 4, name:'Added contact', isComplete: false}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})
