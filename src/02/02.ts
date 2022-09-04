type TechnologiesType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: 'Egor',
    age: 21,
    isActive: true,
    address: {
        streetTitle: '8 Marta',
        city: {
            title: 'Rybnitsa',
            countryTitle: 'Moldova'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'TS'
        },
    ]
}

console.log(student.age)