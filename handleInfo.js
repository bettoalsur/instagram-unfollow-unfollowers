
let followers = [];
let followings = [];

async function getFollowers(){
    
    const url = `followers.csv`;
    const response = await fetch(url);
    const data = await response.text();
    const rows = data.split('\n');

    rows.forEach(row => {
        let newRow = row.replace("\r","");
        followers.push( newRow );
    });
}

async function getFollowings(){
    
    const url = `followings.csv`;
    const response = await fetch(url);
    const data = await response.text();
    const rows = data.split('\n');

    rows.forEach(row => {
        let newRow = row.replace("\r","");
        followings.push( newRow );
    });
}

let toUnfollow = [];

async function fillToUnfollowList(){
    await getFollowers();
    await getFollowings();

    followings.forEach(username => {
        if( !followers.includes(username) ) {
            toUnfollow.push( username );
            console.log(username);
        }
    });
}
fillToUnfollowList();









