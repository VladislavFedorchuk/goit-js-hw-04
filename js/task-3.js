const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        this.username = newName
    } ,
    updatePlayTime(hours) {
        this.playTime = hours + this.playTime
    } ,
    getInfo() {
        return this
    },
    
}

console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
