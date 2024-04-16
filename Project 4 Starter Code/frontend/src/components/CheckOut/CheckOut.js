import React, {  useState } from "react";
import "./CheckOut.css"
function CheckOut() {
  const [massage, setMassage] = useState();
  // const navigate = useNavigate();
  const [ZIP, setZip] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [building, setBuilding] = useState();
  const [card, setCard] = useState();
  const [expiration, setExpiration] = useState();
  const [security, setSecurity] = useState();
  const [cardName, setCardName] = useState();

  return (
    <div className="shipping">
      <input
        type="text"
        placeholder="Postal/ZIP Code"
        onChange={(e) => {
          setZip(e.target.value);
        }}
      />
      <br></br>
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br></br>

      <input
        type="text"
        placeholder="City"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <br></br>

      <input
        type="text"
        placeholder="Street Name"
        onChange={(e) => {
          setStreet(e.target.value);
        }}
      />
      <br></br>

      <input
        type="number"
        placeholder="Building Number"
        onChange={(e) => {
          setBuilding(e.target.value);
        }}
      />

      <br></br>
      <label> Payment</label>
<br></br>
      <input
        type="text"
        placeholder="Card Number"
        onChange={(e) => {
          setCard(e.target.value);
        }}
      />
      <br></br>
      <input
        type="text"
        placeholder="Expiration Date"
        onChange={(e) => {
          setExpiration(e.target.value);
        }}
      />
      <br></br>

      <input
        type="number"
        placeholder="Security Code"
        onChange={(e) => {
          setSecurity(e.target.value);
        }}
      />
      <br></br>

      <input
        type="text"
        placeholder="Name on Card"
        onChange={(e) => {
          setCardName(e.target.value);
        }}
      />
<br></br>
      <button
        onClick={() => {
        //   axios
        //     .post("http://localhost:5000/pay/${userId}", {
        //       ZIP,
        //       country,
        //       city,
        //       street,
        //       building,
        //       card,
        //       expiration,
        //       security,
        //       cardName,
        //     })
        //     .then((result) => {
        //       setMassage(result.data.massage);
        //     })
        //     .catch((error) => {
        //       setMassage(error.response.data.message);
        //     });
        setMassage("thank you for shipping")
       
        }}
      >
        {" "}
        Shipping{" "}
      </button>
      <br></br>
      {massage} 
    </div>
  );
}

export default CheckOut;
