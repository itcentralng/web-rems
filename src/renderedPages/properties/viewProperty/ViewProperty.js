import "./viewProperty.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RightNav from "../../../component/rightNav/RightNav";
import { useGetAgentsQuery } from "../../agents/agentApiSlice";
import {
  useGetSinglePropertyQuery,
  useUpdatePropertyMutation,
  useCreateUnitMutation,
  useDeletePropertyMutation,
} from "../propertyApiSlice";
import { useGetTenantsQuery } from "../../tenants/tenantApiSlice";

const ViewProperty = () => {
  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get("id");
  const { data: agents, isLoading: agentsLoading } = useGetAgentsQuery();
  const { data: tenants, isLoading: tenantsLoading } = useGetTenantsQuery();
  const { data: property, isLoading: propertyLoading } =
    useGetSinglePropertyQuery(propertyId);
  const [updateProperty, { isLoading: updatepropertyLoading }] =
    useUpdatePropertyMutation();
  const [createUnit, { isLoading: createUnitLoading }] =
    useCreateUnitMutation();
  const [deleteProperty, { isLoading: deletePropertyLoading }] =
    useDeletePropertyMutation();
  const [editableproperty, setEditableProperty] = useState({
    id: 0,
    name: "",
    address: "",
    state: "",
    lga: "",
    agent_id: 0,
    images: [],
    is_listed: false,
  });
  const [unit, setUnit] = useState({
    property_id: propertyId,
    name: "",
    tenant_id: 0,
    annual_fee: 0,
    date: new Date().toISOString().slice(0, 10),
  });

  const defaultImage = require("../../../assets/home.png");

  const navigate = useNavigate();

  useEffect(() => {
    if (property) {
      setEditableProperty({
        id: property?.id,
        name: property?.name,
        address: property?.address,
        state: property?.state,
        lga: property?.lga,
        agent_id: property?.agent_id,
        images: [property?.images[0]?.image],
        is_listed: property?.is_listed,
        type: property?.type,
        file_number: property?.file_number,
      });
    }
  }, [propertyLoading]);

  const addUnit = (e) => {
    e.preventDefault();
    if (unit.name) {
      createUnit(unit);
      setUnit({
        property_id: propertyId,
        name: "",
        tenant_id: 0,
        annual_fee: 0,
      });
    }
  };

  const editProperty = (e) => {
    e.preventDefault();
    if (
      editableproperty?.name &&
      editableproperty?.address &&
      editableproperty?.state &&
      editableproperty?.lga &&
      editableproperty?.agent_id
    ) {
      updateProperty(editableproperty);
    }
  };

  const doDeleteProperty = (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to delete this property?") &&
      deleteProperty(propertyId);
    navigate("/properties");
  };

  //  image file handle
  const handleImageFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setEditableProperty({ ...editableproperty, images: [reader.result] });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return propertyLoading ? (
    <h1 className="title">Loading Property Please wait....</h1>
  ) : updatepropertyLoading ? (
    <h1 className="title">Updating Property Please wait....</h1>
  ) : (
    <div className="property">
      <div className="top-header">
        <span></span>
        <button
          style={{ backgroundColor: "red" }}
          className={"submit"}
          onClick={doDeleteProperty}
        >
          Delete Property
        </button>
      </div>

      <div className="details-container">
        <div className="img_input">
          <div className="image-container">
            <img
              src={
                editableproperty?.images[0]
                  ? editableproperty?.images[0]
                  : defaultImage
              }
              alt={editableproperty?.name}
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
                value={editableproperty?.name}
                onChange={(e) =>
                  setEditableProperty({
                    ...editableproperty,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="input small">
              <label>State</label>
              <input
                type="text"
                placeholder="Enter State"
                value={editableproperty?.state}
                onChange={(e) =>
                  setEditableProperty({
                    ...editableproperty,
                    state: e.target.value,
                  })
                }
              />
            </div>

            <div className="input small">
              <label>LGA</label>
              <input
                type="text"
                placeholder="Enter LGA"
                value={editableproperty?.lga}
                onChange={(e) =>
                  setEditableProperty({
                    ...editableproperty,
                    lga: e.target.value,
                  })
                }
              />
            </div>

            <div className="input wide">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                value={editableproperty?.address}
                onChange={(e) =>
                  setEditableProperty({
                    ...editableproperty,
                    address: e.target.value,
                  })
                }
              />
            </div>

            <div className="input small">
              <label>Type</label>
              <select
                value={editableproperty?.type}
                onChange={(e) =>
                  setEditableProperty({
                    ...editableproperty,
                    type: e.target.value,
                  })
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
                value={editableproperty?.file_number}
                onChange={(e) =>
                  setEditableProperty({
                    ...editableproperty,
                    file_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="input small">
              <label>Agent</label>
              <select
                value={editableproperty?.agent_id}
                onChange={(e) =>
                  setEditableProperty({
                    ...editableproperty,
                    agent_id: e.target.value,
                  })
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
            <div className="input small">
              <label>Listing Status</label>
              <select
                value={editableproperty?.is_listed}
                onChange={(e) =>
                  setEditableProperty({
                    ...editableproperty,
                    is_listed: e.target.value === "true" ? true : false,
                  })
                }
              >
                <option value={false}>Not Listed</option>
                <option value={true}>Listed</option>
              </select>
            </div>
          </div>
          <div className="input-content">
            <div className="input small">
              <button className={"submit"} onClick={editProperty}>
                Update Property
              </button>
            </div>
          </div>

          {/* Units */}
          <div className="title">
            <h4>Add Unit</h4>
          </div>
          <div className="input-content">
            <div className="input small">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Unit Name"
                value={unit.name}
                onChange={(e) => setUnit({ ...unit, name: e.target.value })}
              />
            </div>
            <div className="input small">
              <label>Annual Fee</label>
              <input
                type="text"
                placeholder="Enter Unit Annual Fee"
                value={unit.annual_fee}
                onChange={(e) =>
                  setUnit({ ...unit, annual_fee: e.target.value })
                }
              />
            </div>
            <div className="input small">
              <label>Tenant</label>
              <select
                value={unit.tenant_id}
                onChange={(e) =>
                  setUnit({ ...unit, tenant_id: e.target.value })
                }
              >
                <option value="">Select Tenant</option>
                <option value="add">Add New</option>
                {agentsLoading ? (
                  <option value="">Loading...</option>
                ) : (
                  tenants?.map((tenant) => (
                    <option key={tenant.id} value={tenant.id}>
                      {`${tenant.name.toUpperCase()} ${tenant.phone}`}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="input small">
              <label>Next Payment Date</label>
              <input
                type="date"
                value={unit.date}
                onChange={(e) => setUnit({ ...unit, date: e.target.value })}
              />
            </div>
            <div className="input small">
              <button className={"submit"} onClick={addUnit}>
                Add
              </button>
            </div>
          </div>
          <div className="title">
            <h4>Units</h4>
          </div>
          <div className="card-container">
            {property?.units?.map((unit) => (
              <div
                className="card"
                key={unit.id}
                onClick={() => navigate("/properties/viewUnit?id=" + unit.id)}
              >
                <div className="image-container">
                  <img
                    src={
                      editableproperty?.images[0]
                        ? editableproperty?.images[0]
                        : defaultImage
                    }
                    alt={unit.name}
                  />
                </div>
                <div>
                  <p className="bold">{unit.name}</p>
                  <p>{property.address}</p>
                  <p>{unit.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
