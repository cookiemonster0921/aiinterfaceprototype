var button = document.getElementById("submit");
var edit = document.getElementById("html");
var suggest = document.getElementById("css");
var mark = document.getElementById("javascript");
var pretend = document.getElementById("pretend");
var work = document.getElementById("chat-input");
var fname = document.getElementById("name");
var chatbox = document.getElementById("chat-box");
var year = document.getElementById("cars");
button.style.color = "green";
var prompt = "";
var auth =
  "skypetoken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjExRkNCRjhEQzBFRTMzQUY3QkIwQTE3OUUzNjI0RUNBNjk1ODE2NjQiLCJ4NXQiOiJFZnlfamNEdU02OTdzS0Y1NDJKT3ltbFlGbVEiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MzA2MTU0NzcsImV4cCI6MTczMDcwMTg3Nywic2t5cGVpZCI6ImxpdmU6LmNpZC44OWU2M2FkZWUzZjAyM2NhIiwic2NwIjo5NTYsImNzaSI6IjE3MzA2MTU0NzciLCJjaWQiOiI4OWU2M2FkZWUzZjAyM2NhIiwiYWF0IjoxNzI2OTY5NDIzfQ.NlrjHQqBmj4pcrs2dfuKEvzKIdEQ3e9kwwJ4U_RaV65cJf6yQaEgoaGL2QgWkvny_gwMl4Wnp3T9f8SBhdX6M56sTZSrGOwqDkU7fVPRmWmV1xlzHamXjW7gyb0b5yaemDbm1byiIHCdrYPOD6aJrh-yBHJjb_62j9Hyh59lNfeZERWNNDSrP9pe6zvL7CIw1BYNMOcKn0--rTXcyu1ZcZ5kSZ-pTGU34mQKgO4iAmHjIOhDSjX0SDPw7hKEbTpRXiYcAvp0Pp0gTi9wIvQtuS9BhM1ICHPFamCltRh7uFPBD7lxfzWCOBzMP6RFK-tVVRPwUaIjWL7N0OYquS597Q";

//add year box dropdown
//replace asterix with bold
//teams webhook notification
//school colours and logo

//google generative ai rate limits, might need payment for schoolwide usage
var data = {};
var url = "https://js-ai-prototype.vjiang888.workers.dev/";
//console.log(y);
button.addEventListener("click", () => {
  chatbox.textContent = "";
  if (edit.checked) {
    button.textContent = edit.value;
    prompt = `pretend to be ${pretend.value} and edit the text below for a child in year ${year.value}\n\n ${work.value}`;
    console.log(prompt);
    data.name = fname.value;
    data.prompt = prompt;
    data.auth = auth;
    console.log(JSON.stringify(data));
    send(data);
    //notify("we");
  }
  if (suggest.checked) {
    button.textContent = suggest.value;
    prompt = `pretend to be ${pretend.value} and suggestions on how to improve text below written for a student in Year ${year.value}\n\n ${work.value}`;
    console.log(prompt);
    data.name = fname.value;
    data.prompt = prompt;
    data.auth = auth;
    console.log(JSON.stringify(data));
    send(data);
  }
  if (mark.checked) {
    button.textContent = mark.value;
    prompt = `pretend to be ${pretend.value} and mark the text below out of 20 for a child in year ${year.value}\n\n ${work.value}`;
    console.log(prompt);
    data.name = fname.value;
    data.auth = auth;
    data.prompt = prompt;
    send(data);
  }
});
function notify(data) {
  const myHeaders = new Headers();
  myHeaders.append(
    "Pm-H0",
    "Content-Type=application/json, Authentication=skypetoken%3DeyJhbGciOiJSUzI1NiIsImtpZCI6IjExRkNCRjhEQzBFRTMzQUY3QkIwQTE3OUUzNjI0RUNBNjk1ODE2NjQiLCJ4NXQiOiJFZnlfamNEdU02OTdzS0Y1NDJKT3ltbFlGbVEiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MzA2MTU0NzcsImV4cCI6MTczMDcwMTg3Nywic2t5cGVpZCI6ImxpdmU6LmNpZC44OWU2M2FkZWUzZjAyM2NhIiwic2NwIjo5NTYsImNzaSI6IjE3MzA2MTU0NzciLCJjaWQiOiI4OWU2M2FkZWUzZjAyM2NhIiwiYWF0IjoxNzI2OTY5NDIzfQ.NlrjHQqBmj4pcrs2dfuKEvzKIdEQ3e9kwwJ4U_RaV65cJf6yQaEgoaGL2QgWkvny_gwMl4Wnp3T9f8SBhdX6M56sTZSrGOwqDkU7fVPRmWmV1xlzHamXjW7gyb0b5yaemDbm1byiIHCdrYPOD6aJrh-yBHJjb_62j9Hyh59lNfeZERWNNDSrP9pe6zvL7CIw1BYNMOcKn0--rTXcyu1ZcZ5kSZ-pTGU34mQKgO4iAmHjIOhDSjX0SDPw7hKEbTpRXiYcAvp0Pp0gTi9wIvQtuS9BhM1ICHPFamCltRh7uFPBD7lxfzWCOBzMP6RFK-tVVRPwUaIjWL7N0OYquS597Q, User-Agent=PostmanRuntime/7.42.0, Accept=*/*, Cache-Control=no-cache, Host=teams.live.com, Accept-Encoding=gzip%2C deflate%2C br, Connection=keep-alive"
  );
  myHeaders.append(
    "Pm-O0",
    "method=POST, timings=true, timeout=180000, rejectUnauthorized=false"
  );
  myHeaders.append(
    "Pm-U",
    "https://teams.live.com/api/chatsvc/consumer/v1/users/ME/conversations/19%3Afdx3MP3G_846HH2ANa2ykBYDJPbTehKqJZP9DPsOKMM1%40thread.v2/messages"
  );
  myHeaders.append(
    "Referer",
    "https://web.postman.co/workspace/My-Workspace~c314da9e-1dd1-4ea3-8563-ac0b18a1bc6c/request/33497347-146bb5f2-0e49-4960-8401-7b959e598200?tab=body&ctx=code"
  );
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1MmY0MzdjLWYwZTQtNGVmNC04YzQyLWRlMmYzYzk1MjZjMSIsInVzZXJJZCI6MzM0OTczNDcsInRlYW1JZCI6MCwiaXYiOiJCNy92cmlhc210MERPbUFJTHBxMk9nPT0iLCJhbGdvIjoiYWVzLTEyOCIsImlhdCI6MTczMDYyMDYwNiwiZXhwIjoxNzMwNjIyNDA2fQ.KiZdQSDYPtWCisD_kVHLFj-_WSSNlyzEPhPS6zob7wc\n"
  );
  myHeaders.append(
    "Cookie",
    "__cf_bm=y.4rtSJfRa97NQheejPNR7.jAZs1.JDSFn3VpOmJhRE-1730620614-1.0.1.1-oRs8nvqMj1z7iKgP2M1dbgB_f3wBvjRPeVkGf2hMu6b3rv4dUoNn4lrjfqamciIdC4fwTxJISOnHAXzmOK2saQ; _cfuvid=5lqAqX9S9GvM9OecVo2LHGDCTbVas2LHUQa3PvRNIMo-1730620614328-0.0.1.1-604800000"
  );

  const raw = JSON.stringify({
    id: "-1",
    type: "Message",
    conversationid: "19:fdx3MP3G_846HH2ANa2ykBYDJPbTehKqJZP9DPsOKMM1@thread.v2",
    conversationLink:
      "blah/19:fdx3MP3G_846HH2ANa2ykBYDJPbTehKqJZP9DPsOKMM1@thread.v2",
    from: "8:live:.cid.89e63adee3f023ca",
    composetime: "2024-10-27T22:32:22.553Z",
    originalarrivaltime: "2024-10-27T22:32:22.553Z",
    content: "<h1>whckmte</h1>",
    messagetype: "RichText/Html",
    contenttype: "Text",
    imdisplayname: "ben",
    callId: "",
    state: 0,
    version: "0",
    amsreferences: [],
    properties: {
      importance: "low",
      subject: "ben",
      title: "aaron",
      cards: "[]",
      links: "[]",
      mentions: "[]",
      onbehalfof: null,
      files: "[]",
      policyViolation: null,
    },
    crossPostChannels: [],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://orion-http.gw.postman.co/v1/request", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
function send(data) {
  button.textContent = "Loading...";
  button.disabled = true;
  var r = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Convert JavaScript object to JSON string
  })
    .then((data) => {
      return data.text();
    })
    .then((info) => {
      //console.log({ info });
      var x = { info };
      //console.log(x);

      //console.log(JSON.parse(x["info"].slice(6)).candidates[0].content.parts[0].text);
      var content = JSON.parse(x["info"].slice(6)).candidates[0].content
        .parts[0].text;
      //const markdownText = document.getElementById("markdown-input").value;
      const htmlContent = marked.parse(content);
      console.log(htmlContent);
      var element = document.createElement("p");
      //element.textContent = content;
      element.innerHTML = htmlContent;

      chatbox.appendChild(element);

      button.disabled = false;
      button.textContent = "Submit";
    })
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
}
