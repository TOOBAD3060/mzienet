
const initialMembersRecord = [
    {
    image : "/images/member.svg",
    name : "Name-1",
    position : "Management",
    info : "I set strategic goals & objectives, monitor performance, direct and control the all business operations."
},
{
    image : "/images/member.svg",
    name : "Name-2",
    position : "Technology",
    info : "I oversee the development and dissemination of technology as well as direct and controls all IT-Operations."
},
{
    image : "/images/member.svg",
    name : "Name-3",
    position : "People",
    info : "I am in charge of planning, implementing, managing people relations and overseeing departmental functions."
},
{
    image : "/images/member.svg",
    name : "Name-4",
    position : "Projects",
    info : "I plan, organise, and direct the completion of projects, ensuring they are delivered on time, within budget, and scope."
},
{
    image : "/images/member.svg",
    name : "Name-5",
    position : "Accounts",
    info : "I take care of the financial bookkeeping & records as well as provide administrative support for operational activities."
},
{
    image : "/images/member.svg",
    name : "Name-6",
    position : "Design",
    info : "I am responsible for projects ideation, design, prototype and implementation of innovative technical solutions."
},
{
    image : "/images/member.svg",
    name : "Name-7",
    position : "Outsourcing",
    info : "I coordinate subcontracted projects and manage contract and external resource personnels."
},
{
    image : "/images/member.svg",
    name : "Name-8",
    position : "Quality",
    info : "I ensure products & services meet established standards of quality including reliability, usability and performance."
},
{
    image : "/images/member.svg",
    name : "Name-9",
    position : "Products",
    info : "I am behind product specifications definitions, design, development and deployment of fully-functional products."
},
{
    image : "/images/member.svg",
    name : "Name-10",
    position : "Admin",
    info : "I coordinate office activities and operations to secure efficiency and compliance to company policies."
},
{
    image : "/images/member.svg",
    name : "Name-11",
    position : "Legal",
    info : "I provide advisory opinions, interpretations & counsel on legal matters. prepare, review & negotiate legal documentations, amongst others."
},
{
    image : "/images/member.svg",
    name : "Name-12",
    position : "Position",
    info : "Lorem, coding is cool man man man"
},

]

const membersRecord = [
    {
        image: "/images/member1.jpg",
        aboutMe: "I am a lover boy",
        hobbies :  "Coding, Football and Game" 
    },
    {
        image: "/images/member2.jpg",
        aboutMe: "I am a cool soul",
        hobbies : "Football,Swimming and Game" 
    },
    {
        image: "/images/member3.jpg",
        aboutMe: "I rely on the most high",
        hobbies :  "Cooking and Dancing" 
    },
    {
        image: "/images/member1.jpg",
        aboutMe: "I am a lover boy",
        hobbies :  "Coding, Football and Game" 
    },
    {
        image: "/images/member2.jpg",
        aboutMe: "I am a cool soul",
        hobbies : "Football,Swimming and Game" 
    },
    {
        image: "/images/member3.jpg",
        aboutMe: "I rely on the most high",
        hobbies :  "Cooking and Dancing" 
    },
    {
        image: "/images/member1.jpg",
        aboutMe: "I am a lover boy",
        hobbies :  "Coding, Football and Game" 
    },
    {
        image: "/images/member2.jpg",
        aboutMe: "I am a cool soul",
        hobbies : "Football,Swimming and Game" 
    },
    {
        image: "/images/member3.jpg",
        aboutMe: "I rely on the most high",
        hobbies :  "Cooking and Dancing" 
    },
    {
        image: "/images/member1.jpg",
        aboutMe: "I am a lover boy",
        hobbies :  "Coding, Football and Game" 
    },
    {
        image: "/images/member2.jpg",
        aboutMe: "I am a cool soul",
        hobbies : "Football,Swimming and Game" 
    },
    {
        image: "/images/member3.jpg",
        aboutMe: "I rely on the most high",
        hobbies :  "Cooking and Dancing" 
    },
]
//  getting Elements
const allMembers = document.querySelectorAll("article.members div")
const allMemberContainer = document.querySelectorAll("section.our-team article.members div")
const activeMember = document.querySelector("div.on-hover")

const initialValue = `
`

const yes = initialMembersRecord.map((member,index)=>{
    return initialValue
})

allMemberContainer.forEach((mem,ind)=>{
    mem.innerHTML = `<img class="main" src=${initialMembersRecord[ind].image} alt="" >
    <h3>${initialMembersRecord[ind].name} </h3>
    <h5>${initialMembersRecord[ind].position} </h5>
    <p>${initialMembersRecord[ind].info}
    </p>`
    mem.addEventListener("mouseenter",()=>{
        mem.innerHTML = `<img src= ${membersRecord[ind].image}  alt="">
        <div> 
           <h3>About me</h3>
           <p>${membersRecord[ind].aboutMe} </p>
           <h3>Hobbies</h3>
           <p>${membersRecord[ind].hobbies} </p>
        </div>`
        
        mem.classList.add("on-hover")
    })
    mem.addEventListener("mouseleave",()=>{
        mem.innerHTML = `<img class="main" src=${initialMembersRecord[ind].image} alt="" >
        <h3>${initialMembersRecord[ind].name} </h3>
        <h5>${initialMembersRecord[ind].position} </h5>
        <p>${initialMembersRecord[ind].info}
        </p>`
        mem.classList.remove("on-hover")
    })
})
