import "./addProperty.css";
import { useState } from "react";
import RightNav from "../../../component/rightNav/RightNav";
import { useGetAgentsQuery } from "../../agents/agentApiSlice";
import { useCreatePropertyMutation } from "../propertyApiSlice";

const AddProperty = () => {
  const { data: agents, isLoading: agentsLoading } = useGetAgentsQuery();
  const [createProperty, { isLoading: propertyLoading }] =
    useCreatePropertyMutation();
  const [property, setProperty] = useState({
    name: "",
    address: "",
    state: "",
    lga: "",
    agent_id: 0,
    images: [],
    is_listed: false,
    type: "",
    file_number: "",
  });

  const addProperty = (e) => {
    e.preventDefault();
    if (
      property.name &&
      property.address &&
      property.state &&
      property.lga &&
      property.agent_id
    ) {
      createProperty(property);
      setProperty({
        name: "",
        address: "",
        state: "",
        lga: "",
        agent_id: 0,
        images: [""],
        type: "",
        is_listed: false,
        file_number: "",
      });
    }
  };

  //  image file handle
  const handleImageFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProperty({ ...property, images: [reader.result] });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return propertyLoading ? (
    <h1 className="title">Adding Property Please wait....</h1>
  ) : (
    <div className="property">
      {/* <div className='top-header'>
        <span></span>
        <RightNav button buttonText='Add Property' onClick={addProperty} />
      </div> */}

      <div className="details-container">
        <div className="img_input">
          <div className="image-container">
            <img
              src={property.images[0]}
              alt={property.name}
              id="img"
              className="propertyImg"
            />
          </div>
          <input
            type="file"
            name="image"
            id="image"
            className="inputFile"
            accept="image/*"
            onChange={handleImageFile}
          />
          <label htmlFor="image" className="img_upload">
            Choose Photo
          </label>
        </div>

        <div className="content">
          <div className="input-content">
            <div className="input wide">
              <label>Property Name</label>
              <input
                type="text"
                placeholder="Enter Name of Property"
                value={property.name}
                onChange={(e) =>
                  setProperty({ ...property, name: e.target.value })
                }
              />
            </div>

            <div className="input small">
              <label>State</label>
              <input
                type="text"
                placeholder="Enter State"
                value={property.state}
                onChange={(e) =>
                  setProperty({ ...property, state: e.target.value })
                }
              />
            </div>

            <div className="input small">
              <label>LGA</label>
              <input
                type="text"
                placeholder="Enter LGA"
                value={property.lga}
                onChange={(e) =>
                  setProperty({ ...property, lga: e.target.value })
                }
              />
            </div>

            <div className="input wide">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                value={property.address}
                onChange={(e) =>
                  setProperty({ ...property, address: e.target.value })
                }
              />
            </div>
            <div className="input small">
              <label>Type</label>
              <select
                value={property.type}
                onChange={(e) =>
                  setProperty({ ...property, type: e.target.value })
                }
              >
                <option value="">Select Type</option>
                <option value="house">House</option>
                <option value="shop">Shop</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="input small">
              <label>File Number</label>
              <input
                type="text"
                placeholder="Enter File Number"
                value={property.file_number}
                onChange={(e) =>
                  setProperty({ ...property, file_number: e.target.value })
                }
              />
            </div>
          </div>

          <div className="input-content">
            <div className="input small">
              <label>Listing Status</label>
              <select
                value={property?.is_listed}
                onChange={(e) =>
                  setProperty({
                    ...property,
                    is_listed: e.target.value === "true" ? true : false,
                  })
                }
              >
                <option value={false}>Not Listed</option>
                <option value={true}>Listed</option>
              </select>
            </div>
            <div className="input small">
              <label>Agent</label>
              <select
                value={property.agent_id}
                onChange={(e) =>
                  setProperty({ ...property, agent_id: e.target.value })
                }
              >
                <option value="">Select Agent</option>
                {agentsLoading ? (
                  <option value="">Loading...</option>
                ) : (
                  agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {`${agent.name.toUpperCase()} ${agent.phone}`}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>
          <div className="input-content">
            <div className="input small">
              <button className={"submit"} onClick={addProperty}>
                Add Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
