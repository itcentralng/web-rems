import React, { useState, useEffect } from "react";
import classes from "./addAgent.module.css";
import RightNav from "../../component/rightNav/RightNav";
import { useNavigate } from "react-router-dom";
import RemsAgentContext from "../../context/agentContext/AgentContext";
import { useContext } from "react";
// Checking form input fields...
const isEmpty = (value) => value.trim() === "";
const isNumber = (value) => value.trim().length >= 10;
const isEmail = (value) => value.includes("@");
const AddAgent = () => {
  const { addAgent, httpSuccess } = useContext(RemsAgentContext);
  const [timer, setTimer] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setTimer(httpSuccess);
    }, 3000);
    const time = setTimeout(() => setTimer(""), 5000);

    return () => {
      clearTimeout(time);
    };
  }, [httpSuccess]);
  // Handles the general form validation
  const [formValidity, setFormValidity] = useState({
    fullName: true,
    email: true,
    phoneNumber: true,
    workAddress: true,
    homeAddress: true,
    gender: true,
  });
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    workAddress: "",
    homeAddress: "",
    gender: "",
  });
  const [profileImg, setProfileImg] = useState(
    "https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"
  );
  const [assignment, setAssignment] = useState(false);
  const navigate = useNavigate();
  //   handles the general form value...
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  //  image file handler
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  // Overall form submission handle fuction
  const submitHandler = (event) => {
    event.preventDefault();

    const eneteredName = !isEmpty(form.fullName);
    const enteredEmail = isEmail(form.email);
    const enteredNumber = isNumber(form.phoneNumber);
    const enteredWorkAddress = !isEmpty(form.workAddress);
    const enteredHomeAddress = !isEmpty(form.homeAddress);
    const enteredGender = !isEmpty(form.gender);

    setFormValidity({
      fullName: eneteredName,
      email: enteredEmail,
      phoneNumber: enteredNumber,
      workAddress: enteredWorkAddress,
      homeAddress: enteredHomeAddress,
      gender: enteredGender,
    });

    const formIsValid =
      enteredEmail &&
      enteredHomeAddress &&
      enteredNumber &&
      enteredWorkAddress &&
      eneteredName &&
      enteredGender;

    if (!formIsValid) {
      // return (
      //   <section className={classes.formInvalid}>
      //     <p>Something went wrong</p>
      //   </section>
      // );
    }

    // console.log(form, profileImg);

    const formData = {
      email: form.email,
      phone: form.phoneNumber,
      home_address: form.homeAddress,
      work_address: form.workAddress,
      name: form.fullName,
      image: profileImg,
    };
    addAgent(formData);
    // console.log(formData);

    setForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      workAddress: "",
      homeAddress: "",
      gender: "",
    });
    setProfileImg(
      "https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"
    );
  };

  const nameControlClasses = `${classes.control} ${
    formValidity.fullName ? "" : classes.invalid
  }`;
  const emailControlClasses = `${classes.control} ${
    formValidity.email ? "" : classes.invalid
  }`;
  const numberControlClasses = `${classes.control} ${
    formValidity.phoneNumber ? "" : classes.invalid
  }`;
  const homeAddControlClasses = `${classes.control} ${
    formValidity.homeAddress ? "" : classes.invalid
  }`;
  const workAddControlClasses = `${classes.control} ${
    formValidity.workAddress ? "" : classes.invalid
  }`;
  const genderControlClasses = `${classes.radio__input} ${
    formValidity.gender ? "" : classes.invalid
  }`;

  // const timeOut = setTimeout(() => {
  //   <p className={classes.success}>{httpSuccess}</p>;
  // }, 3000);

  // clearTimeout(timeOut);

  return (
    <div className={classes.agentStyle}>
      <RightNav button buttonText='Back' onClick={() => navigate("/agents")} />
      <form onSubmit={submitHandler} className={classes.form__control}>
        <div className={classes.img_input}>
          <div className={classes.img_holder}>
            <img
              src={profileImg}
              alt='Agent Profile'
              id='img'
              className={classes.agentImg}
            />
          </div>
          <input
            type='file'
            name='image'
            id='image'
            className={classes.inputFile}
            accept='image/*'
            onChange={imageHandler}
          />
          <label htmlFor='image' className={classes.img_upload}>
            Choose Photo
          </label>
        </div>
        <div className={classes.status}>
          <div className={classes.asign}>
            <p>Assignment Status</p>
            <div
              className={
                assignment ? classes.asign_success : classes.asign_bulb
              }></div>
          </div>
          <div className={classes.rent}>
            <p>Rent Status</p>
            <div className={classes.rent_bulb}></div>
          </div>
        </div>
        <div className={classes.inputs}>
          <div className={nameControlClasses}>
            <label htmlFor='name' className={classes.label}>
              Full name
            </label>
            <input
              className={classes.input}
              type='text'
              name='fullName'
              value={form.fullName}
              onChange={handleChange}
              placeholder='Ahmad Anas Nuhu'
            />
            {!formValidity.fullName && <p>Name field cannot be empty</p>}
          </div>
          <div className={emailControlClasses}>
            <label htmlFor='email' className={classes.label}>
              Email
            </label>
            <input
              className={classes.input}
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Ahmadanasnuhu323@gmail.com'
            />
            {!formValidity.email && <p>Please enter a valid email</p>}
          </div>
        </div>
        <div className={numberControlClasses}>
          <label htmlFor='number' className={classes.label}>
            Phone No
          </label>
          <input
            className={classes.input}
            type='tel'
            name='phoneNumber'
            value={`${form.phoneNumber}`}
            onChange={handleChange}
            placeholder='081345466.. '
          />
          {!formValidity.phoneNumber && <p>Enter a valid phone number</p>}
        </div>
        <div className={genderControlClasses}>
          <label className={classes.custom_radio_btn}>
            <input
              type='radio'
              name='gender'
              value='male'
              onChange={handleChange}
              checked={form.gender === "male"}
            />
            Male
            <span className={classes.checkmark}></span>
          </label>
          <label className={classes.custom_radio_btn}>
            <input
              type='radio'
              name='gender'
              value='female'
              onChange={handleChange}
              checked={form.gender === "female"}
            />
            Female
            <span className={classes.checkmark}></span>
          </label>
          {!formValidity.gender && <p>Select an option</p>}
        </div>
        <div className={classes.inputs}>
          <div className={homeAddControlClasses}>
            <label htmlFor='address' className={classes.label}>
              Home Address
            </label>
            <input
              className={classes.input}
              type='text'
              name='homeAddress'
              value={form.homeAddress}
              onChange={handleChange}
              placeholder='No 5, Okitipupa Cres, Kubwa, Abuja.'
            />
            {!formValidity.homeAddress && <p>Address field cannot be empty</p>}
          </div>
          <div className={workAddControlClasses}>
            <label htmlFor='work-address' className={classes.label}>
              Work Address
            </label>
            <input
              className={classes.input}
              type='text'
              name='workAddress'
              value={form.workAddress}
              onChange={handleChange}
              placeholder='No 5, Okitipupa Cres, Kubwa, Abuja.'
            />
            {!formValidity.workAddress && <p>Address field cannot be empty</p>}
          </div>
        </div>
        <button className={classes.submit}>Add Agent</button>
      </form>
      <p className={classes.success}>{timer}</p>
    </div>
  );
};

export default AddAgent;
