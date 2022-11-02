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
    <div className="property">
      <div className="top-header">
        <span></span>
        <RightNav button buttonText="Add Property" />
      </div>
      <div className="image-row">
        <div className="image-container">
          <img
            alt="img"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="image-container">
          <img
            alt="img"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="image-container">
          <img
            alt="img"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>

      <div className="details-container">
        <button className="button">
          <div className="button-text">Edit Photos</div>
        </button>
        <div className="header">
          <div className="status">
            Agent status <span></span>
          </div>
          <div className="status">
            Rent status <span></span>
          </div>
        </div>
        <div className="content">
          <div className="content-container">
            <div className="input-container">
              <div className="input-content wide">
                <label>input</label>
                <input type="text" placeholder="Placeholder" />
              </div>
              <select value={sortProperty} onChange={propertySorting}>
                <option value="Duplex">Duplex</option>
              </select>
            </div>
            <div className="input-container">
              <select value={sortProperty} onChange={propertySorting}>
                <option value="Duplex">Duplex</option>
              </select>
              <div className="input-content wide">
                <label>input</label>
                <input type="text" placeholder="Placeholder" />
              </div>
            </div>
            <div className="input-container">
              <div className="input-content wide">
                <label>input</label>
                <input type="text" placeholder="Placeholder" />
              </div>
              <select value={sortProperty} onChange={propertySorting}>
                <option value="Duplex">Duplex</option>
              </select>
            </div>
            <div className="input-container">
              <div className="input-content wide">
                <label>input</label>
                <input type="text" placeholder="Placeholder" />
              </div>
              <select value={sortProperty} onChange={propertySorting}>
                <option value="Duplex">Duplex</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
