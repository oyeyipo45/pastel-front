import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useCreateNoteMutation } from "@/redux/api";

interface Form {
  title: string;
  content: string;
}
const NoteInput = () => {
  const [createNote] = useCreateNoteMutation();
  const [error, setError] = useState(null);

  const onSubmit = async (values: Form, actions: any) => {
    try {
      await createNote(values);
      actions.resetForm();
      setError(null);
    } catch (err: any) {
      setError(err.message || "An error occurred while creating the note.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ title: "", content: "" }} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <div className="postInput">
          <Field type="text" placeholder="Add Title" name="title" validate={(value: string) => (value ? "" : "Please enter a title")} />
          <ErrorMessage name="title" component="div" className="error" />

          <Field type="text" placeholder="Add Content" name="content" component="textarea" />

          <button id="push" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Add Note"}
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      )}
    </Formik>
  );
};

export default NoteInput;
