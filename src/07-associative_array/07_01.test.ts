type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '0': {id: 101, name: 'Egor'},
        '1': {id: 125712, name: 'Vasilii'},
        '2': {id: 1212, name: 'Vlad'},
        '3': {id: 1, name: 'Evgenii'},
    }
})

test('should update corresponding user from obj', () => {
    users['1'].name = 'Jeka'
    expect(users['1']).toEqual({id: 1, name: 'Jeka'});
})

test('should delete corresponding user from obj', () => {
    delete users['1']
    expect(users['1']).toBeUndefined()
})