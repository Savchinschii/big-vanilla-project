export const usersObj = {
    '0': 'Egor',
    '1': 'Vasilii',
    '2': 'Vlad',
    '3': 'Evgenii'
}

let user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Evgenii'

export const usersArray = [
    {id: 101, name: 'Egor'},
    {id: 125712, name: 'Vasilii'},
    {id: 1212, name: 'Vlad'},
    {id: 1, name: 'Evgenii'},
]

// usersArray.find(u => u.id === 1)
// let usersCopy = [...usersArray.filter(), user]
// let usersArray = usersArray.filter(u => u.id !== user.id)