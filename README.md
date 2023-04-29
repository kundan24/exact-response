# Exact Response

Its a simple graphql type alternative for any rest api.

## Any query

contact me on Linkedin [kundan kumar](https://www.linkedin.com/in/kundan-kumar-%E2%9C%85-5a65a1132/) .



## Installation


```bash
npm install exact-response
```

## Usage
```
BY GET METHOD
http://localhost:4000/api?myCustomQry='name,email,address.city'
                         OR
```
```
BY POST METHOD
http://localhost:4000/api

//pass your identifier in body and post it

body:{
"myCustomQry":"name,email,address"
}
                           OR
```
```
By Custom header
//If you don't want show query in url you can also set header
axios.get('https://example.com/getSomething', {
 headers: {
  "myCustomQry":"name,email,address"
 }
})

```

```javascript
import {exactResponse, exactData} from 'exact-response'

routes.get('/',(req:Request,res:Response,next:NextFunction)=>{
try{
let data=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "city": "Gwenborough",
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "city": "Wisokyburgh"
    }
}]

return res.json(exactResponse(req,data,'myCustomQry'));

/**
  it will return data what you exactly want
   Nothing more nothing less 

 [{
    "name": "Leanne Graham",
    "username": "Bret",
    "address": {
      "city": "Gwenborough",
    }
  },
  {
    "name": "Ervin Howell",
    "username": "Antonette",
     "address": {
      "city": "Wisokyburgh"
    }
  }]  **/
}catch(err){
next(err);
})

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)