

let card = document.querySelectorAll(".card");
let cartNum = 0;
let submit = document.getElementById('submit')

// ========================product section add to cart========================//

document.querySelector('.cartItems').style.display = 'none'
card.forEach(function (cards) {
	cards.addEventListener("click", function () {
		console.log(cards);
		document.querySelector('.cartItems').style.display = 'block'
		cartNum++;
		document.querySelector("#cartNum").innerHTML = cartNum
		let div = document.createElement("div");
		div.classList.add("cartList");
		div.innerHTML = `
		<i class="fa-solid fa-xmark" onclick="remove()"></i>
		<img src=${cards.firstElementChild.src}>
		<p>$899</p>
		`

		document.querySelector(".cartItems").appendChild(div)
	})
})

function remove() {
	cartNum--;
	let cartList = document.querySelectorAll(".cartList")
	cartList.forEach(function (currentItem) {
		currentItem.addEventListener("click", function () {
			if (cartNum == 0) {
				document.querySelector('.cartItems').style.display = 'none'
			}
			currentItem.style.display = "none"
			document.querySelector("#cartNum").innerHTML = cartNum
		})
	})
}

// ====================== contact section ===============//

submit.addEventListener("click", function () {
	let email = document.getElementById("email");
	let pass = document.getElementById("pass");

	if (email.value == "" && pass.value == "") {
		alert("Enter Email and password for login")
	} else {
		alert("Thanks You Logged IN")
	}
})