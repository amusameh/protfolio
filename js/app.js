const button = document.getElementById('buttons');
const div = document.querySelector('.right');

button.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const LiId = e.target.getAttribute('id');
        console.log(LiId)
        for (let i of button.children) {
            if (i.getAttribute('id') === LiId) {
                div.querySelector("#"+LiId).classList.remove('hidden');        
                div.querySelector("#"+LiId).classList.add('move');        
            } else {
                div.querySelector("#"+i.getAttribute('id')).classList.add('hidden');  
            }
        }
    }
});