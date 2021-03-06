function imagefetch() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=IesiwQRYuSJxjToXZz2SesULB5PbGwc5n3Kt90L1&count=10')
    .then(response => response.json())
    .then(data => {console.log(data)    
        for (let i = 0; i < 10; i++) {
        // console.log("pic" + i);
        // document.getElementById("pic' + i).src=data[i]['hdurl'];
        appendPosts(data[i], i)
    }});
    
}

function likedislike(number) {

    if (document.getElementById('likenum' + number).innerHTML === '1') {
        document.getElementById('likenum' + number).innerHTML='0';
        document.getElementById('button' + number).innerHTML='<i class="far fa-heart"></i> Like';
        document.getElementById('button' + number).style.background="#569fc9";
    }
    else {
        document.getElementById('likenum' + number).innerHTML='1';
        document.getElementById('button' + number).innerHTML='<i class="fas fa-heart-broken"></i> Unlike';
        document.getElementById('button' + number).style.background="#9f56c9";
    }
}

function appendPosts(data, index) {
	let morePosts = document.createElement('div');
	morePosts.innerHTML = `
        <div class="cards">
            <h2 class="card-heading">`+data['title']+`</h2>
            <img id="pic0" class="pictures" src=`+data['hdurl']+` alt="`+data['title']+`">
            <p class="description">`+data['explanation']+` </p>
            <div class="date">`+data['date']+`</div>
            <p id="likenum`+index+`" style="display: none;">0</p>
            <button id="button`+index+`" class="like" onclick="likedislike(`+index+`)">
                <i class="far fa-heart"></i>
                Like
            </button>
        </div>
	`;
	document.getElementById('container').appendChild(morePosts);
}