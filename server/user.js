const users=[];
const addUser=({id,name,room})=>{
    name=name.toLowerCase();
    room=room.toLowerCase();
    const existUser=users.find((user)=>user.room==room && user.name==name);

    if(existUser){
        return {error:"Username is taken "}
    }

    const user={id,name,room};

    users.push(user);
    return {users};
}

module.exports={addUser}