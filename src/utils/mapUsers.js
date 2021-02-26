import { v4 as uuidv4 } from "uuid";

function mapUsers(userList) {
    return userList.map((user) => {
        return {
            uuid: uuidv4(), // generates random ID
            image: user.picture.thumbnail,
            fName: user.name.first,
            lName: user.name.last,
            email: user.email,
            phone: user.phone
        }
    })
}




export { mapUsers };