import { useForm } from "react-hook-form";

function EnquiryForm()
{
  const{register, handleSubmit, reset, setValue, formState}=useForm();

  function saveData(data){
    alert("Form Submitted Successfully")
    console.log(data)
  }

    function onReset(){
        reset();
    }

    function onUpdateProfile(){
        const Customer={
          fullname:"Shubham Chavhan",
          emailId:"shubhamchavhan@gmail.com",
          contactNumber:8390998938,
          age:30,
          batchNumber:"FDJ B-185",
          gender:"Male",
          batchMode:"Offline"
        }
    
        for(let prop in Customer){
          setValue(prop, Customer[prop])
        }
      }
    

  return<div>
    <h1> Customer Registration Form:-</h1>
    <form onSubmit={handleSubmit(saveData)}>
        <div>
            Enter FirstName:- <input type="text" {...register("FirstName")} />
            &nbsp; &nbsp;
        </div>
        <div>
            Enter LastName:- <input type="text" {...register("LastName")} />
        </div>
        <div>
            Enter Age:- <input type="number" {...register("Age")} />
        </div>
        <div>
            Enter Email:- <input type="text" {...register("Email")} />
        </div>
        <div>
            Enter Mobileno:- <input type="number" {...register("Mobileno")} />
        </div>
        <div>
            PanCard:- <input type="text" {...register("PanCard")} />
        </div>
        <div>
            CibilScore:-<input type="number" {...register("CibilScore")} />
        </div>
        <div>
            EnquiryStatus:- <input type="text" {...register("EnquiryStatus")} />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onReset}>Reset</button>
        <button type="button" onClick={onUpdateProfile}>Update</button>
    </form>
  </div>
}
export default EnquiryForm;