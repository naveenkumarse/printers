import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';


export const Checkout = (props) => {
  const { uid, total } = props
  const { mycart } = props
  const remove = async () => {

    const userid = localStorage.getItem("email");
    const dm = mycart.filter((id) => id.uid = userid);
    dm.forEach(async (d) => {
      await deleteDoc(doc(db, 'addtocart', d.id));
    })

  }

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [streetname, setStreetname] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Tamil Nadu');
  const [pincode, setPincode] = useState('');
  const OrderedProducts = mycart.reduce((prev, cur) => prev + cur.name + ",", "");
  // useEffect(()=>{
  // console.log(mycart);

  // console.log(OrderedProducts);
  // },[])

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_iHCOvHBiEbNycP",
      currency: "INR",
      amount: amount * 100,
      name: "Thamizhini Athiappan",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Thamizhini Athiappan",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const pay = async (e) => {


    let tdate = new Date()
    let day = tdate.getDate();
    let month = tdate.getMonth() + 1;
    let year = tdate.getFullYear();
    let date = `${day}.${month}.${year}.`;
    const uid = localStorage.getItem("email");
    const body = { uid, firstname, lastname, email, phoneno, streetname, city, state, pincode, total, date, OrderedProducts }
    const address = streetname + " " + city + " " + state + " " + pincode;
    e.preventDefault();
    await addDoc(collection(db, 'orders'), {
      name: firstname + " " + lastname,
      products: OrderedProducts,
      date: date,
      address: address,
      amount: total,
      uid: uid,
      phone: phoneno
    })
     remove();
    
  }

  return (
    <div className='checkout'>


      <h1 class="sr-only">Checkout</h1>

      <div class="" >
        <div class="mx-auto max-w-lg px-4 lg:px-12">
          <br />
          <br />
          <br />
          <br />
          <br />
          <form class="grid grid-cols-6 gap-4">
            <div class="col-span-3">
              <label
                for="FirstName"
                class=" block text-l font-medium text-gray-700"
              >
                First Name
              </label>

              <input class=" mt-1 w-full rounded-md border-gray-200 shadow-lg lg:text-lg" id="name" name="fname" type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} placeholder=" First Name" required />

            </div>

            <div class="col-span-3">
              <label
                for="LastName"
                class="block text-l font-medium text-gray-700"
              >
                Last Name
              </label>

              <input class=" mt-1 w-full rounded-md border-gray-200 shadow-lg lg:text-lg" id="lname" name="lname" type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} placeholder=" Last Name" />
            </div>

            <div class="col-span-6">
              <label for="Email" class="block text-l font-medium text-gray-700">
                Email
              </label>

              <input class="  mt-1 w-full rounded-md border-gray-200 shadow-lg lg:text-lg" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your mail id" required />

            </div>

            <div class="col-span-6">
              <label for="Phone" class="block text-l font-medium text-gray-700">
                Phone
              </label>

              <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class=" mt-1 w-full rounded-md border-gray-200 shadow-lg lg:text-lg" id="ph" name="ph" type="text" onChange={(e) => setPhoneno(e.target.value)} value={phoneno} placeholder="Enter your mobile number" required />

            </div>

            <fieldset class="col-span-6">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Door no & street name
                  </label>
                  <input class="appearance-none block w-full bg-neutral-100  background-color: rgb(245 245 245) text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="sname" name="sname" type="text" onChange={(e) => setStreetname(e.target.value)} value={streetname} placeholder="Enter your address" required />

                </div>
              </div>


              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-city">
                    City
                  </label>
                  <input class=" relative w-full rounded-t-md border-gray-200 focus:z-10 lg:text-lg" id="city" name="city" type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder="City" required />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-state">
                    State
                  </label>
                  <div class="relative">
                    <select class="relative w-full rounded-t-md border-gray-200 focus:z-10 lg:text-lg" id="state" name="state" defaultValue={state} required >
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-l font-bold mb-2" for="grid-zip">
                    Pincode
                  </label>
                  <input class="relative w-full rounded-b-md border-gray-200 focus:z-10 lg:text-lg" id="pincode" name="pincode" type="text" onChange={(e) => setPincode(e.target.value)} value={pincode} placeholder="Pincode" required />
                </div>
              </div>
            </fieldset>

            <div class="col-span-6">
              <button class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg" type="button" onClick={(e) => { pay(e); displayRazorpay(total); }} >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}