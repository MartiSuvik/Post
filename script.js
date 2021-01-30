let d = document;

const post = d.getElementsByClassName('post');
const button = d.getElementsByClassName('bg-wrap__preview--btn');
const firstPost = d.getElementsByClassName('bg-wrap__preview');

post[0].style.display = 'none';
button[0].addEventListener('click', showPosts);

function showPosts() {
    if (post[0].style.display === 'none') {
        post[0].style.display = 'block';
        firstPost[0].style.display = 'none';
        button[0].innerHTML = 'Sulge';
    } else {
        post[0].style.display = 'none';
        firstPost[0].style.display = 'block';
        button[0].innerHTML = 'Ava';
    }
}