const words = ['зензубель','рейсмус','дегласировка','цизелирование','иммобилайзер','трансмиссия',
    'анемофилия','эфемероид','гловелетты', 'ридикюль',]
const vopros = ['столярный и плотницкий инструмент, предназначенный для чистовой обработки прямоугольных срезов, фальцев,четвертей',
    'инструмент для проведения на заготовке разметочных линий или перенесения размеров с чертежа на заготовку',
    'способ удаления лишнего жира с поверхности готовых продуктов',
    'выполнение нешироких,но глубоких небольших надрезов при обработки рыбы перед посадкой её в печь',
    'благодаря ему автомобиль заводится исключительно оригинальным ключом зажигания',
    'комплектующие двигателя автомобиля, которые занимаются передачей энергии',
    'опыление цветов при помощи ветра','цветок-многолетник с очень коротким периодом вегетации(с летним покоем) ',
    'длинные перчатки с обрезанными пальцами','женская сумочка мягкой формы в виде кисета на шёлковом шнуре или цепочке',]
let word=[ ]
let secret=[ ]
let sound = document.querySelector('.sound')
$(document).ready(start)
let cont = 3
let ochkov = 0

function start() {
    let r = Math.floor(Math.random()*10)
    word = words[r].split('')
    console.log(word)
    for (let i=0; i<word.length; i++) {
        secret.push('*')
    }
    console.log(secret)
    $('#vopros').text(vopros[r])
    $('#slovo').text(secret.join(''))
    $ ('#cont').text("осталось попыток:"+ cont);
    $('#Podarki').hide()
    $('#v1').hide()
    $('#v3').hide()
}

$('#but').click(guess)

function guess() {
    let t = 0
    let bukva = $('input').val()
    for (w in word){
        if (bukva == word[w]){
            console.log('est')
            secret[w]=bukva
            t = 1
        }
    }
    $('#slovo').text(secret.join(''))
    console.log(word)
    console.log(secret)
    if (t == 0){
        cont = cont - 1
        $ ('#cont').text("осталось попыток:"+ cont);
    }

    proverka()
}
function proverka() {
    if (secret.indexOf('*')== -1){
        console.log('win')
        $('input').prop('disabled',true)
        $ ('#Veduchij img').attr('src','JkubovichSmeh.png' )
        $('#Podarki').show()
         $('#v1').hide()
         $('#v3').hide()
    }
    else  if (cont == 0){
     console.log('Проиграл')
        $('input').prop('disabled',true)
        $('#but').prop('disabled',true)
        $ ('#Veduchij img').attr('src','JkubovichGrust.jpg' )
    }
    $('input').val ( '')
    }
$('#butk').click(f2)
function f2() {
    $('#koleso img').addClass('k')
    setTimeout(function (){
        f3()
    },5000)
}
function f3() {
    $('#koleso img').removeClass('k')
    const rng = [100,150,200,250,0]
    let r= Math.floor(Math.random()*5)
    console.log(r)
    let score = rng[r]
    ochkov+=score
    $('#x1').text('Выпало очков '+score)
    $('#x2').text('Всего очков '+ochkov)
}
function f4(x,priz){
    if (ochkov>=x){
        $(priz).hide()
        ochkov-=x
        $('#x2').text('Всего очков '+ochkov)
    }
}
$('.p1').click(function (){
    f4(100,'.p1')
})
$('.p2').click(function (){
    f4(150,'.p2')
})
$('.p3').click(function (){
    f4(200,'.p3')
})
$('.p4').click(function (){
    f4(50,'.p4')
})
$('.p5').click(function (){
    f4(250,'.p5')
})
$('.p6').click(function (){
    f4(300,'.p6')
})
$('.v1').click(function (){
    f4(100,'.v1')
    $('#v1').show()
})
$('.v3').click(function (){
    f4(200,'.v3')
    $('#v3').show()
})

