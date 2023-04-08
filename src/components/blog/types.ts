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
        id:'national_youth_day_2022',
        title:'National Youth Day',
        content:'Competition 5- National Youth day was celebrated with the help of NYK providing us with fund by conducting a few competitions. The winners were awarded with certificates, medals and trophies.',
        imageURL:'/images/events/national_youth_day_2023.jpg',
        date:new Date('06/21/2022'),
        featured:true
    },
    {
        id:'helping_physically_challenged',
        title:'Help kids',
        content:'Provision of needful things to the Mentally and Physically Challenged Kids staying at Rotary Ashiya School, Ooty. A whiteboard for writing, Room heater and daily needs for 15 days was provided to them by our society club.',
        imageURL:'/images/events/helping_physically_challenged.jpg',
        date:new Date('01/15/2023'),
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
        date:new Date('06/21/2022'),
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
    {
        id:'fit_india_freedom_run',
        title:'Fit India Freedom run 2.0',
        content:'Fit India Freedom Run 2.0 was organized with the help of NYK providing us with fund. Kids participated in this program.',
        imageURL:'/images/events/fit_india_freedom_run.jpg',
        date:new Date('01/10/2021'),
         featured:false
    },
    {
        id:'national_sports_day',
        title:'National Sports day',
        content:'National Sports day was celebrated at our village with kids participating in it.',
        imageURL:'/images/events/national_sports_day.jpg',
        date:new Date('08/29/2021'),
         featured:false
    },
    {
        id:'international_yoga_day_2021',
        title:'Yoga day',
        content:'Yoga day program was organized at our village. The members of the TVINM participated.',
        imageURL:'/images/events/international_yoga_day_2021.jpg',
        date:new Date('06/21/2021'),
         featured:false
    },
    {
        id:'tree_plantation',
        title:'Tree plantation',
        content:'Tree plantation activity. Planted tree saplings in and around the Village.',
        imageURL:'/images/events/tree_plantation.jpg',
        date:new Date('02/14/2021'),
         featured:false
    },
]