class User{
    name; 
    age;
    gender;
    description;
    image
    constructor(name, age, gender, description, image){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.image = image;
    }

    like() {}
    unlike() {}

    update(name, age, gender, description, image) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.image = image;
    }

    toHTML() {
        return `
        <div class="previous">
            <
        </div>

        <div class="user-container">
            

            <img src="${this.image}" />
            <div class="info">
                ${this.name}
                ${this.age}
                ${this.description}
            </div>
        </div>

        <div class="next">
            >
        </div>
        `
    }
}

class UserCollection{
    listUser;
    current;
    constructor() {
        this.listUser = [];
        this.current = 0;
    };

    addUser(user) {
        this.listUser.push(user)
    } 

    removeUser(index) {
        this.listUser.splice(index, 1)
    }

    show() {
        document.querySelector('#app').innerHTML= this.listUser[0].toHTML();
        this.listenUserClick()
    }

    previous() {
        console.log(this.current);
        if (this.current > this.listUser.length-1){
            this.current--;
            // document.querySelector('#app').innerHTML = 
            // this.listUser[this.current].toHTML();
            this.show();
        }
    }

    next() {
        if (this.current < this.listUser.length-1){
            this.current++;
            document.querySelector('#app').innerHTML=
            this.listUser[this.current].toHTML();
        }
    }

    listenUserClick() {
        document.querySelector('.previous').addEventListener('click', () =>{
            userCollection.previous();
        })
        
        document.querySelector('.next').addEventListener('click', () =>{
            userCollection.next();
        })
    }
}


const userCollection = new UserCollection();
const user1 = new User('moo', 21, 'male', 'thich cho meo', 'https://leadslive.io/wp-content/uploads/2017/05/Miniclip-8-Ball-Pool-Avatar-11.png')

userCollection.addUser(user1);

const user2 = new User('min', 31, 'female', 'thich doi', 'https://static.wikia.nocookie.net/moomin/images/f/f5/Muumin.png/revision/latest/top-crop/width/360/height/450?cb=20190411020609')
userCollection.addUser(user2)
userCollection.show()

userCollection.listenUserClick();
