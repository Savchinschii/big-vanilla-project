function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string,
    age: number,
    address: {title : string}
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Egor',
        age: 21,
        address: {
            title: 'Chishinau'
        }
    }
    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    let users = [
        {
            name: 'Egor',
            age: 21
        },
        {
            name: 'Egor',
            age: 21
        },
    ]
    let admins = users

    admins.push({name: 'Bandit', age: 12})

    expect(users[2]).toEqual({name: 'Bandit', age: 12})

})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount++;

    expect(users[2]).toEqual({name: 'Bandit', age: 12})

})

test('reference type test', () => {

    let address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Egor',
        age: 21,
        address: address
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Anastasia',
        age: 22,
        address: address
    }

    address.title = 'USA'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('USA')
})

test('reference type array test', () => {

    let address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Egor',
        age: 21,
        address: address
    }

    let user2: UserType = {
        name: 'Anastasia',
        age: 22,
        address: address
    }

    let users = [user, user2, {name: 'Jeka', age: 21, address: address}]

    let admins = [user, user2]

    admins[0].name = 'Boss'

    expect(users[0].name).toBe('Boss')
    expect(user.name).toBe('Boss')
})

test('sort array test', ()=> {

    const letters = ['c', 'd', 'a', 'z', 'e']

    letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
});