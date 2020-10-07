document.addEventListener("DOMContentLoaded", () => 
{
  
  
  document.querySelector("form").onsubmit = function(event) {
  let text = document.getElementById("new-task-description").value
  event.preventDefault()

  let li = document.createElement('li');
  let but = document.createElement('button')

  but.innerText = "X"
  but.onclick = function(){
  document.getElementById(text).remove()
  
  }
  
  li.innerText = text
  li.appendChild
  li.id = text

  let ul = document.querySelector("#tasks")
  ul.appendChild(li)
  }
});

document.getElementById('generate').onclick = function() {

  var values = ["dog", "cat", "parrot", "rabbit"];

  var select = document.createElement("select");
  select.name = "pets";
  select.id = "pets"

  for (const val of values) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
  }

  var label = document.createElement("label");
  label.innerHTML = "Choose your pets: "
  label.htmlFor = "pets";

  document.getElementById("container").appendChild(label).appendChild(select);
}
