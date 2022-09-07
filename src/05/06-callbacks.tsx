import React, {ChangeEvent, MouseEvent} from "react";
// const callback = (): number => {
//     alert('hey')
//     return 12;
// }
// window.setTimeout(callback,1000)

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }

    const saveUser = () => {
        console.log('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }


    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Egor</textarea>
        <input onChange={onAgeChanged} type={"number"}/>

        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}