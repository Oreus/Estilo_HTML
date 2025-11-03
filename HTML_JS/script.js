const imgMain = document.getElementById('Alucard')
const btnDefault = document.getElementById('Default')
const btnWolf = document.getElementById('Wolf')
const btnBat = document.getElementById("Bat")
const btnMist = document.getElementById("Mist")

btnDefault.addEventListener('click',() => {
    imgMain.src = './img/alcuard_df.png'
    document.body.className = 'theme-01'
})
btnWolf.addEventListener('click',() => {
    imgMain.src = './img/wolf.gif'
    document.body.className = 'theme-02'
})
btnBat.addEventListener('click',() => {
    imgMain.src = './img/bat.gif'
    document.body.className = 'theme-03'
})
btnMist.addEventListener('click',() => {
    imgMain.src = './img/mist.gif'
    document.body.className = 'theme-04'
})