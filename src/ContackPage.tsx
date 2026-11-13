//import { FormEvent } from 'react';
import { redirect } from 'react-router-dom';
import { FieldError, useForm } from 'react-hook-form';
import { error } from 'console';
import { ValidationError } from './ValidationError';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  //const [contact, setContact] = useState<Contact>({ name: '', email: '', reason: '', notes: '' });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Contact>();
  const fieldStyle = 'flex flex-col mb-2';

  const onSubmit = (data: Contact) => {
    console.log('Submitted details:', data);
  };

  function getEditorStyle(email: FieldError | undefined): import("react").ReactNode {
    throw new Error('Function not implemented.');
  }

  // function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const contact = {
  //     name: formData.get('name'),
  //     email: formData.get('email'),
  //     reason: formData.get('reason'),
  //     notes: formData.get('notes'),
  //   };
  //   console.log('Submitted default are  ', contact);
  // }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
      <form>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            {...register('email', {
              required: 'You must enter your email address',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
          />
          className={getEditorStyle(errors.email)}
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, minLength: 19 })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select id="reason" {...register('reason', { required: true, minLength: 12 })}>
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register('notes', { required: true, minLength: 15 })} />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {isSubmitSuccessful && <p>Thanks for getting in touch!</p>}
          {errors && <p>Please correct the form errors.</p>}
        </div>
      </form>
    </div>
  );
}

// export async function ContactPageAction({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const contact = {
//     name: formData.get('name'), // queries the 'name' property of FormControl
//     email: formData.get('email'),
//     reason: formData.get('reason'),
//     notes: formData.get('notes'),
//   };

//   console.log('Submitted details:', contact);
//   return redirect(`/thankyou/${formData.get('name')}`);
// }
