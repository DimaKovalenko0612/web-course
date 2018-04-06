var express = require('express');
var router = express.Router();
var Country = require('../models/country');
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


/* GET countries page. */
router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'Ajax DEMO', layout: 'layout1' });

    /* Country.find()
         .then(function(countries) {
             res.render('countries', { title: 'Express2', countries: countries });
         })
         .catch(next)
         .error(console.error);*/
});

/* GET countries page. */
router.get('/prises', function(req, res, next) {
    res.render('prises', { title: Express3 });
});
/* GET countries page. */
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: "Contacts us" });
});
router.post('/contacts', function(req, res, next) {
    var message = {
        from: req.body.email,
        to: 'dimakovalenko0612@gmail.com',
        subject: 'Message from Ecotour [' + req.body.name + ']',
        text: req.body.massge,
        html: '<p>' + req.body.message + '</p>'
    };

    console.log(message);
    if (req.body.human == "5") {
        let transporter = nodemailer.createTransport({
            tls: {
                rejectUnauthorized: false
            },
            service: 'gmail',
            auth: {
                user: "dimakovalenko0612@gmail.com",
                pass: "Start2018"
            }
        });

        // send mail with defined transport object
        transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log(info.massageId);
            res.render('contacts-res', { title: 'Contacts:', message: "Лист віправлено!" })
        });

    } else {
        res.render('contacts-res', { title: "Contacts", message: "Є підозраб що ви робот!:-)" })
    }
});

router.get("/setup-db", function(req, res) {

    var countries = [{
            Name: "Египет",
            Desc: "Ежегодно страну посещают 10 млн. туристов. Открыт Египет для путешественников круглый год, но лучшим сезоном для пляжного отдыха и экскурсий считаются весна и осень. Древняя цивилизация оставила на территории государства тысячи достопримечательностей. Здесь расположены пирамиды Гизы, Долина царей, храмы Луксора и Сфинкс. В список ЮНЕСКО занесены раннехристианские памятники Абу-Мена (III-IV столетие), памятники Нубии (XIII столетий до нашей эры), монастырь Святой Екатерины (VI век), Вади-аль-Хитан (2005 год), а также вся старая часть столицы Каира. Популярность также набирают круизы по Нилу.",
            Image: "https://img.poehalisnami.ua/Data/cImg/CountryImage11.jpg"
        },
        {
            Name: "Украина",
            Desc: "Очень интересный объект на туристической карте мира. Ведь здесь есть все: море и курорты Южного берега Крыма, горы и горнолыжные базы Карпат, древнейшие города Киев, Каменец-Подольский, Чернигов, Львов, Ужгород, Мукачево, Черновцы, Херсонес, Севастополь, Одесса... Гости нашего гостеприимного края могут выбрать любой вид отдыха: пляжный, горнолыжный, оздоровительный, детский, экстремальный, исторический, экскурсионный, зеленый...",
            Image: "https://img.poehalisnami.ua/Data/cImg/CountryImage37.jpg"
        },
        {
            Name: "Чехия",
            Desc: "Это Рим Севера, сердце Европы и самый драгоценный камень в каменной короне мира – считал Гете и был абсолютно прав. Эта страна обладает невероятным магическим свойством очаровывать любого, кто хотя бы раз с ней соприкоснулся. Средневековые замки, романтичные, волшебные и великолепные; парк Чешская Швейцария, впечатляющий своей первозданной красотой и величием; заповедник Чешский рай, излюбленное место туристов и любителей активного отдыха; таинственные пещеры, красавица-Прага, Карловы Вары, кнедлики, пиво.",
            Image: "https://img.poehalisnami.ua/Data/cImg/CountryImage42.jpg"
        },
        {
            Name: "Венгрия",
            Desc: "Известна, прежде всего, своей столицей – Будапештом. Этот город относят к числу самых красивых городов мира. Гористая, правобережная часть столицы, Буда, ярко контрастирует с равнинным Пештом. Вторая визитная карточка Венгрии – многочисленные термальные купальни, в которых круглый год греются туристы уже несколько сотен лет. Самые известные из них: купальни Сечени и купальни Геллерт. И третья визитная крточка, вернее даже, набор визитных карточек Венгрии – это знаменитые города-музеи, города-крепости, бывшие королевские резиденции Эгер, Эстергом, Вышеград, Сэкешфехервар",
            Image: "https://img.poehalisnami.ua/Data/cImg/CountryImage57.jpg"
        },
        {
            Name: "Польша",
            Desc: "Страна богатого исторического прошлого, благодаря чему сегодня на ее территории находится 8 памятников, включенных в Перечень мирового культурного наследия ЮНЕСКО. Это Варшавский Старый город, восстановленный из руин после второй мировой войны, Королевский Краков – самый большой в стране памятник истории и культуры, Соляные копи Велички – семиэтажный подземный город, город-крепость Замосць, замок крестоносцев в Мальборке, Освенцим-Бжезинка – самый большой гитлеровский концлагерь и Беловежский национальный заповедник.",
            Image: "https://img.poehalisnami.ua/Data/cImg/CountryImage58.jpg"
        },
        {
            Name: "Австрия",
            Desc: "Маленькая, не имеющая выхода к морю Австрия предлагает туристам альпийские пейзажи, музеи мирового класса, и истории о великих музыкантах. Государство находится в самом сердце Европы и граничит с восемью странами.Австрия расположена в мягком континентальном климате. Каждое время года здесь прекрасно по-своему. Лучший период для посещения страны лето. Для горнолыжного отдыха подойдут зима и первый месяц весны, когда температура держится в пределах -15°С…+0°С. ",
            Image: "https://img.poehalisnami.ua/Data/cImg/CountryImage75.jpg"
        }
    ];

    Country.remove({}, function(err) {
        if (err) {
            console.error(err);
        } else {

            for (let i = 0; i < countries.length; i++) {
                Country.create(countries[i], function(err, country) {
                    if (err) console.error('Error: ' + err);
                    else console.log();
                });
            }
        }
    });
    res.status(200).json({
        message: "Okey",
    });

});
/* GET prices page. */
router.get('/prices', function(req, res, next) {
    res.render('prices', { title: 'Prices' });
});
/* GET contacts page. */
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Contacts' });
});

module.exports = router;