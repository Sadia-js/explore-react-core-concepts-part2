export default function Friend({friend}){
    // console.log(friend);
    const {name, email, website, phone} = friend;
    return(
        <div className="friends">
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
            <p>Website : {website}</p>
            <p>Phone : {phone}</p>
        </div>
    )
} 