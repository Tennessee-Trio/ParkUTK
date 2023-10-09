# Park UTK

## Installation

1. Download the repository

2. Install dependencies

```bash
npm install
```

3. Run the development server 
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Inspiration
If you ask UT students what one of the greatest problems on campus is, there would be two answers: housing and parking. For this project, we decided to focus on the latter. On a campus with over 30,000 students, it is not difficult to see that finding available parking spots could prove time-consuming and, as a result, a source of great frustration for students.

We decided to create a platform that would provide up-to-date information about the availability of parking lots. This platform depends on collaboration. Students would report parking availability in the garage that they visited or parked at and, in the process, save other students from repeating the same process.

This solution not only cuts down on the time it takes to find parking but also reduces the amount of gasoline that students use while they search for a spot to park. As a result, it helps significantly reduce carbon emissions in the long term. Taking small efforts to use fewer natural resources in our everyday lives may seem insignificant on an individual level, but when multiplied across entire communities and societies, it becomes a powerful force for positive change.

## What it does
The web application’s home page has two links: “Find Parking” and “Report Parking.” On the “Find Parking” page, the user is presented with a map of the University of Tennessee’s campus, as well as 6 markers indicating various parking garages. If they click on the marker, a popup appears listing the name of the garage, how many parking spots are available, as well as when that report was made. On the “Report Parking” page, the user is presented with a form where they select a parking garage and how many spots they saw from a dropdown. Upon submission, the database is updated, and when someone clicks on the popup for that garage, it will have updated information.

## How we built it
We built this project using Next.js and MongoDB, leveraging React, JavaScript, TypeScript, Tailwind CSS, and React Leaflet in the process. By using Next.js, we could develop our front-end application as well as our back-end API in the same codebase. The front-end form uses this API to post information to the MongoDB database, while the map fetches the most up-to-date information for each parking garage on page load.

## Challenges we ran into
In the process of making our application, we struggled most with connecting our form and data process with the map. We had to switch map providers multiple times due to costs and compatibility with our tech stack. Through React Leaflet, we settled upon a free solution that requires no API key. From there, we struggled with ensuring that data is up-to-date on the map while also limiting the number of database calls made so that the application stays fast.

## Accomplishments that we're proud of
We are proud of creating a full-stack solution to a real-world problem that tens of thousands students face every day that class is in session. We are happy with how the project turned out and how there is room to add new features in the future.

## What we learned
In the process of creating ParkUTK, we learned a lot about what it means to build a complex web application. From the challenges we faced with finding a provider to host our maps, we now recognize the importance of researching the technology that a project will end up using before writing even a single line of code. Additionally, we learned the importance of having modular code that can be split up so that multiple people can contribute at the same time.

## What's next for ParkUTK
While our web application meets the initial goals of ParkUTK, there are a lot of things that can be improved on in order to make this application production-ready. First, we can create a more modern UI in order to have a better user experience. Second, we can make the website more mobile-friendly and potentially create native apps on iOS and Android to make the app more accessible. Third, we can overhaul how the reporting system works in order to make it more accurate. When we started with the project, our vision was that a user could not fill out the form to report parking until they were physically in a parking garage. From there, the application would prompt them only about that garage. Additionally, our current map shows the most recent report. A more accurate system would have the popup display all responses made in the past hour to prevent statistical outliers. 

Another point to consider is scalability. While our solution focuses on the University of Tennessee, it could easily be modified to fit the needs of other universities facing similar issues. All that is required is the names and coordinates of parking garages on campus as well as the coordinates of the university itself.
