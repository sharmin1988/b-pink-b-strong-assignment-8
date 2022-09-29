const addToDb = (time) => {
    const breakTime = {time}
localStorage.setItem('Break-time', JSON.stringify (breakTime))
}

export {
   addToDb
}