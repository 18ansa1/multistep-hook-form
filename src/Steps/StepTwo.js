import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email("Email should have correct format").required("Email is a required field"),
    phone: yup.number().required("Phone is a required field"),
  });

  export const StepTwo = () => {
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
      navigate("/StepThree");
    };
  {handleSubmit(saveData)}

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Step Two</legend>

        <Field label="Phone">
          <Input
            {...register("phone")}
            type="number"
            id="phone"
            data-testid="phone"
          />
        </Field>
        <p className="error">{errors.phone?.message}</p>
        
        <Field label="Email">
          <Input
            {...register("email")}
            type="email"
            id="email"
            data-testid="email"
          />
        </Field>
        <p className="error">{errors.email?.message}</p>

        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/">
            {"<"} Previous
          </Link>
          <Button>Next {">"}</Button>
        </div>
        
      </fieldset>
    </Form>
  );
};
