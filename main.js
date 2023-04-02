db.collection('matches').get().then((snapshot) => {
    console.log(snapshot)
})