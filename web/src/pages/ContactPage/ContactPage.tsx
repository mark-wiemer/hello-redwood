import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

import {
  Form,
  TextField,
  Submit,
  SubmitHandler,
  TextAreaField,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'

interface FormValues {
  name: string
  email: string
  message: string
}

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        {/* Name */}
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        {/* Email */}
        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        {/* Message */}
        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        {/* Submit */}
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
