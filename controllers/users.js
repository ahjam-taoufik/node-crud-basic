import {v4 as uuidv4} from 'uuid'
uuidv4();

let users = []

export const getUsers=(req,res)=>{
    res.send(users)
 }

 export const addUser=(req,res)=>{
    const user =req.body
//   const userId=uuidv4();
//   const userWithId={ ...user, id:userId  }
//   users.push(userWithId)
  users.push({...user, id:uuidv4()})
  res.send(`the user named ${user.Fname} added in database`)
}

export const getUser=(req,res)=>{
    const {id} = req.params
    const user=  users.find(user=> user.id===id)
    res.send(user)
  
}

export const deleteUser=(req,res)=>{
    const {id} = req.params
    users=  users.filter(user=> user.id!==id)
    res.send(users)
}

export const updateUser=(req,res)=>{
    const {id} = req.params
    const {Fname , Lname }= req.body
    const user=  users.find(user=> user.id===id)
 if(Fname) user.Fname=Fname
 if(Lname) user.Lname=Lname
 res.send('ok')

}