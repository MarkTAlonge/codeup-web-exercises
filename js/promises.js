"use strict";
function lastCommit(userName) {
    var githubPromises = fetch("https://api.github.com/users/MarkTAlonge/events", {headers: {'Authorization': `token ${promises_github_Key}`}});

    console.log(githubPromises);

   return githubPromises.then(response => response.json())
        // want to filer through PushEvents only

        .then(jsonResponse => {
            return jsonResponse.filter(jsonResponse => jsonResponse.type === 'PushEvent')[0].created_at;
        });
}

lastCommit('MarkTAlonge').then(date => {
    console.log(new Date(date).toDateString());
});

function wait(seconds) {
    seconds = seconds * 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            if(seconds > 1000){
                console.log("You'll see this after" + " " + seconds/1000 +  " seconds")
            }else{
                console.log("You'll see this after" + " " + seconds/1000 + " second")
            }

        }, seconds)

    });

}
wait(1);
wait(2);
wait(3);