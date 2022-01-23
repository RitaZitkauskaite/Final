/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const formEl = document.querySelector("form");
const outputDiv = document.getElementById("output");

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	const inputValue = document.getElementById("search").value;
	if (!isNaN(inputValue)) {
		const poundValue = inputValue * 2.2046;
		const gramValue = inputValue / 0.001;
		const ounceValue = inputValue * 35.274;
		const listEl = document.createElement("ul");
		listEl.style.cssText =
			"max-width: 80%; margin: 50px auto; background-color: antiquewhite; display: flex; flex-direction: column;";
		const firstLiEl = document.createElement("li");
		const secondLiEl = document.createElement("li");
		const thirdLiEl = document.createElement("li");
		const listElStyle =
			"padding: 0.5rem; list-style-type: none; text-align: center; justify-content: center; font-size: 1.5rem;";
		firstLiEl.style.cssText = listElStyle;
		secondLiEl.style.cssText = listElStyle;
		thirdLiEl.style.cssText = listElStyle;
		firstLiEl.textContent = poundValue + " lb";
		secondLiEl.textContent = gramValue + " g";
		thirdLiEl.textContent = ounceValue + " oz";
		listEl.append(firstLiEl);
		listEl.append(secondLiEl);
		listEl.append(thirdLiEl);
		outputDiv.append(listEl);
	} else {
		alert("Not a number");
	}
});
