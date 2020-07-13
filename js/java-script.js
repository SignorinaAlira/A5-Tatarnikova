let tale_arr = ["Жили-были {var1} да {var2}",
				"Была у них {var3}",
				"Снесла {var3} {var4}, не простое - золотое",
				"- {var1} бил, бил - не разбил",
				"- {var2} била, била - не разбила",
				"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
				"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
				"{speach}"];

let buttonCreate = document.querySelector('.btnCreate');
buttonCreate.addEventListener('click', showText);

function showText() {
	let tale_str = '';
	let text = document.querySelector('.text');
	text.innerText = '';
	for (var i = 0; i < tale_arr.length; i++) {
		tale_str = tale_str + tale_arr[i] + '. ' + '\n';
	}
	text.innerText = tale_str;
}

let buttonReplace = document.querySelector('.btnReplace');
buttonReplace.addEventListener('click', replaceText);

function replaceText() {

	const var_arr = [document.querySelector('#var1').value,
				document.querySelector('#var2').value,
				document.querySelector('#var3').value,
				document.querySelector('#var4').value,
				document.querySelector('#var5').value,
				document.querySelector('#var6').value
				]
	let newText = document.querySelector('.text').innerText;

	for (var i = 0; i < var_arr.length; i++) {
		perem1 = "{var" + (i+1) + "}";
		perem2 = var_arr[i];
		newText = newText.split(perem1).join(perem2);
	}

	newText = newText.split('{speach}').join(document.querySelector('#speach').value);

	let text = document.querySelector('.text');
	text.innerText = newText;

}