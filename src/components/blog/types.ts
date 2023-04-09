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
        content:'Competition 5- National Youth day was celebrated with the help of NYK providing us with fund by conducting a few competitions. The winners were awarded with certificates, medals and trophies. Former Village Head B. Iyer and Pandit L. Ramji were invited to distribute prizes to the winners and to provide participation certificates to the participants.',
        imageURL:'/images/events/national_youth_day_2023.jpg',
        date:new Date('01/19/2023'),
        featured:true
    },
    {
        id:'helping_physically_challenged',
        title:'Help kids',
        content:'Provision of needful things to the Mentally and Physically Challenged Kids staying at Rotary Ashiya School, Ooty. A whiteboard for writing, Room heater and daily needs for 15 days was provided to them by our society club. The school has around 25 students with supporting staff. We spent some time with them playing little games and sharing laughter. Our village people donated a small amount and all the members of the society club also contributed.',
        imageURL:'/images/events/helping_physically_challenged.jpg',
        date:new Date('01/15/2023'),
        featured:true
    },
    {
        id:"clean_india_2022",
        title:'Clean India 2.0',
        content:'Clean India 2.0 was conducted with the help of NYK providing us with fund. The plastics were collected from the houses in order to keep our surroundings clean. The main purpose of conducting this programme was to clean the public area and maintain cleanliness. The mission is to make sure the wastes are collected separately and disposed of in a proper way. ',
        imageURL:'/images/events/clean_india_2022.jpg',
        date:new Date('11/13/2022'),
         featured:true
    },
    {
        id:"international_yoga_day_2022",
        title:'International Yoga Day',
        content:'To highlight the importance of Yoga and its benefits on our mind and body, Yoga Day was conducted with the help of NYK providing us with fund. We gathered the kids in a community hall and yoga and exercises were done by them. They were guided by the elderly people who were good at doing yoga. It is also conducted to raise awareness about the importance of performing Yoga.',
        imageURL:'/images/events/international_yoga_day_2022.png',
        date:new Date('06/21/2022'),
         featured:true
    },
    {
        id:'app_launch_event',
        title:'App Launch Event',
        content:'TVINM App launching Event and the release of Village History Documentary. An application was launched by TVINM where the data collections are stored. The expenses, savings and donations are updated regularly. A documentary was prepared after collecting information from all the senior people and elders of our village and it was presented to the village people. The App also shows the events conducted over the past years. ',
        imageURL:'/images/events/app_launch_event.jpg',
        date:new Date('01/01/2022'),
         featured:true
    },
    {
        id:'fit_india_freedom_run',
        title:'Fit India Freedom run 2.0',
        content:'Government of India has initiated Fit India Freedom Run 2.0. We organized Fit India Freedom Run 2.0 with the help of NYK providing us with fund. Kids participated in this program. They were guided by the college students who were the members of our society club. This run encourages fitness and helps us all to get free from obesity, laziness, stress, anxiety, disease, etc,.',
        imageURL:'/images/events/fit_india_freedom_run.jpg',
        date:new Date('01/10/2021'),
         featured:false
    },
    {
        id:'national_sports_day',
        title:'National Sports day',
        content:'National Sports day was celebrated at our village with kids participating in it. With the aim to raise awareness about the values of sports, discipline, perseverance, sportsman spirit, teamwork, and to encourage the public in large to take up sports and make it an integral part of their lives. The day is also dedicated to all the Nation’s sports heroes and champions who brings laurels to the country.',
        imageURL:'/images/events/national_sports_day.jpg',
        date:new Date('08/29/2021'),
         featured:false
    },
    {
        id:'international_yoga_day_2021',
        title:'Yoga day',
        content:'Yoga day program was organized at our village. The members of the TVINM participated. We were guided by the elderly people who were good at doing yoga. It is also conducted to raise awareness about the importance of performing Yoga. A small meeting was arranged post the session where the benefits of doing Yoga was explained.',
        imageURL:'/images/events/international_yoga_day_2021.jpg',
        date:new Date('06/21/2021'),
         featured:false
    },
    {
        id:'tree_plantation',
        title:'Tree plantation',
        content:'Trees greatly contribute to their environment by providing oxygen, supporting wildlife, improving air quality, conserving water and by preserving soil. Tree plantation activity was organized. We planted tree saplings in and around the Village. The people from Nilgiri Seva Kendra helped us with the saplings and it was received in the presence of our former village head B. Iyer.',
        imageURL:'/images/events/tree_plantation.jpg',
        date:new Date('02/14/2021'),
         featured:false
    },
]