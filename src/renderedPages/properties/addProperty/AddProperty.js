import "./addProperty.css";
import { useState } from "react";
import RightNav from "../../../component/rightNav/RightNav";

const AddProperty = () => {
  const [sortProperty, setSortProperty] = useState("State");

  const propertySorting = (e) => {
    const selectedSort = e.target.value;
    setSortProperty(selectedSort);
  };
  return (
    <div className='property'>
      <div className='top-header'>
        <span></span>
        <RightNav button buttonText='Add Property' />
      </div>
      <div className='image-row'>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
        <div className='image-container'>
          <img
            alt='img'
            src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          />
        </div>
      </div>

      <div className='details-container'>
        <button className='button'>
          <div className='button-text'>Edit Photos</div>
        </button>
        <div className='header'>
          <div className='status'>
            Agent status <span></span>
          </div>
          <div className='status'>
            Rent status <span></span>
          </div>
        </div>

        <div className='content'>
          <div className='input-content'>
            <div className='input wide'>
              <label>Address</label>
              <input
                type='text'
                placeholder='No 5, Okitipupa Cres, Bende, Abia.'
              />
            </div>
            <div className='input small'>
              <label>Unit</label>
              <select value={sortProperty} onChange={propertySorting}>
                <option value='Duplex'>Duplex</option>
              </select>
            </div>
          </div>
          <div className='input-content'>
            <div className='input'>
              <label>Number of Rooms</label>
              <input type='text' placeholder='Seven' />
            </div>
          </div>
          <div className='input-content'>
            <div className='input small'>
              <label>State</label>
              <select value={sortProperty} onChange={propertySorting}>
                <option value='Abia'>Abia</option>
              </select>
            </div>
            <div className='input small'>
              <label>LGA</label>
              <select value={sortProperty} onChange={propertySorting}>
                <option value='Bende'>Bende</option>
              </select>
            </div>
            <div className='input small'>
              <label>File Number</label>
              <select value={sortProperty} onChange={propertySorting}>
                <option value='12345'>12345</option>
              </select>
            </div>
          </div>
          <div className='title'>Agent Info</div>
          <div className='input-content'>
            <div className='input wide'>
              <label>Name</label>
              <input type='text' placeholder='Anas Ahmad Nuhu' />
            </div>
            <div className='input small'>
              <label>Contact</label>
              <input placeholder='08098767654' type='text' />
            </div>
          </div>
          <div className='input-content'>
            <div className='input'>
              <label>Agent Commission</label>
              <input type='text' placeholder='15%' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
