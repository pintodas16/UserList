import { useState } from "react";
import { useUserContext } from "../../../contexts/userContext";
import Button from "../../Btn";
import Form from "../../form/Form";
import Input from "../../form/Input";
function AddUserForm() {
  const { addUser, handleUserFormModal } = useUserContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    companyName: "",
    avatar: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({});
  };
  const handleImgFile = (e) => {
    const file = e.target.files[0];

    setFormData({
      ...formData,
      avatar: file.name,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const validationErrors = {};
    // validate firstName
    if (!formData.firstName.trim()) {
      // console.log("title is empty");
      validationErrors.firstName = "FirstName is required";
    }
    // validate lastName
    if (!formData.lastName.trim()) {
      validationErrors.lastName = "lastName is required";
    }
    // validate email
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!isValidEmail(formData.email.trim())) {
      validationErrors.email = "Invalid email address";
    }
    // validate avatar
    if (!formData.avatar) {
      validationErrors.avatar = "Avatar is required";
    }
    // validate street
    if (!formData.street.trim()) {
      validationErrors.street = "street is required";
    }
    // validate suite
    if (!formData.suite.trim()) {
      validationErrors.suite = "suite is required";
    }
    // validate city
    if (!formData.city.trim()) {
      validationErrors.city = "city is required";
    }
    // validate company
    if (!formData.companyName.trim()) {
      validationErrors.companyName = "companyName is required";
    }

    // if there is a validation errors update the errors state
    if (Object.keys(validationErrors).length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        ...validationErrors,
        isError: true,
      }));
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // form is valid
      console.log(formData);
      addUser({
        ...formData,
        id: `${Math.round(Math.random() * 100) + 111}`,
      });
      handleUserFormModal();
    } else {
      // form is not valid
    }
    // console.log(formData);
  };
  return (
    <Form action="">
      <div className={`flex flex-col `}>
        {/* <!-- first name nad last name  --> */}
        <div className="flex gap-4 ">
          {/* <!-- first name w-1/2 flex flex-col gap-1  --> */}
          <Input
            name="firstName"
            label="first name"
            type="text"
            error={errors}
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {/* <!-- last  name w-1/2 flex flex-col --> */}
          <Input
            name="lastName"
            label="last name"
            type="text"
            error={errors}
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        {/* <!-- email  --> */}
        <Input
          name="email"
          label="email"
          type="email"
          error={errors}
          value={formData.email}
          onChange={handleInputChange}
        />
        {/* <!--Avatar  --> */}

        <Input
          name="avatar"
          label="Avatar"
          type="file"
          accept="image/*"
          error={errors}
          onChange={handleImgFile}
        />

        {/* <!-- street suite   --> */}
        <div className="flex gap-4 ">
          {/* <!-- street name  --> */}

          <Input
            name="street"
            type="text"
            label="street"
            error={errors}
            value={formData.street}
            onChange={handleInputChange}
          />
          {/* <!-- suite  --> */}
          <Input
            name="suite"
            type="text"
            label="suite"
            error={errors}
            value={formData.suite}
            onChange={handleInputChange}
          />
        </div>

        {/* <!-- city  --> */}

        <Input
          name="city"
          type="text"
          label="city"
          error={errors}
          value={formData.city}
          onChange={handleInputChange}
        />
        {/* <!-- compnay name  --> */}
        <Input
          name="companyName"
          type="text"
          label="company Name"
          error={errors}
          value={formData.companyName}
          onChange={handleInputChange}
        />
        {/* <!-- submit button  --> */}

        <Button type="button" extraClass="mt-3" handleBtn={handleFormSubmit}>
          Add User
        </Button>
      </div>
    </Form>
  );
}

export default AddUserForm;
