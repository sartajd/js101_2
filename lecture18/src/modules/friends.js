const friends = []

export function getFriends(){
    for(let friend of friends){
        console.log(friend)
    }
}

export function add(name){
    friends.push(name)
}

