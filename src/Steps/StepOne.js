import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required("First name is a required field").matches(/^[a-zA-Z\u0080-\u00FF]+$/, "First name should not contain numbers"),
    lastName: yup.string().required("Last name is a required field").matches(/^[a-zA-Z\u0080-\u00FF]+$/, "Last name should not contain numbers"),
    age: yup.number().min(0, "Age should be positive").required("Age must be a number"),
  });

  export const StepOne = () => {
    const [state, setState] = useAppState();
    const {
      handleSubmit,
      register,
      formState,
    } = useForm({ defaultValues: state, mode: "onBlur", resolver: yupResolver(schema), });
    const navigate = useNavigate();
    
    const { errors } = formState;
    
    const saveData = (data) => {
      setState({ ...state, ...data });
      navigate("/StepTwo");
    };
  {handleSubmit(saveData)}

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Step One</legend>

        <Field label="First name">
          <Input
            {...register("firstName")}
            id="first-name"
            data-testid="firstName"
          />
        </Field>
        <p className="error">{errors.firstName?.message}</p>

        <Field label="Last name">
          <Input
            {...register("lastName")}
            id="last-name"
            data-testid="lastName"
          />
        </Field>
        <p className="error">{errors.lastName?.message}</p>

        <Field label="Age">
          <Input
            {...register("age")}
            type="number"
            id="age"
            data-testid="age"
          />
        </Field>
        <p className="error">{errors.age?.message}</p>

        <Button >Next {">"}</Button>
      </fieldset>
    </Form>
  );
};
