//Если кто-то будет с этим работать, простите нас, мы глупые неопытные студенты. Весь этот код - костыль на костыле. Упокой господь душу того, кто будет во всем этом разбираться.
//Для калькулятора
let eventsPrice = [1,2,3,4]
let firstProgramPrice = [4200,4000,3800,3700,3550,3450,3350,3250,3150,3100,3000,2950,2900,2850,2800,2750,2700,2650,2600,2550,2500];
let secondProgramPrice = [4000,3800,3600,3500,3350,3350,3250,3150,3050,3000,2900,2850,2800,2750,2650,2600,2550,2500,2450,2400,2350];
let thirdProgramPrice = [4700,4450,4250,4100,3950,3850,3700,3600,3500,3400,3350,3300,3200,3150,3100,3050,3000,2950,2900,2800,2850];
let fourthProgramPrice = [6550,6250,6000,5800,5600,5400,5250,5150,5000,4900,4800,4700,4600,4550,4500,4400,4350,4300,4200,4100,4000];
//let optionsPrice = [1,2,3,4,5,6,7];
let ourEvents = ["Выпускной 4 класс 9-10 лет","Выпускной детский сад 6-7 лет","Выездное мероприятие (Тимбилдинг) 7-17 лет","День рождения от 12 участников  7-17 лет"];
let ourProgram = ["4 часа дневная программа","4 часа вечерняя программа","5 часов дневная программа","18 часов программа с ночевкой на базе"];
//let ourOptions = ["Фотограф","Видеосъемка","Аниматор","Праздничный торт","Ведущий для программы родителям","Диджей для программы родителям","Индивидуальная фотозона на заказ"];
let typesOfCB = ["Events","Program","People"];
//let listOfAdditionalOptions=[];
let typeOfEvent;
let typeOfProgram;
let numberOfPeople;
let price=0;
//let allOptions="";
//Конец переменных для калькулятора

/*var slider = document.getElementById("range");
var output = document.getElementById("valueRange");
output.value = slider.value;
output.oninput = function () {
	slider.value = this.value;
}
slider.oninput = function () {
	output.value = this.value;
}*/

var slides = document.querySelectorAll(".slide-item");
var slideIndex = 0;
var lastSlide = document.querySelector(".slide-item:last-child");
var firstSlide = document.querySelector(".slide-item:first-child");

showSlide(slideIndex);
function showSlide(n){
	slides[n].style.display = "block";
	if(slides[n] == firstSlide){
	document.querySelector(".previous").style.display = "none";
	}
	else{
	document.querySelector(".previous").style.display = "flex";
	}
	if(slides[n] == lastSlide){
	document.querySelector(".next").style.display = "none";
	}
	else{
	document.querySelector(".next").style.display = "flex";
	document.querySelector(".download-button").style.display = "none";
	document.querySelector("#send-button").style.display = "none";
	}
}

document.querySelector(".next").onclick = function (){
	if (!document.querySelector(".event > input:checked") && typesOfCB[slideIndex]=="Events")
	{
		return alert('Выберите мероприятие');
	}
	if (!document.querySelector(".programm > input:checked") && typesOfCB[slideIndex]=="Program")
	{
		return alert('Выберите программу');
	}
	slides[slideIndex].style.display = 'none';
	if(typesOfCB[slideIndex]=="Events")
	{
		addEventType();
	}
	else if(typesOfCB[slideIndex]=="Program")
	{
		addProgramType();
	}
	slideIndex += 1;
	showSlide(slideIndex);
}
document.querySelector(".previous").onclick = function(){
	if(totalSlide.style.display == "flex"){
		totalSlide.style.display="none";
		slideIndex = 0;
		showSlide(slideIndex);
	}
	else{
		slides[slideIndex].style.display = 'none';
		slideIndex -= 1;
		totalSlide.style.display="none";
		showSlide(slideIndex);
	}

}




document.querySelector(".download-button").onclick = function(){
	var dateControl = document.querySelector('input[type="date"]');
	countPrice();
	var docInfo1 = {
		content: [
			{
				text: 'ПРОГРАММА МЕРОПРИЯТИЯ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				text: '4 ЧАСА ДНЕВНАЯ ПРОГРАММА',
				alignment:'center',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					body:[
					[{text: 'Время',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'},{text: 'Основные события',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'}],
					[{text: "11:00",alignment:'center'},{text: "Организованный выезд.\nУчастников (детей и взрослых в количестве до 42 человек) забирает автобус с места сбора. Лучше всего подходит площадка недалеко от школы, которая известна каждому участнику"}],
					[{text: "12:00",alignment:'center'},{text: "Тематическая встреча. Начало программы\nВедущие программы в образах забирают детей, и все время мероприятия находятся с ними. Начинается все с места, где дети оставляют свои сумки и ненужные вещи"}],
					[{text: "12:10",alignment:'center'},{text:"Праздничный обед. Старт квеста\nПроходит в обеденном зале или специальном шатре. Здесь ведущие погружают участников в квестовую часть и дают старт испытаниям"}],
					[{text: "12:30-14:30",alignment:'center'},{text: "Мастер-класс по росписи блинов. Чайный стол\nДети вместе с наставниками участвуют в испытаниях, подготовленных создателями интерактивной зоны «Квест-парк». По итогам участники получают ключи от наград, которые их ждут в конце программы"}],
					[{text: "14:30",alignment:'center'},{text: "Мастер-класс по росписи блинов. Чайный стол\nУчастникам предоставляется возможность перевести дух и немного отдохнуть. В это время они практикуются в рисовании топпингом или джемами на блинах"}],
					[{text: "15:00",alignment:'center'},{text: "Интерактивная программа с дискотекой\nТеперь, когда все испытания позади, самое время зажечь на праздничной дискотеке в вместе с ведущими и интерактивной программой. Бонусом станет еще один совместный флэшмоб в копилке у детей"}],
					[{text: "15:35",alignment:'center'},{text: "Подведение итогов. Благодарности. Награждение\nСамое время поблагодарить учителей, воспитателей, родителей за те замечательные годы, которые были проведены вместе. А после каждый ребенок получает сувенир на память. Общее фото"}],
					[{text: "15:50",alignment:'center'},{text: "Сборы\nГлавное ничего не забыть. Есть возможность все проверить и уставшими, но счастливыми отправиться в комфортный автобус"}],
					[{text: "16:00",alignment:'center'},{text: "Организованный отъезд\nАвтобус привезет участников к месту выезда. А заботливый водитель проследит, чтобы ничего не осталось на сидениях и под ними"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'МЕНЮ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				text: 'ПРАЗДНИЧНЫЙ ОБЕД',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					body:[
					[{text: 'БЛЮДО',bold:true,fillColor:'#f79646',color:"white",alignment:'center'},{text: 'ОПИСАНИЕ',bold:true,fillColor:'#f79646',color:"white",alignment:'center'}],
					[{text: "Салат порционный, один на выбор",alignment:'center',rowSpan: 2,},{text: "Салат «Столичный»\nкуриное филе, огурцы свежие, огурцы консервированные, морковь, картофель, яйца, горошек консервированный, майонез, зелень"}],
					['',{text: "Салат с курицей, помидорами и сыром\nкуриное филе, помидоры свежие, яйца, сыр, майонез, приправы"}],
					[{text: "Мясная тарелка",alignment:'center'},{text:"Мясо подается на тарелке, украшенной зеленью, и включает: куриную грудку, говядину и ветчину"}],
					[{text: "Овощная тарелка",alignment:'center'},{text: "Овощи подаются на тарелке, украшенной зеленью, и включают: помидоры свежие, огурцы свежие, перец свежий сладкий"}],
					[{text: "Фруктовая тарелка",alignment:'center'},{text: "Фрукты подаются на тарелке в нарезанном виде и включают: яблоко, киви, банан, груша, апельсин (возможна замена)"}],
					[{text: "Горячее блюдо порционное, одно на выбор",alignment:'center'},{text: "Куриная грудка под соусом\nКуринные котлеты с зеленью Запеченные куриные ножки с зеленью"}],
					[{text: "Гарнир порционный один на выбор",alignment:'center'},{text: "Запеченный картофель\nКартофель фри\nРис отварной с овощами"}],
					[{text: "Хлебная корзинка",alignment:'center'},{text: "Хлеб пшеничный\nХлеб нарезной\nХлебцы"}],
					[{text: "Напитки",alignment:'center'},{text: "Фруктовые соки или морсы\nМинеральная вода"}],
					[{text: "Чайный стол",alignment:'center'},{text: "Чай черный\nЧай черный\nПеченье и вафли"}],
					[{text: "«Блинный» мастер-класс",alignment:'center'},{text: "Блинчики по 3 штуки на человека\nТоппинги или джемы"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ОПИСАНИЕ И СТОИМОСТЬ МЕРОПРИЯТИЯ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'ИНФОРМАЦИЯ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Тип мероприятия",alignment:'center'},{text: ourEvents[typeOfEvent],alignment:'center'}],
					[{text: "Дата проведения",alignment:'center'},{text: dateControl.value,alignment:'center'}],
					[{text: "Количество участников",alignment:'center'},{text: numberOfPeople+" детей",alignment:'center'}],
					[{text: "Вид программы",alignment:'center'},{text: ourProgram[typeOfProgram],alignment:'center'}],
					[{text: "Стоимость полная",alignment:'center'},{text: price+" рублей",alignment:'center'}],
					[{text: "Стоимость на человека",alignment:'center'},{text: Math.round(price/numberOfPeople)+" рублей",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'СТОИМОСТЬ ВКЛЮЧАЕТ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'ИНФОРМАЦИЯ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Групповой трансфер до базы и обратно",alignment:'center'},{text: "До 42 человек",alignment:'center'}],
					[{text: "Ведущие программы",alignment:'center'},{text: "2 человека",alignment:'center'}],
					[{text: "Дополнительные инструктора и помощники",alignment:'center'},{text: "По программе",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "Утверждается заранее",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "Утверждается заранее",alignment:'center'}],
					[{text: "Программа по прохождению «Квест-парка»",alignment:'center'},{text: "По программе",alignment:'center'}],
					[{text: "Памятные сувениры",alignment:'center'},{text: "По количеству участников",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ПРЕДЛОЖЕНИЕ ДЛЯ РОДИТЕЛЕЙ И СОПРОВОЖДАЮЩИХ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'СТОИМОСТЬ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Шатер на время мероприятия",alignment:'center'},{text: "3000 рублей",alignment:'center'}],
					[{text: "Мангал на время мероприятия",alignment:'center'},{text: "1500 рублей",alignment:'center'}],
					[{text: "Организационный сбор",alignment:'center'},{text: "250 рублей с человека. При заказе праздничного меню организационный сбор не берется",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "1000 рублей на человека",alignment:'center'}]
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ДОПОЛНИТЕЛЬНО МОЖЕМ ПРЕДОСТАВИТЬ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{

				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'СТОИМОСТЬ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Фотооператор (фотоотчет от 150 фотографий)",alignment:'center'},{text: "5 тысяч рублей",alignment:'center'}],
					[{text: "Видеооператор (видеоролик 5-7 минут)",alignment:'center'},{text: "15 тысяч рублей",alignment:'center'}],
					[{text: "Аниматоры",alignment:'center'},{text: "2 тысячи рублей за час",alignment:'center'}],
					[{text: "Ведущий для программы родителям",alignment:'center'},{text: "15 тысяч рублей",alignment:'center'}],
					[{text: "Диджей для программы родителям",alignment:'center'},{text: "5 тысяч рублей",alignment:'center'}],
					[{text: "Индивидуальная фотозона на заказ",alignment:'center'},{text: "От 5 тысяч рублей",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 0 ]
					}
			}
		]

	}
	//Второй док
	var docInfo2 = {
		content: [
			{
				text: 'ПРОГРАММА МЕРОПРИЯТИЯ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				text: "4 ЧАСА ВЕЧЕРЕНЯЯ ПРОГРАММА",
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					body:[
					[{text: 'Время',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'},{text: 'Основные события',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'}],
					[{text: "16:00",alignment:'center'},{text: "Организованный выезд.\nУчастников (детей и взрослых в количестве до 42 человек) забирает автобус с места сбора. Лучше всего подходит площадка недалеко от школы, которая известна каждому участнику"}],
					[{text: "17:00",alignment:'center'},{text: "Тематическая встреча. Начало программы\nВедущие программы в образах забирают детей, и все время мероприятия находятся с ними. Начинается все с места, где дети оставляют свои сумки и ненужные вещи"}],
					[{text: "17:15-18:45",alignment:'center'},{text:"Прохождение «Квест-парка»\nДети вместе с наставниками участвуют в испытаниях, подготовленных создателями интерактивной зоны «Квест-парк». По итогам участники получают ключи от наград, которые их ждут в конце программы"}],
					[{text: "19:00",alignment:'center'},{text: "Праздничный ужин\nПроходит в обеденном зале или специальном шатре. Здесь ведущие погружают участников в квестовую часть и дают старт испытаниям"}],
					[{text: "19:15",alignment:'center'},{text: "Интерактивная программа с дискотекой\nТеперь, когда все испытания позади, самое время зажечь на праздничной дискотеке в вместе с ведущими и интерактивной программой. Бонусом станет еще один совместный флэшмоб в копилке у детей"}],
					[{text: "20:15",alignment:'center'},{text: "Мастер-класс по росписи блинов. Чайный стол\nУчастникам предоставляется возможность перевести дух и немного отдохнуть. В это время они практикуются в рисовании топпингом или джемами на блинах"}],
					[{text: "20:35",alignment:'center'},{text: "Подведение итогов. Благодарности. Награждение\nСамое время поблагодарить учителей, воспитателей, родителей за те замечательные годы, которые были проведены вместе. А после каждый ребенок получает сувенир на память. Общее фото"}],
					[{text: "20:50",alignment:'center'},{text: "Сборы\nГлавное ничего не забыть. Есть возможность все проверить и уставшими, но счастливыми отправиться в комфортный автобус"}],
					[{text: "21:00",alignment:'center'},{text: "Организованный отъезд\nАвтобус привезет участников к месту выезда. А заботливый водитель проследит, чтобы ничего не осталось на сидениях и под ними"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'МЕНЮ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				text: 'ПРАЗДНИЧНЫЙ ОБЕД',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					body:[
					[{text: 'БЛЮДО',bold:true,fillColor:'#f79646',color:"white",alignment:'center'},{text: 'ОПИСАНИЕ',bold:true,fillColor:'#f79646',color:"white",alignment:'center'}],
					[{text: "Салат порционный, один на выбор",alignment:'center',rowSpan: 2,},{text: "Салат «Столичный»\nкуриное филе, огурцы свежие, огурцы консервированные, морковь, картофель, яйца, горошек консервированный, майонез, зелень"}],
					['',{text: "Салат с курицей, помидорами и сыром\nкуриное филе, помидоры свежие, яйца, сыр, майонез, приправы"}],
					[{text: "Мясная тарелка",alignment:'center'},{text:"Мясо подается на тарелке, украшенной зеленью, и включает: куриную грудку, говядину и ветчину"}],
					[{text: "Овощная тарелка",alignment:'center'},{text: "Овощи подаются на тарелке, украшенной зеленью, и включают: помидоры свежие, огурцы свежие, перец свежий сладкий"}],
					[{text: "Фруктовая тарелка",alignment:'center'},{text: "Фрукты подаются на тарелке в нарезанном виде и включают: яблоко, киви, банан, груша, апельсин (возможна замена)"}],
					[{text: "Горячее блюдо порционное, одно на выбор",alignment:'center'},{text: "Куриная грудка под соусом\nКуринные котлеты с зеленью Запеченные куриные ножки с зеленью"}],
					[{text: "Гарнир порционный один на выбор",alignment:'center'},{text: "Запеченный картофель\nКартофель фри\nРис отварной с овощами"}],
					[{text: "Хлебная корзинка",alignment:'center'},{text: "Хлеб пшеничный\nХлеб нарезной\nХлебцы"}],
					[{text: "Напитки",alignment:'center'},{text: "Фруктовые соки или морсы\nМинеральная вода"}],
					[{text: "Чайный стол",alignment:'center'},{text: "Чай черный\nЧай черный\nПеченье и вафли"}],
					[{text: "«Блинный» мастер-класс",alignment:'center'},{text: "Блинчики по 3 штуки на человека\nТоппинги или джемы"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ОПИСАНИЕ И СТОИМОСТЬ МЕРОПРИЯТИЯ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'ИНФОРМАЦИЯ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Тип мероприятия",alignment:'center'},{text: ourEvents[typeOfEvent],alignment:'center'}],
					[{text: "Дата проведения",alignment:'center'},{text: dateControl.value,alignment:'center'}],
					[{text: "Количество участников",alignment:'center'},{text: numberOfPeople+" детей",alignment:'center'}],
					[{text: "Вид программы",alignment:'center'},{text: ourProgram[typeOfProgram],alignment:'center'}],
					[{text: "Стоимость полная",alignment:'center'},{text: price+" рублей",alignment:'center'}],
					[{text: "Стоимость на человека",alignment:'center'},{text: Math.round(price/numberOfPeople)+" рублей",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'СТОИМОСТЬ ВКЛЮЧАЕТ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'ИНФОРМАЦИЯ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Групповой трансфер до базы и обратно",alignment:'center'},{text: "До 42 человек",alignment:'center'}],
					[{text: "Ведущие программы",alignment:'center'},{text: "2 человека",alignment:'center'}],
					[{text: "Дополнительные инструктора и помощники",alignment:'center'},{text: "По программе",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "Утверждается заранее",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "Утверждается заранее",alignment:'center'}],
					[{text: "Программа по прохождению «Квест-парка»",alignment:'center'},{text: "По программе",alignment:'center'}],
					[{text: "Памятные сувениры",alignment:'center'},{text: "По количеству участников",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ПРЕДЛОЖЕНИЕ ДЛЯ РОДИТЕЛЕЙ И СОПРОВОЖДАЮЩИХ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'СТОИМОСТЬ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Шатер на время мероприятия",alignment:'center'},{text: "3000 рублей",alignment:'center'}],
					[{text: "Мангал на время мероприятия",alignment:'center'},{text: "1500 рублей",alignment:'center'}],
					[{text: "Организационный сбор",alignment:'center'},{text: "250 рублей с человека. При заказе праздничного меню организационный сбор не берется",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "1000 рублей на человека",alignment:'center'}]
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ДОПОЛНИТЕЛЬНО МОЖЕМ ПРЕДОСТАВИТЬ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{

				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'СТОИМОСТЬ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Фотооператор (фотоотчет от 150 фотографий)",alignment:'center'},{text: "5 тысяч рублей",alignment:'center'}],
					[{text: "Видеооператор (видеоролик 5-7 минут)",alignment:'center'},{text: "15 тысяч рублей",alignment:'center'}],
					[{text: "Аниматоры",alignment:'center'},{text: "2 тысячи рублей за час",alignment:'center'}],
					[{text: "Ведущий для программы родителям",alignment:'center'},{text: "15 тысяч рублей",alignment:'center'}],
					[{text: "Диджей для программы родителям",alignment:'center'},{text: "5 тысяч рублей",alignment:'center'}],
					[{text: "Индивидуальная фотозона на заказ",alignment:'center'},{text: "От 5 тысяч рублей",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 0 ]
					}
			}
		]

	}
	//док 3
	var docInfo3 = {
		content: [
			{
				text: 'ПРОГРАММА МЕРОПРИЯТИЯ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				text: '5 ЧАСОВ ДНЕВНАЯ ПРОГРАММА',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					body:[
					[{text: 'Время',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'},{text: 'Основные события',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'}],
					[{text: "11:00",alignment:'center'},{text: "Организованный выезд.\nУчастников (детей и взрослых в количестве до 42 человек) забирает автобус с места сбора. Лучше всего подходит площадка недалеко от школы, которая известна каждому участнику"}],
					[{text: "12:00",alignment:'center'},{text: "Тематическая встреча. Начало программы\nВедущие программы в образах забирают детей, и все время мероприятия находятся с ними. Начинается все с места, где дети оставляют свои сумки и ненужные вещи"}],
					[{text: "12:10",alignment:'center'},{text: "Праздничный обед. Старт квеста\nПроходит в обеденном зале или специальном шатре. Здесь ведущие погружают участников в квестовую часть и дают старт испытаниям"}],
					[{text: "12:30-14:30",alignment:'center'},{text:"Прохождение «Квест-парка»\nДети вместе с наставниками участвуют в испытаниях, подготовленных создателями интерактивной зоны «Квест-парк». По итогам участники получают ключи от наград, которые их ждут в конце программы"}],
					[{text: "14:30",alignment:'center'},{text: "Мастер-класс по росписи блинов. Чайный стол\nУчастникам предоставляется возможность перевести дух и немного отдохнуть. В это время они практикуются в рисовании топпингом или джемами на блинах"}],
					[{text: "15:00",alignment:'center'},{text: "Интерактивная программа с дискотекой\nТеперь, когда все испытания позади, самое время зажечь на праздничной дискотеке в вместе с ведущими и интерактивной программой. Бонусом станет еще один совместный флэшмоб в копилке у детей"}],
					[{text: "15:35",alignment:'center'},{text: "Подведение итогов. Благодарности. Награждение\nСамое время поблагодарить учителей, воспитателей, родителей за те замечательные годы, которые были проведены вместе. А после каждый ребенок получает сувенир на память. Общее фото"}],
					[{text: "15:50",alignment:'center'},{text: "Сборы\nГлавное ничего не забыть. Есть возможность все проверить и уставшими, но счастливыми отправиться в комфортный автобус"}],
					[{text: "16:00",alignment:'center'},{text: "Организованный отъезд\nАвтобус привезет участников к месту выезда. А заботливый водитель проследит, чтобы ничего не осталось на сидениях и под ними"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'МЕНЮ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				text: 'ПРАЗДНИЧНЫЙ ОБЕД',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					body:[
					[{text: 'БЛЮДО',bold:true,fillColor:'#f79646',color:"white",alignment:'center'},{text: 'ОПИСАНИЕ',bold:true,fillColor:'#f79646',color:"white",alignment:'center'}],
					[{text: "Салат порционный, один на выбор",alignment:'center',rowSpan: 2,},{text: "Салат «Столичный»\nкуриное филе, огурцы свежие, огурцы консервированные, морковь, картофель, яйца, горошек консервированный, майонез, зелень"}],
					['',{text: "Салат с курицей, помидорами и сыром\nкуриное филе, помидоры свежие, яйца, сыр, майонез, приправы"}],
					[{text: "Мясная тарелка",alignment:'center'},{text:"Мясо подается на тарелке, украшенной зеленью, и включает: куриную грудку, говядину и ветчину"}],
					[{text: "Овощная тарелка",alignment:'center'},{text: "Овощи подаются на тарелке, украшенной зеленью, и включают: помидоры свежие, огурцы свежие, перец свежий сладкий"}],
					[{text: "Фруктовая тарелка",alignment:'center'},{text: "Фрукты подаются на тарелке в нарезанном виде и включают: яблоко, киви, банан, груша, апельсин (возможна замена)"}],
					[{text: "Горячее блюдо порционное, одно на выбор",alignment:'center'},{text: "Куриная грудка под соусом\nКуринные котлеты с зеленью Запеченные куриные ножки с зеленью"}],
					[{text: "Гарнир порционный один на выбор",alignment:'center'},{text: "Запеченный картофель\nКартофель фри\nРис отварной с овощами"}],
					[{text: "Хлебная корзинка",alignment:'center'},{text: "Хлеб пшеничный\nХлеб нарезной\nХлебцы"}],
					[{text: "Напитки",alignment:'center'},{text: "Фруктовые соки или морсы\nМинеральная вода"}],
					[{text: "Чайный стол",alignment:'center'},{text: "Чай черный\nЧай черный\nПеченье и вафли"}],
					[{text: "«Блинный» мастер-класс",alignment:'center'},{text: "Блинчики по 3 штуки на человека\nТоппинги или джемы"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ОПИСАНИЕ И СТОИМОСТЬ МЕРОПРИЯТИЯ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'ИНФОРМАЦИЯ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Тип мероприятия",alignment:'center'},{text: ourEvents[typeOfEvent],alignment:'center'}],
					[{text: "Дата проведения",alignment:'center'},{text: dateControl.value,alignment:'center'}],
					[{text: "Количество участников",alignment:'center'},{text: numberOfPeople+" детей",alignment:'center'}],
					[{text: "Вид программы",alignment:'center'},{text: ourProgram[typeOfProgram],alignment:'center'}],
					[{text: "Стоимость полная",alignment:'center'},{text: price+" рублей",alignment:'center'}],
					[{text: "Стоимость на человека",alignment:'center'},{text: Math.round(price/numberOfPeople)+" рублей",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'СТОИМОСТЬ ВКЛЮЧАЕТ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'ИНФОРМАЦИЯ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Групповой трансфер до базы и обратно",alignment:'center'},{text: "До 42 человек",alignment:'center'}],
					[{text: "Ведущие программы",alignment:'center'},{text: "2 человека",alignment:'center'}],
					[{text: "Дополнительные инструктора и помощники",alignment:'center'},{text: "По программе",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "Утверждается заранее",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "Утверждается заранее",alignment:'center'}],
					[{text: "Программа по прохождению «Квест-парка»",alignment:'center'},{text: "По программе",alignment:'center'}],
					[{text: "Памятные сувениры",alignment:'center'},{text: "По количеству участников",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ПРЕДЛОЖЕНИЕ ДЛЯ РОДИТЕЛЕЙ И СОПРОВОЖДАЮЩИХ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'СТОИМОСТЬ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Шатер на время мероприятия",alignment:'center'},{text: "3000 рублей",alignment:'center'}],
					[{text: "Мангал на время мероприятия",alignment:'center'},{text: "1500 рублей",alignment:'center'}],
					[{text: "Организационный сбор",alignment:'center'},{text: "250 рублей с человека. При заказе праздничного меню организационный сбор не берется",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "1000 рублей на человека",alignment:'center'}]
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ДОПОЛНИТЕЛЬНО МОЖЕМ ПРЕДОСТАВИТЬ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{

				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'СТОИМОСТЬ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Фотооператор (фотоотчет от 150 фотографий)",alignment:'center'},{text: "5 тысяч рублей",alignment:'center'}],
					[{text: "Видеооператор (видеоролик 5-7 минут)",alignment:'center'},{text: "15 тысяч рублей",alignment:'center'}],
					[{text: "Аниматоры",alignment:'center'},{text: "2 тысячи рублей за час",alignment:'center'}],
					[{text: "Ведущий для программы родителям",alignment:'center'},{text: "15 тысяч рублей",alignment:'center'}],
					[{text: "Диджей для программы родителям",alignment:'center'},{text: "5 тысяч рублей",alignment:'center'}],
					[{text: "Индивидуальная фотозона на заказ",alignment:'center'},{text: "От 5 тысяч рублей",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 0 ]
					}
			}
		]

	}
	// док 4
	var docInfo4 = {
		content: [
			{
				text: 'ПРОГРАММА МЕРОПРИЯТИЯ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				text: '18 ЧАСОВ, ПРОГРАММА С НОЧЕВОЙ',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				text: 'ДЕНЬ 1',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					body:[
					[{text: 'Время',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'},{text: 'Основные события',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'}],
					[{text: "16:00",alignment:'center'},{text: "Организованный выезд.\nУчастников (детей и взрослых в количестве до 42 человек) забирает автобус с места сбора. Лучше всего подходит площадка недалеко от школы, которая известна каждому участнику"}],
					[{text: "17:00",alignment:'center'},{text: "Тематическая встреча. Начало программы\nВедущие программы в образах забирают детей, и все время мероприятия находятся с ними. Начинается все с места, где дети оставляют свои сумки и ненужные вещи"}],
					[{text: "17:15-18:45",alignment:'center'},{text:"Прохождение «Квест-парка»\nДети вместе с наставниками участвуют в испытаниях, подготовленных создателями интерактивной зоны «Квест-парк». По итогам участники получают ключи от наград, которые их ждут в конце программы"}],
					[{text: "19:00",alignment:'center'},{text: "Праздничный ужин\nПроходит в обеденном зале или специальном шатре. Здесь ведущие погружают участников в квестовую часть и дают старт испытаниям"}],
					[{text: "19:15",alignment:'center'},{text: "Интерактивная программа с дискотекой\nТеперь, когда все испытания позади, самое время зажечь на праздничной дискотеке в вместе с ведущими и интерактивной программой. Бонусом станет еще один совместный флэшмоб в копилке у детей"}],
					[{text: "20:15",alignment:'center'},{text: "Чайный стол с мастер-классом\nУчастникам предоставляется возможность перевести дух и немного отдохнуть. В это время они практикуются в рисовании топпингом или джемами на блинах"}],
					[{text: "20:35",alignment:'center'},{text: "Подведение итогов. Благодарности. Награждение\nСамое время поблагодарить учителей, воспитателей, родителей за те замечательные годы, которые были проведены вместе. А после каждый ребенок получает сувенир на память. Общее фото"}],
					[{text: "20:50",alignment:'center'},{text: "Сборы\nГлавное ничего не забыть. Есть возможность все проверить и уставшими, но счастливыми отправиться в комфортный автобус"}],
					[{text: "21:00",alignment:'center'},{text: "Организованный отъезд\nАвтобус привезет участников к месту выезда. А заботливый водитель проследит, чтобы ничего не осталось на сидениях и под ними"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ДЕНЬ 2',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				table:{
					body:[
					[{text: 'Время',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'},{text: 'Основные события',bold:true,fillColor:'#4f81bd',color:"white",alignment:'center'}],
					[{text: "16:00",alignment:'center'},{text: "Организованный выезд.\nУчастников (детей и взрослых в количестве до 42 человек) забирает автобус с места сбора. Лучше всего подходит площадка недалеко от школы, которая известна каждому участнику"}],
					[{text: "17:00",alignment:'center'},{text: "Тематическая встреча. Начало программы\nВедущие программы в образах забирают детей, и все время мероприятия находятся с ними. Начинается все с места, где дети оставляют свои сумки и ненужные вещи"}],
					[{text: "17:15-18:45",alignment:'center'},{text:"Прохождение «Квест-парка»\nДети вместе с наставниками участвуют в испытаниях, подготовленных создателями интерактивной зоны «Квест-парк». По итогам участники получают ключи от наград, которые их ждут в конце программы"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'МЕНЮ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				text: 'ПРАЗДНИЧНЫЙ ОБЕД',
				style: 'subheader',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					body:[
					[{text: 'БЛЮДО',bold:true,fillColor:'#f79646',color:"white",alignment:'center'},{text: 'ОПИСАНИЕ',bold:true,fillColor:'#f79646',color:"white",alignment:'center'}],
					[{text: "Салат порционный, один на выбор",alignment:'center',rowSpan: 2,},{text: "Салат «Столичный»\nкуриное филе, огурцы свежие, огурцы консервированные, морковь, картофель, яйца, горошек консервированный, майонез, зелень"}],
					['',{text: "Салат с курицей, помидорами и сыром\nкуриное филе, помидоры свежие, яйца, сыр, майонез, приправы"}],
					[{text: "Мясная тарелка",alignment:'center'},{text:"Мясо подается на тарелке, украшенной зеленью, и включает: куриную грудку, говядину и ветчину"}],
					[{text: "Овощная тарелка",alignment:'center'},{text: "Овощи подаются на тарелке, украшенной зеленью, и включают: помидоры свежие, огурцы свежие, перец свежий сладкий"}],
					[{text: "Фруктовая тарелка",alignment:'center'},{text: "Фрукты подаются на тарелке в нарезанном виде и включают: яблоко, киви, банан, груша, апельсин (возможна замена)"}],
					[{text: "Горячее блюдо порционное, одно на выбор",alignment:'center'},{text: "Куриная грудка под соусом\nКуринные котлеты с зеленью Запеченные куриные ножки с зеленью"}],
					[{text: "Гарнир порционный один на выбор",alignment:'center'},{text: "Запеченный картофель\nКартофель фри\nРис отварной с овощами"}],
					[{text: "Хлебная корзинка",alignment:'center'},{text: "Хлеб пшеничный\nХлеб нарезной\nХлебцы"}],
					[{text: "Напитки",alignment:'center'},{text: "Фруктовые соки или морсы\nМинеральная вода"}],
					[{text: "Чайный стол",alignment:'center'},{text: "Чай черный\nЧай черный\nПеченье и вафли"}],
					[{text: "«Блинный» мастер-класс",alignment:'center'},{text: "Блинчики по 3 штуки на человека\nТоппинги или джемы"}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ОПИСАНИЕ И СТОИМОСТЬ МЕРОПРИЯТИЯ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ],
				pageBreak: 'before'
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'ИНФОРМАЦИЯ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Тип мероприятия",alignment:'center'},{text: ourEvents[typeOfEvent],alignment:'center'}],
					[{text: "Дата проведения",alignment:'center'},{text: dateControl.value,alignment:'center'}],
					[{text: "Количество участников",alignment:'center'},{text: numberOfPeople+" детей",alignment:'center'}],
					[{text: "Вид программы",alignment:'center'},{text: ourProgram[typeOfProgram],alignment:'center'}],
					[{text: "Стоимость полная",alignment:'center'},{text: price+" рублей",alignment:'center'}],
					[{text: "Стоимость на человека",alignment:'center'},{text: Math.round(price/numberOfPeople)+" рублей",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'СТОИМОСТЬ ВКЛЮЧАЕТ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'ИНФОРМАЦИЯ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Групповой трансфер до базы и обратно",alignment:'center'},{text: "До 42 человек",alignment:'center'}],
					[{text: "Ведущие программы",alignment:'center'},{text: "2 человека",alignment:'center'}],
					[{text: "Дополнительные инструктора и помощники",alignment:'center'},{text: "По программе",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "Утверждается заранее",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "Утверждается заранее",alignment:'center'}],
					[{text: "Программа по прохождению «Квест-парка»",alignment:'center'},{text: "По программе",alignment:'center'}],
					[{text: "Памятные сувениры",alignment:'center'},{text: "По количеству участников",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ПРЕДЛОЖЕНИЕ ДЛЯ РОДИТЕЛЕЙ И СОПРОВОЖДАЮЩИХ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{
				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'СТОИМОСТЬ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Шатер на время мероприятия",alignment:'center'},{text: "3000 рублей",alignment:'center'}],
					[{text: "Мангал на время мероприятия",alignment:'center'},{text: "1500 рублей",alignment:'center'}],
					[{text: "Организационный сбор",alignment:'center'},{text: "250 рублей с человека. При заказе праздничного меню организационный сбор не берется",alignment:'center'}],
					[{text: "Праздничный обед по выбранному меню",alignment:'center'},{text: "1000 рублей на человека",alignment:'center'}]
					],
					headerRows:1,
					margin:[ 0, 5, 0, 5 ]
					}
			},
			{
				text: 'ДОПОЛНИТЕЛЬНО МОЖЕМ ПРЕДОСТАВИТЬ',
				style: 'header',
				alignment: 'center',
				margin: [ 0, 5, 0, 5 ]
			},
			{

				table:{
					widths: ['*', 'auto'],
					body:[
					[{text: 'НАИМЕНОВАНИЕ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'},{text: 'СТОИМОСТЬ',bold:true,fillColor:'#9bbb58',color:"white",alignment:'center'}],
					[{text: "Фотооператор (фотоотчет от 150 фотографий)",alignment:'center'},{text: "5 тысяч рублей",alignment:'center'}],
					[{text: "Видеооператор (видеоролик 5-7 минут)",alignment:'center'},{text: "15 тысяч рублей",alignment:'center'}],
					[{text: "Аниматоры",alignment:'center'},{text: "2 тысячи рублей за час",alignment:'center'}],
					[{text: "Ведущий для программы родителям",alignment:'center'},{text: "15 тысяч рублей",alignment:'center'}],
					[{text: "Диджей для программы родителям",alignment:'center'},{text: "5 тысяч рублей",alignment:'center'}],
					[{text: "Индивидуальная фотозона на заказ",alignment:'center'},{text: "От 5 тысяч рублей",alignment:'center'}],
					],
					headerRows:1,
					margin:[ 0, 5, 0, 0 ]
					}
			}
		]

	}
	let docs = [docInfo1,docInfo2,docInfo3,docInfo4];
	pdfMake.createPdf(docs[typeOfProgram]).download('Программа.pdf');
}

var mobileMenuIcon = document.querySelector(".mob-menu-icon");
var mobileMenuCloseIcon = document.querySelector(".mob-menu-icon-close");
var mobileMenu = document.querySelector(".mob-bar");
mobileMenuIcon.onclick = function(){
	mobileMenu.style.display = "flex";
}
mobileMenuCloseIcon.onclick = function(){
	mobileMenu.style.display = "none";
}
var calcButton = document.querySelector(".calculate");
var summing = document.querySelector(".summing");
var valueRange = document.querySelector("#valueRange");
calcButton.onclick = function(){
	if (valueRange.value == 0 && typesOfCB[slideIndex]=="People" || valueRange.value > 32 || valueRange.value < 12 )
	{
		return alert('Введите количество человек из указанного диапазона');
	}
	addNumberOfPeople();
	totalSlide.style.display = "flex";
	lastSlide.style.display = "none";
	countPrice();
	var programs = document.querySelector('.programm > input:checked');
	var programTotal = document.querySelector('.programm-of-event');
	var events = document.querySelector('.event > input:checked');
	var eventTotal = document.querySelector('.events');
	var peopleQuantity = document.querySelector('.people-quantity');
	//var options = document.querySelectorAll(".option > input:checked");
	//var optionsTotal = document.querySelector(".options");
	var sumTotal = document.querySelector(".sum");
	sumTotal.innerHTML= Math.round(price/numberOfPeople) + " рублей на человека";
	programTotal.innerHTML = programs.getAttribute('data-programm');
	eventTotal.innerHTML = events.getAttribute('data-event');
	peopleQuantity.innerHTML = valueRange.value + " человек";
	document.querySelector(".download-button").style.display = "flex";
	document.querySelector("#send-button").style.display = "flex";
	//for (var i = 0; i < options.length; i++) {
	//	optionsTotal.innerHTML += options[i].getAttribute('data-option') + "<br>";
	//}
}
var sendButton = document.querySelector("#send-button");
sendButton.onclick = function(){
	modal.style.display = "flex";
}
var stripbar = document.querySelector(".stripbar");
window.onscroll = function(){
	stripbar.style.backgroundColor = "rgb(125, 218, 135,0.9)";
	if(window.pageYOffset == 0){
		stripbar.style.backgroundColor = "rgba(0,0,0,0.2)";
	}
}
var modal = document.querySelector(".modal");

var closeModal = document.querySelector("#closeModal");
var totalSlide = document.querySelector(".slide-total");

closeModal.onclick = function(){
	modal.style.display="none";
}
if (totalSlide.style.display == "flex"){
	document.querySelector(".download-button").style.display = "flex";
}
else{
	document.querySelector(".download-button").style.display = "none";
}


//функции калькулятора
function addProgramType()
{
	var rad=document.getElementsByName("Program");
	for (var i=0;i<rad.length; i++)
	{
		if (rad[i].checked)
		{
			typeOfProgram=Number(rad[i].value);
		}
	}
}

function addEventType()
{
	var rad=document.getElementsByName("Events");
	for (var i=0;i<rad.length; i++)
	{
		if (rad[i].checked)
		{
			typeOfEvent=Number(rad[i].value);
		}
	}
}

function addNumberOfPeople()
{
	numberOfPeople=Number(document.getElementById("valueRange").value);
}

function countPrice()
{
	price = 0;
	price=Number(price)+Number(eventsPrice[Number(typeOfEvent)]);
	if(typeOfProgram==0)
	{
		price=Number(price)+(Number(numberOfPeople)*Number(firstProgramPrice[Number(numberOfPeople)-12]));
	}
	if(typeOfProgram==1)
	{
		price=Number(price)+(Number(numberOfPeople)*Number(secondProgramPrice[Number(numberOfPeople)-12]));
	}
	if(typeOfProgram==2)
	{
		price=Number(price)+(Number(numberOfPeople)*Number(thirdProgramPrice[Number(numberOfPeople)-12]));
	}
	if(typeOfProgram==3)
	{
		price=Number(price)+(Number(numberOfPeople)*Number(fourthProgramPrice[Number(numberOfPeople)-12]));
	}
	/*for(var i=0;i<7; i++)
	{
		price = Number(price)+Number(optionsPrice[i]);
	}*/
}

function addAdditionalOption()
{
	for(var i=0;i<7; i++)
	{
		if(document.getElementById(i).checked)
		{
			listOfAdditionalOptions.push(i)
		}
	}
	for(var i=0;i<listOfAdditionalOptions.length; i++)
	{
		allOptions=allOptions + ourOptions[listOfAdditionalOptions[i]]+",";
	}
}


