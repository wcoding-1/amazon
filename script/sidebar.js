
function handleSidebar(){
    document.querySelector('button').addEventListener('click', ()=>{
        document.querySelector('.sidebar').classList.add('open');
    })
}

function handleClosemenu(){
    document.querySelector('.closeMenu').addEventListener('click', ()=>{
        document.querySelector('.sidebar').classList.remove('open');
})

}

console.log('sidebar')

