const randNum =  Math.ceil(Math.random() * 100)
const randNum1 =  Math.ceil(Math.random() * 100)

const data = [
{   name: 'Jane Doe',
    age: 28,
    gender: "Female",
    lookingFor: "Male",
    location: "Kano NG",
    image: `https://randomuser.me/api/portraits/women/${randNum}.jpg`
},
{   name: "John Doe",
    age: 30,
    gender: "Male",
    lookingFor: "Female",
    location: "Lome TG",
    image: `https://randomuser.me/api/portraits/men/${randNum}.jpg`
},
{   name: "Yonko Heedrhiss",
    age: 26,
    gender: "Male",
    lookingFor: "Female",
    location: "Lagos NG",
    image: `https://randomuser.me/api/portraits/men/${randNum1}.jpg`
},
{   name: "Maryane Smith",
    age: 33,
    gender: "Female",
    lookingFor: "Male",
    location: "Accra GH",
    image: `https://randomuser.me/api/portraits/women/${randNum1}.jpg`
}
]
const profiles = profileIterator(data);


function profileIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
};


document.getElementById('next').addEventListener('click',nextProfile)
nextProfile()
function nextProfile(){
    const currentProfile = profiles.next().value
    
    if(currentProfile !== undefined ){
    document.getElementById('profileImage').innerHTML = 
    `<img src="${currentProfile.image}" alt="">`

    document.getElementById('profile').innerHTML = 
    `<ul class = "text-center my-5 mx-auto">
    <li class = "border border-black">Name: ${currentProfile.name}</li>
    <li class = "border border-black">Age: ${currentProfile.age}</li>
    <li class = "border border-black">Location: ${currentProfile.location}</li>
    <li class = "border border-black">Gender:  ${currentProfile.gender}   |  Looking for: ${currentProfile.lookingFor}</li>
    </ul>`;
}else{
    window.location.reload()
}
}
