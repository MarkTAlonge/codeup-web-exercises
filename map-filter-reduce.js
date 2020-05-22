"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLangs = users.filter((user) => user.languages.length > 2);
console.log(threeLangs);


const userEmail = users.map(users => users.email);

console.log(userEmail);


const totalYearsExp = users.reduce((totalYears, user)=> {
    return totalYears + user.yearsOfExperience
}, 0);
console.log(totalYearsExp);
const avgYears = totalYearsExp / users.length;

console.log(avgYears);

let longestEmail = users.reduce((longestEmail, user)=> {
    if (longestEmail.length > user.email.length ) {
        return longestEmail;
    } else {
            return user.email
        }
});
    console.log(longestEmail)

// const instructorsStr = users.reduce((names, user)=> {
// // //     return names + " " + "your instructors names are" + " " + user.name
// // // });
// // //
// // // console.log(instructorsStr);

let instructorsString = users.reduce((finalString, instructor, index) => {
    if(index < users.length -1) {
        return `${finalString}${instructor.name.substring(0, 1).toUpperCase()
        }${instructor.name.substring(1, instructor.name.length).toLowerCase()}, `
    } else {
        return `${finalString}${instructor.name.substring(0,1).toUpperCase()
        }${instructor.name.substring(1,instructor.name.lenght).toLowerCase()}.`
    }
},"Your instructors are: ");

    console.log(instructorsString);

let uniqueLangs = users.reduce((langList, user) => {
    for (let lang of user.languages) {
        if(!langList.includes(lang)) {
            langList.push(lang);
        }
    }
    return langList;
}, []);
console.log(uniqueLangs);
