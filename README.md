## KumpulNgobrolAPI

KumpulNgobrolAPI is a website designed to bring people together by playing fun games with friends. Users can answer questions by choosing from various categories, making it an enjoyable way to spend time together.

### How to

#### Get all card

```
fetch("http://47.129.222.14/api/getallcard")
    .then((res) => res.json())
    .then((json) => console.log(json))
```

#### Get a single card

```
fetch("http://47.129.222.14/api/getallcard/kimia")
    .then((res) => res.json())
    .then((json) => console.log(json))
```

#### Add a card

```
fetch("http://47.129.222.14/api/addcard", {
    method: "POST",
    body:JSON.stringify({
        tag: "kimia",
        question: "who invented atom"
    })
})
    .then((res) => res.json())
    .then((json) => console.log(json))
```
