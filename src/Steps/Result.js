import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Form, Section, SectionRow } from "../Forms";

export const Result = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section title="Step One" url="/">
        <SectionRow>
          <div>First name</div>
          <div>{state.firstName}</div>
        </SectionRow>
        <SectionRow>
          <div>Last name</div>
          <div>{state.lastName}</div>
        </SectionRow>
        <SectionRow>
          <div>Age</div>
          <div>{state.age}</div>
        </SectionRow>
      </Section>
      <Section title="Step Two" url="/StepTwo">
        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
        <SectionRow>
          <div>Phonenumber</div>
          <div>{state.phone}</div>
        </SectionRow>
      </Section>
      <Section title="Step Three" url="/StepThree">
      <SectionRow>
          <div>Seat</div>
          <div>{state.seat}</div>
        </SectionRow>
        <SectionRow>
          <div>Food</div>
          <div>{state.food}</div>
        </SectionRow>
        <SectionRow>
          <div>allergies</div>
          <div>{state.allergies}</div>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};
