(function (global) {

    var roundCategories = {
        1: [
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
                        image: 'фотография_400.png',
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
                        image: 'механоскопия_200.png',
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
                        isAuction: true,
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
                        isAuction: true,
                        isWatched: false
                    },
                    {
                        id: 3,
                        categoryId: 3,
                        points: 400,
                        image: 'тактика_400.png',
                        description: 'Найдите 3 ошибки в определении.',
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
                        isAuction: true,
                        isWatched: false
                    }
                ]
            }


        ],

        2: [
            {
                id: 0,
                description: 'Криминалисты',
                tasks: [
                    {
                        id: 0,
                        categoryId: 0,
                        points: 100,
                        description: 'Какой ученый первым предложил назвать науку криминалистикой?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 1,
                        categoryId: 0,
                        points: 200,
                        description: 'Назовите английского антрополога, который предложил классификацию папиллярных узоров.',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 2,
                        categoryId: 0,
                        points: 300,
                        description: 'Назовите английского антрополога, который предложил классификацию папиллярных узоров.',
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
                        description: 'Благодаря какому ученому впервые был осужден человек по отпечаткам пальцев?',
                        isCat: true,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 4,
                        categoryId: 0,
                        points: 500,
                        description: 'Благодаря какому ученому впервые был осужден человек по отпечаткам пальцев?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    }
                ]
            },
            {
                id: 1,
                description: 'Опознание',
                tasks: [
                    {
                        id: 0,
                        categoryId: 1,
                        points: 100,
                        description: 'Какие существуют виды опознания по способу предъявления?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 1,
                        categoryId: 1,
                        points: 200,
                        description: 'Что не так на фото?',
                        image: 'опознание_200.jpg',
                        isCat: true,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 2,
                        categoryId: 1,
                        points: 300,
                        description: 'Назовите стадии процесса опознания.',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 3,
                        categoryId: 1,
                        points: 400,
                        image: 'опознание_400.jpg',
                        description: 'Найдите 3 ошибки в таблице.',
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 4,
                        categoryId: 1,
                        points: 500,
                        description: 'Если есть основания полагать, что опознание будет сорвано как должен поступить следователь?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    }
                ]
            },
            {
                id: 2,
                description: 'Общие положения криминалистики',
                tasks: [
                    {
                        id: 0,
                        categoryId: 2,
                        points: 100,
                        description: 'Какой термин определяет информационную модель конкретного уголовно-наказуемого деяния, а также определенных видов и групп преступлений; способ взаимодействия лиц, предметов и материальных процессов, повлекших криминальное событие?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 1,
                        categoryId: 2,
                        points: 200,
                        description: 'Собирание доказательств – это процесс обнаружения, сохранения, фиксации и изъятия доказательств. Вопрос: что сказано не так?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 2,
                        categoryId: 2,
                        points: 300,
                        description: 'В чем заключается общая задача криминалистики?',
                        image: null,
                        isCat: false,
                        isAuction: true,
                        isWatched: false
                    },
                    {
                        id: 3,
                        categoryId: 2,
                        points: 400,
                        image: null,
                        description: 'В чем основный смысл идентификации?',
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 4,
                        categoryId: 2,
                        points: 500,
                        description: '',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    }
                ]
            },
            {
                id: 3,
                description: 'Документы',
                tasks: [
                    {
                        id: 0,
                        categoryId: 3,
                        points: 100,
                        description: 'Какое понятие определяется как отрасль криминалистической техники, изучающей закономерности природы письма, способа подделки документов, а также разрабатываются средства и методы познания этих закономерностей в целях раскрытия преступлений и раскрытия уголовных дел?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 1,
                        categoryId: 3,
                        points: 200,
                        description: 'Назовите хотя бы 3 способа полной подделки документов.',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 2,
                        categoryId: 3,
                        points: 300,
                        description: 'Назовите 3 вида защиты денежных знаков?',
                        image: null,
                        isCat: false,
                        isAuction: true,
                        isWatched: false
                    },
                    {
                        id: 3,
                        categoryId: 3,
                        points: 400,
                        image: null,
                        description: 'Назовите 3 вида защиты денежных знаков.',
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 4,
                        categoryId: 3,
                        points: 500,
                        description: 'Назовите 3 вида защиты денежных знаков.',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    }
                ]
            },
            {
                id: 4,
                description: 'Дактилоскопия',
                tasks: [
                    {
                        id: 0,
                        categoryId: 4,
                        points: 100,
                        description: 'Из каких слоев состоит кожа человека?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 1,
                        categoryId: 4,
                        points: 200,
                        description: 'Из каких слоев состоит кожа человека?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 2,
                        categoryId: 4,
                        points: 300,
                        description: 'Расскажите построение папиллярного узора.',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 3,
                        categoryId: 4,
                        points: 400,
                        image: 'папиллярный_узор_400.png',
                        description: 'Какой папиллярный узор изображен на картинке?',
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 4,
                        categoryId: 4,
                        points: 500,
                        description: 'Какие приемы включает в себя визуальный метод выявления следов рук?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    }
                ]
            },
            {
                id: 5,
                description: 'Обыск. Выемка',
                tasks: [
                    {
                        id: 0,
                        categoryId: 5,
                        points: 100,
                        description: 'Назовите виды обыска по объекту?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 1,
                        categoryId: 5,
                        points: 200,
                        description: 'На какой стадии обыска определяются наиболее вероятные места хранения искомого?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 2,
                        categoryId: 5,
                        points: 300,
                        description: 'Назовите хотя бы 4 отличия обыска от выемки.',
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
                        description: 'Когда может быть произведен личный обыск без отдельного постановления?',
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 4,
                        categoryId: 5,
                        points: 500,
                        description: 'Найдите 3 ошибки в таблице',
                        image: 'выемка_500.jpg',
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    }
                ]
            },
            {
                id: 6,
                description: 'Антропоскопия',
                tasks: [
                    {
                        id: 0,
                        categoryId: 6,
                        points: 100,
                        description: 'Какие различают следы зубов по механизму образования?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 1,
                        categoryId: 6,
                        points: 200,
                        description: 'Что такое длина шага?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 2,
                        categoryId: 6,
                        points: 300,
                        description: 'Если засохшие следы крови обнаружены на стене, то их изымают вместе с частицами штукатурки, осуществляя соскоб. Вопрос: что необходимо произвести, если нельзя осуществить соскоб?',
                        image: null,
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 3,
                        categoryId: 6,
                        points: 400,
                        image: 'след_ноги_400.png',
                        description: 'Расскажите про подошву стопы босой ноги.',
                        isCat: false,
                        isAuction: false,
                        isWatched: false
                    },
                    {
                        id: 4,
                        categoryId: 6,
                        points: 500,
                        description: 'Назовите свойства запаха.',
                        image: null,
                        isCat: false,
                        isAuction: true,
                        isWatched: false
                    }
                ]
            }


        ]
    };

    global.roundCategories = roundCategories;

})(window);