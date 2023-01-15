import * as Yup from "yup";

export const postSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title is Too Short!")
    .max(50, "Too Long!")
    .required("Title is Required"),
  description: Yup.string()
    .min(2, " Description is Too Short!")
    .max(100, "Too Long!")
    .required("Description is Required"),
});
