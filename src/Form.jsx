import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input, Radio, } from './components/QInput';
import { Label } from './components/QInput';
import CreateMediaPost from './components/CreateMediaPost';
import SignPad from './components/SignPad';


const Form = () => {
  const [state, handleSubmit] = useForm("xpwwnrzl");
  const [media, setMedia] = useState([]);
  const [signature, setSignature] = useState(null);

  useEffect(() => {
    if (signature) {
      // console.log('Signature:', signature);
    }
    // console.log('Media:', media);
    // console.log('state:', state);
  }, [signature, state, media, handleSubmit]);
  
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
          <button 
            onClick={() => window.location.reload()}
            className="w-6 h-6 bg-gray-700 rounded-full absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-primary text-2xl font-bold animate-bounce">Success!</h2>
          <p className="text-lightBlack mt-2">Your response has been recorded!.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-2xl mx-auto bg-black rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">APPLICATION FORM</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label kol={'Full Name'} text='1. Enter your Full Name' />
            <div className='flex gap-4'>
                <Input type='text' id='fname' name='First Name' place='First Name' required />
                <Input type='text' id='lname' name='Last Name' place='Last Name' required />
            </div>
          </div>

          <div>
            <Label kol={'Email Address'} text='2. Enter your email address' />
            <Input type='email' id='email' name='Email Address' place='you@example.com' required />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'Address'} text='3. Address' />
            <Input type='address' id='address' name='Address' place='Address' required />
            <ValidationError prefix="Address" field="address" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'Phone Number'} text='4. Phone number' />
            <Input type='phone' id='phone' name='Phone Number' place='Phone' required />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'Marriage Status'} text='5. Are you married' />
            <Input type='text' id='marriage' name='Marriage Status' place='' required />
            <ValidationError prefix="Marriage Status" field="marriage" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'Have Kids'} text='6. Do you have kids' />
            <Input type='text' id='kids' name='Have Kids' place='' required />
            <ValidationError prefix="Have Kids" field="kids" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          
          <div>
            <Label kol={'Have Pets'} text='7. Do you have Pets' />
            <Input type='text' id='pets' name='Have Pets' place='' required />
            <ValidationError prefix="Have Pets" field="pets" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Have Car'} text='8. Do you have car' />
            <Input type='text' id='car' name='Have Car' place='' required />
            <ValidationError prefix="Have Car" field="car" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Occupation'} text='9. Occupation' />
            <Input type='text' id='occupation' name='Occupation' place='' required />
            <ValidationError prefix="Occupation" field="occupation" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Number of Residents'} text='10. How many people will be living in the house' />
            <Input type='number' id='residents' name='Number of Residents' place='' required />
            <ValidationError prefix="Number of Residents" field="residents" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Monthly Income'} text='11. Monthly income' />
            <Input type='text' id='income' name='Monthly Income' place='' required />
            <ValidationError prefix="Monthly Income" field="income" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Move-in Timeline'} text='12. How soon do you intend moving in' />
            <Input type='text' id='moveIn' name='Move-in Timeline' place='' required />
            <ValidationError prefix="Move-in Timeline" field="moveIn" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Application Date'} text='13. Date' />
            <Input type='date' id='date' name='Application Date' place='' required />
            <ValidationError prefix="Application Date" field="date" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'License Photo'} text='14. A picture of occupant/Drivers license' />
            <CreateMediaPost media={media} setMedia={setMedia} />
            <ValidationError prefix="License Photo" field="license" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Security Deposit Timeline'} text='15. How soon you make the security deposit payment' />
            <Input type='text' id='deposit' name='Security Deposit Timeline' place='' required />
            <ValidationError prefix="Security Deposit Timeline" field="deposit" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Keys Timeline'} text='16. How soon do you want to get the keys' />
            <Input type='text' id='keys' name='Keys Timeline' place='' required />
            <ValidationError prefix="Keys Timeline" field="keys" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Smoking Status'} text='17. Do you smoke' />
            <div className='flex space-x-2'>
                <div className='w-1/2'>
                    <Radio name={'Smoking Status'} id={'smoke'} value={'yes'} label={'Yes'} />
                </div>
                <div className='w-1/2'>
                    <Radio name={'Smoking Status'} id={'smoke'} value={'no'} label={'No'} />
                </div>
            </div>
            <ValidationError prefix="Smoking Status" field="smoke" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'Number of Adults'} text='18. How many adults are moving in' />
            <Input type='text' id='adults' name='Number of Adults' place='' required />
            <ValidationError prefix="Number of Adults" field="adults" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'Criminal Record'} text='19. Have you ever been convicted of any crime?' />
            <div className='flex space-x-2'>
                <div className='w-1/2'>
                    <Radio name={'Criminal Record'} id={'convict'} value={'yes'} label={'Yes'} />
                </div>
                <div className='w-1/2'>
                    <Radio name={'Criminal Record'} id={'convict'} value={'no'} label={'No'} />
                </div>
            </div>
            <ValidationError prefix="Criminal Record" field="convict" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'Eviction History'} text='20. If yes, have you been evicted' />
            <div className='flex space-x-2'>
                <div className='w-1/2'>
                    <Radio name={'Eviction History'} id={'evict'} value={'yes'} label={'Yes'} />
                </div>
                <div className='w-1/2'>
                    <Radio name={'Eviction History'} id={'evict'} value={'no'} label={'No'} />
                </div>
            </div>
            <ValidationError prefix="Eviction History" field="evict" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div className='text-white font-semibold'>
            <h3>Note : Dear Ocupant, you are to pay a refundable fee of <span className='font-bold'>$85 </span> which is meant for the application fee. It will be refunded immediately if you don't like the property after viewing.</h3>
          </div>

          <div>
            <Label kol={'Payment Method'} text='21. How do you want to make the payment for the application fee?' />
            <div className="space-y-3">
            {[
              "Cash App",
              "Zelle",
              "PayPal",
              "Venmo",
              "Chime",
              "Apple Pay",
              "Google Pay",
              "Bitcoin",
            ].map((method, i) => (
              <div className='py-3 pl-5 bg-[#444343] rounded-2xl'>
                  <label key={i} className="flex items-center text-white font-semibold space-x-2">
                    <input
                      type="checkbox"
                      name="paymentMethod"
                      value={method}
                      className="w-5 h-5 bg-transparent text-blue-600 bg-gray-800 border-gray-700 focus:ring-blue-500"
                    />
                    <span>{method}</span>
                  </label>
              </div>
            ))}
          </div>
            <ValidationError prefix="Payment Method" field="paymentMethod" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'Payment Confirmation'} text='22. Have you make the payment for the application fee' />
            <div className='flex space-x-2'>
                <div className='w-1/2'>
                    <Radio name={'Payment Confirmation'} id={'payment'} value={'yes'} label={'Yes'} />
                </div>
                <div className='w-1/2'>
                    <Radio name={'Payment Confirmation'} id={'payment'} value={'no'} label={'No'} />
                </div>
            </div>
            <ValidationError prefix="Payment Confirmation" field="payment" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* <div>
            <Label kol={'Signature'} text='23. Please sign below to confirm all information is correct' />
            <SignPad onSave={(signatureData) => setSignature(signatureData)} />
            <ValidationError prefix="Signature" field="signature" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
              id="petType"
              name="petType"
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
          </div> */} 

          {/* <div>
            <label htmlFor="message" className="block text-lightBlack font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Share your thoughts with us..."
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div> */}

        <div>
            <Label kol={'signature'} text='23. Please sign below to confirm all information is correct' />
            <SignPad onSave={(signatureData) => setSignature(signatureData)} />
            <ValidationError prefix="Signature" field="signature" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {state.submitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;



// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
