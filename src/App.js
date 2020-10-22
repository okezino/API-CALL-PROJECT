import React, {useState}from 'react';
import pic from './img/proimg.JPG';
import './App.css';

function App() {
  const [name, setname] = useState("")
  const [country, setcountry] = useState()
  const [phone, setphone] = useState()
  const [photo, setphoto] = useState(pic)
  const [local, setlocal] = useState()

  const submit = async ()=>{

   let url = "https://api.randomuser.me/";
   let fetchdata = await fetch(url);
   let data = await fetchdata.json();
   let full =  data.results[0].name.last + " "+data.results[0].name.first;
   let location = data.results[0].location.state + "/" + data.results[0].location.country;
   let cell = data.results[0].phone
   let image = data.results[0].picture.medium
   let add = data.results[0].location.street.number +" "+ data.results[0].location.street.name +" "+data.results[0].location.city
    setname(full)
    setcountry(location)
    setphone(cell)
    setphoto(image)
    setlocal(add)
   
  }
  
  return (
    <div className="container home" >
            <h4 >
               Click the button below 
            </h4>
            <button type="button" onClick={submit} className="btn px-4 my-4 btn-outline-success">Click</button>
            <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Full name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" value={name} />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Phone number</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" value={phone}/>
  </div>
  <div className="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  <label class="form-check-label" for="exampleRadios1">
    Transgender
  </label>
</div>
<div className="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  <label class="form-check-label" for="exampleRadios2">
    Male
  </label>
</div>
<div className="form-check disabled">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
  <label class="form-check-label" htmlFor="exampleRadios3">
    Female
  </label>
</div>
  <div className="form-group">
    <label for="formGroupExampleInput">Country/State</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" value={country}/>
  </div>
  
  <div className="form-group">
    <label for="formGroupExampleInput2">Address</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" value={local}/>
  </div>
  <div className="profile-userpic">
<img src= {photo} class="img-responsive" alt=""/>
				</div>
</form>
           
        </div>
  );
}

export default App;
