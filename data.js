(function(global) {

    var categories = [
        {
            id: 0,
            description: 'Баллистика',
            tasks: [
            {
                id: 0,
                categoryId: 0,
                points: 100,
                description: 'Как называется критерий огнестрельного оружия, который означает, что объект предназначен для нанесения повреждений и обладает некой убойной силой?',
                image: null,
                isCat: false,
                isAuction: false,
                isWatched: false
            },
            {
                id: 1,
                categoryId: 0,
                points: 200,
                description: 'Как называются устройства и предметы, непосредственно предназначенные для поражения цели, выполнения задач, способствующих ее поражению, и содержащие разрывной, пиротехнический или метательный заряды либо их сочетание? ',
                image: null,
                isCat: false,
                isAuction: false,
                isWatched: false
            },
            {
                id: 2,
                categoryId: 0,
                points: 300,
                description: 'Характеристиками чего являются калибр, количество нарезов и их направление и ширина?',
                image: null,
                isCat: false,
                isAuction: false,
                isWatched: false
            },
            {
                id: 3,
                categoryId: 0,
                points: 400,
                image: null,
                description: 'При выстреле в упор на теле человека ткани возникает отпечаток переднего среза ствола. Вопрос: Как он называется?',
                isCat: true,
                isAuction: false,
                isWatched: false
            },
            {
                id: 4,
                categoryId: 0,
                points: 500,
                description: 'Из чего состоит унитарный патрон?',
                image: null,
                isCat: false,
                isAuction: false,
                isWatched: false
            }
        ]
        },
        {
            id: 1,
            description: 'Фотография',
            tasks: [
                {
                    id: 0,
                    categoryId: 1,
                    points: 100,
                    description: 'Назовите виды панорамной фотографии',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 1,
                    categoryId: 1,
                    points: 200,
                    description: 'Для чего нужна макросъемка? ',
                    image: null,
                    isCat: true,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 2,
                    categoryId: 1,
                    points: 300,
                    description: 'Какие условия фотосъемки нужно отразить в протоколе следственного действия?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 3,
                    categoryId: 1,
                    points: 400,
                    image: null,
                    description: 'Вопрос на сообразительность. Какой способ съемки изображен на экране?',
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 4,
                    categoryId: 1,
                    points: 500,
                    description: 'Масштаб, представляющий собой длину (до 10 м) бумажную или матерчатую ленту, на которой нанесены деления, равные главному фокусному расстоянию съемочного объектива? ',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                }
            ]
        },
        {
            id: 2,
            description: 'Механоскопия',
            tasks: [
                {
                    id: 0,
                    categoryId: 2,
                    points: 100,
                    description: 'Действие, направленное на полное или частичное уничтожение, повреждение запирающего устройства, иной преграды, осуществляемое с целью проникновения в запертое хранилище.',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 1,
                    categoryId: 2,
                    points: 200,
                    description: 'К какому виду инструментов, в зависимости от механизма взаимодействия с преградой, относится то, что вы видите на экране?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 2,
                    categoryId: 2,
                    points: 300,
                    description: 'В результате столкновений могут быть образованы следующие следы: вмятина, царапина, разрез, задиры, соскобы. ' +
                    'Вопрос : какое из этих слов обозначает  мелкие разрывы металла или покрытия, глубина которых больше их ширины?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 3,
                    categoryId: 2,
                    points: 400,
                    image: null,
                    description: 'Назовите виды следов излома?',
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 4,
                    categoryId: 2,
                    points: 500,
                    description: 'Что такое ширина колеи?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                }
            ]
        },
        {
            id: 3,
            description: 'Тактика',
            tasks: [
                {
                    id: 0,
                    categoryId: 3,
                    points: 100,
                    description: 'Какой термин обозначает достижение конечного результата и поставленной законом цели с помощью разрабатываемых криминалистикой тактических рекомендаций?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 1,
                    categoryId: 3,
                    points: 200,
                    description: 'Термин, который означает осуществление такого сбора доказательств и предъявление их обвиняемому таким образом, что бы у последнего не осталось возможности их опровергнуть и заявить ходатайство по поводу их проверки?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 2,
                    categoryId: 3,
                    points: 300,
                    description: 'Сходная предпосылка практической реализации тактики расследования преступлений?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 3,
                    categoryId: 3,
                    points: 400,
                    image: null,
                    description: 'Найдите 3 ошибки в определении. ЗАМЕНИТЬ СОВОКУПНОСТЬ- СИСТЕМОЙ, ОПЕРАТИВНОЕ-ПРЕДВАРИТЕЛЬНОЕ, ИЗЪЯТИЕ – СОБИРАНИЕ.',
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 4,
                    categoryId: 3,
                    points: 500,
                    description: 'Назовите что включает в себя система тактических средств? ',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                }
            ]
        },
        {
            id: 4,
            description: 'Интересные факты',
            tasks: [
                {
                    id: 0,
                    categoryId: 4,
                    points: 100,
                    description: 'Сколько квалификационных экзаменов в Научно-исследовательском институте проблем криминалистики, криминологии и судебных экспертиз Министерства юстиции и в Государственном экспертно-криминалистическом центре МВД РБ сдала Татьяна Федоровна за время службы ?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 1,
                    categoryId: 4,
                    points: 200,
                    description: 'Какой автор в своих рассказах описал такие методы криминалистики, которые были еще не известны правоохранительным органам того времени, среди которых идентификация пишущих машинок, сбор окурков и сигаретного пепла?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 2,
                    categoryId: 4,
                    points: 300,
                    description: 'Какое животное имеет отпечатки пальцев как у человека?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 3,
                    categoryId: 4,
                    points: 400,
                    image: null,
                    description: 'Как называется наука об узорах на ладонях и стопах человека, более широкая, чем дактилоскопия, которая утверждает, что узоры на кончиках пальцев появляются еще в утробе матери, на 3-м месяце развития.',
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 4,
                    categoryId: 4,
                    points: 500,
                    description: 'Как называется редкая мутация, которая выражается в отсутствии у человека отпечатков пальцев?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                }
            ]
        },
        {
            id: 5,
            description: 'Письмо/почерк',
            tasks: [
                {
                    id: 0,
                    categoryId: 5,
                    points: 100,
                    description: 'Какое свойство почерка отражает способность письменно-двигательного навыка проявлять себя в рукописях в виде разнообразных устойчивых видоизменений?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 1,
                    categoryId: 5,
                    points: 200,
                    description: 'Что является объектами криминалистического исследования письма?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 2,
                    categoryId: 5,
                    points: 300,
                    description: 'Кто написал первую работу по графологии – учении о распознавании по почерку характера человека?',
                    image: null,
                    isCat: true,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 3,
                    categoryId: 5,
                    points: 400,
                    image: null,
                    description: 'Что  характеризует топографические признаки?',
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 4,
                    categoryId: 5,
                    points: 500,
                    description: 'Какие группы задач стоят перед почерковедческой экспертизой?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                }
            ]
        },
        {
            id: 6,
            description: 'Экспертиза',
            tasks: [
                {
                    id: 0,
                    categoryId: 6,
                    points: 100,
                    description: 'Что является предметом экспертизы?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 1,
                    categoryId: 6,
                    points: 200,
                    description: 'В чем разница между дополнительной и повторной экспертизами?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 2,
                    categoryId: 6,
                    points: 300,
                    description: 'В чем заключается реставрационная задача экспертизы?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 3,
                    categoryId: 6,
                    points: 400,
                    image: null,
                    description: 'По характеру отражения признаков в образе образцы для сравнительного исследования подразделяются на отражающие свои собственные признаки и отражающие фиксированные признаки иного объекта. Вопрос: как называются последние?',
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                },
                {
                    id: 4,
                    categoryId: 6,
                    points: 500,
                    description: 'Какой термин означает достаточное по качеству и количеству отображение общих и частных признаков отождествляемого объекта?',
                    image: null,
                    isCat: false,
                    isAuction: false,
                    isWatched: false
                }
            ]
        }


    ];

    global.Categories = categories;


})(window);