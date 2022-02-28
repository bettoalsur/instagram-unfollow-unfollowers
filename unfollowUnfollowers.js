
/* Script to unfollow unfollowers on Instagram:
*
* This code doesn't need to use terminal, node.js, or other libraries.
* You can easily follow the instructions below by copying and pasting 
* the code blocks into your browser's console.
*
* While using this code, you may be notified about trying to change global variables on the front-end 
* and may be prompted to use the Instagram API. You can also be sign out. 
* No ban notifications were seen during testing, although it could be possible. 
* For these reasons, use this code at your own risk and not for long. 
*
* Check out the instagram politicies about using bots 
*
* INSTRUCTIONS:
* 
* Login to your Instagram account and click on: followers and followings.
* In each case, it will open a div with a reduced list (about 12 usernames).
* The next block of code will scroll to the end of the div several times discovering the hidden content.
*/

// to auto-scroll...

let cont = 0;
let containerList = document.querySelector(".isgrP");
function autoScroll() {
    containerList.scrollTo(0,containerList.scrollHeight);
    cont++;
    console.log(cont);
    if (cont >= 200) return;
    setTimeout(autoScroll, ( Math.random()*2+7.5) *1000 );
}
autoScroll();

/* 
* When the process ends, run the next block of code to get the usernames list in array format
*/

// to get lists...

let followingList = [];
let followingListObject = document.querySelectorAll("span span");

for (let i = 5; i < followingListObject.length ; i ++) {
    followingList.push(followingListObject[i].innerHTML);
}

/* 
* After having both lists (followers and followings), run the following block of code 
* to know who you follow who doesn't follow you back.
* In case you decide to save both list before and then process them, check out the handleInfo.js file
*/

// to get the toUnfollowList...

let followers = ["previously filled"];
let followings = ["previously filled"];

let toUnfollow = [];

function fillToUnfollowList(){
    
    followings.forEach(username => {
        if( !followers.includes(username) ) {
            toUnfollow.push( username );
        }
    });
}
fillToUnfollowList();

/* 
* The next and last step will unfollow the users you wanted to
*/

// to unfollow...

let cont2 = 0;
function unfollowFromList() {
    let username = toUnfollow[cont2];
    window.open("https://www.instagram.com/" + username + "/","_self");

    setTimeout(() => {
        let buttons = document.querySelectorAll("button");
        buttons[1].click();
        setTimeout(() => {
            let miniButton = document.querySelectorAll("button")[6];
            miniButton.click();
            cont2++;
            if (cont2 >= toUnfollow.length) return;
            setTimeout(unfollowFromList,1000);
        },4000)
    },9000);
}
unfollowFromList();









