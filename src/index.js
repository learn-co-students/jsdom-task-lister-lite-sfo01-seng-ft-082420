document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  

  const addTask = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
  }
  form.addEventListener('submit', (e)=>addTask(e));
  //console.log(form)
});
