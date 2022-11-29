import { posts } from './data.js'

document.addEventListener('dblclick', function(e){
   if(e.target.dataset.likes){
    handleLikeClick(e.target.dataset.likes)
   }
})

    function handleLikeClick(user){
        const userLikes = posts.filter(function(userliked){
            return user === userliked.username
        })[0]
   

    if(!userLikes.isLiked){
        userLikes.likes++
        userLikes.isLiked = true

    }else {
        userLikes.likes--
        userLikes.isLiked = false
    }
    render()
}
function feed(){
    let feedHtml = ''

    posts.forEach(function(posts){
        let likedClass = ''

        if(posts.isLiked){
            likedClass = 'liked'
        }

        feedHtml +=`
        <article>
        <div class="feed-avatar-name">
        <img class="avatar" src="${posts.avatar}" alt="avtar image of user ${posts.name}">
        <div class="feed-name-place">
            <h2>${posts.name}</h2>
            <p>${posts.location}</p>
        </div>
    </div>
    <div class="post">
        <img data-likes="${posts.username}" class="post-img" src="${posts.post}" alt="the recent post from ${posts.name}">
    </div>
    <div class="icons-container">
        <img data-likes="${posts.username}" class="icons ${likedClass}" src="images/icon-heart.png" alt="Heart icon to press for those who like image">
        <img class="icons" src="images/icon-comment.png" alt="An icon to press for those who wanne leave a comment">
        <img class="icons" src="images/icon-dm.png" alt="An icon to click on for those who wanna leave a DM">
    </div>
    <span>${posts.likes} likes</span>
    <p><span>${posts.username}</span> ${posts.comment}</p>
    </article>`
    })
    return feedHtml
}

function render(){
    document.getElementById('article').innerHTML = feed()
}

render()