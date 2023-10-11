import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    seat: yup.number().required("Seat is a required field"),
    food: yup.string().required("Food is a required field"),
  });

  export const StepThree = () => {
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
      navigate("/Result");
    };
  {handleSubmit(saveData)}

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Step Three</legend>

        <Field label="Seat">
          <Input
            {...register("seat")}
            type="number"
            id="seat"
            data-testid="seat"
          />
        </Field>
        <p className="error">{errors.seat?.message}</p>

        <Field label="Food">
          <Input
            {...register("food")}
            id="food"
            data-testid="food" 
          />
        </Field>
        <p className="error">{errors.food?.message}</p>

        <Field label="Allergies">
          <Input
            {...register("allergies")}
            id="allergies"
            data-testid="allergies"
          />
        </Field>
        <p className="error">{errors.age?.message}</p>

        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/StepTwo">
            {"<"} Previous
          </Link>
          <Button>Next {">"}</Button>
        </div>

      </fieldset>
    </Form>
  );
};
