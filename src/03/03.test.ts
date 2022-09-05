import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('does student lives in city', () => {

    let result1 =  doesStudentLiveIn(student,'Moscow');
    let result2 =  doesStudentLiveIn(student,'Rybnitsa');

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

