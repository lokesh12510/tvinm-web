export type TBlog = {
    id:number|string
    title:string 
    content:string 
    imageURL:string 
    date:Date
    featured:boolean
}


export const blogList:TBlog[] = [
    {
        id:'national_youth_day_2023',
        title:'National Youth Day',
        content:'Competition 5- National Youth day was celebrated with the help of NYK providing us with fund by conducting a few competitions. The winners were awarded with certificates, medals and trophies.',
        imageURL:'/images/events/national_youth_day_2023.jpg',
        date:new Date(),
        featured:true
    },
    {
        id:'helping_physically_challenged',
        title:'Help kids',
        content:'Provision of needful things to the Mentally and Physically Challenged Kids staying at Rotary Ashiya School, Ooty. A whiteboard for writing, Room heater and daily needs for 15 days was provided to them by our society club.',
        imageURL:'/images/events/helping_physically_challenged.jpg',
        date:new Date('15/01/2023'),
        featured:true
    },
    {
        id:"clean_india_2022",
        title:'Clean India 2.0',
        content:'Clean India 2.0 was conducted with the help of NYK providing us with fund. The plastics were collected from the houses inorder to keep our surroundings clean.',
        imageURL:'/images/events/clean_india_2022.jpg',
        date:new Date('13/11/2022'),
         featured:true
    },
    {
        id:"international_yoga_day_2022",
        title:'International Yoga Day',
        content:'Yoga Day was conducted with the help of NYK providing us with fund. We gathered the kids in a community hall and yoga and exercises were done by them.',
        imageURL:'/images/events/international_yoga_day_2022.png',
        date:new Date('21/06/2022'),
         featured:true
    },
    {
        id:'app_launch_event',
        title:'App Launch Event',
        content:'TVINM App launching Event and the release of Village History Documentary. An application was launched by TVINM where the data collections are stored. The expenses, savings and donations are updated regularly.',
        imageURL:'/images/events/app_launch_event.jpg',
        date:new Date('01/01/2022'),
         featured:true
    },
]