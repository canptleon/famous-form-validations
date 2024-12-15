# **Famous Form Validations**

A showcase project demonstrating various form management libraries integrated with validation tools. This project features **Formik**, **React Hook Form**, and **React Final Form** with schema-based validation using **Yup** and **Zod**.

## Live Demo

Check out the live demo of the project here:

**LIVE DEMO**: [https://famous-form-validations.vercel.app/](https://famous-form-validations.vercel.app/)

## Medium Article

Check out an article about this project from here: 

[https://medium.com/@ardakeyisoglu/validation-chaos-react-forms-in-action-e2e88b4f17ce/](https://medium.com/@ardakeyisoglu/validation-chaos-react-forms-in-action-e2e88b4f17ce)

---

## Libraries and Tools Used

### 1. **Formik + Yup**
- Simplifies form state management and integrates seamlessly with Yup for validation.
- Demonstrates how to build a flexible, schema-validated form.

### 2. **Formik + Zod**
- Combines Formik's state management with Zod's TypeScript-first validation.
- Showcases type-safe, modern validation techniques.

### 3. **React Hook Form**
- Lightweight and performant form management library with minimal re-renders.
- Implements custom validation using built-in validation rules.

### 4. **React Final Form + Yup**
- Offers fine-grained control over form state with React Final Form.
- Uses Yup for robust, schema-based validation.

---

## Features

- **Flexible Form Management**: Demonstrates multiple approaches to handling forms in React.
- **Schema-Based Validation**: Utilizes Yup and Zod for advanced validation logic.
- **Mobile-Friendly Design**: Styled with Tailwind CSS for responsive and visually appealing layouts.
- **Error Handling**: Real-time validation errors for all forms.
- **Reusable Code**: Validation schemas and form logic can be easily adapted for other projects.

---

## Usage

### Implemented Forms

#### 1. **Formik + Yup**
- **Fields**: Name, Email, Gender, Phone, Password, Confirm Password
- **Validation**:
  - **Name**: Minimum 2 characters, required
  - **Email**: Valid email format, required
  - **Gender**: Required selection
  - **Phone**: Matches Turkish phone number format, required
  - **Password**: Minimum 6 characters, required
  - **Confirm Password**: Must match the password
- **Code Example**: Check `FormikYupForm.tsx`

---

#### 2. **Formik + Zod**
- **Fields**: Same as above
- **Validation**:
  - **Zod** provides TypeScript-first validation with strong type-checking.
  - Password and Confirm Password validation is handled via Zod's `.refine` method.
- **Code Example**: Check `FormikZodForm.tsx`

---

#### 3. **React Hook Form**
- **Fields**: Same as above
- **Validation**:
  - Built-in validation rules (e.g., `required`, `minLength`, `pattern`) for lightweight validation.
  - Custom validation for password matching.
- **Code Example**: Check `ReactHookForm.tsx`

---

#### 4. **React Final Form + Yup**
- **Fields**: Same as above
- **Validation**:
  - Uses Yup for centralized validation logic.
  - Validation errors are displayed dynamically for each field.
- **Code Example**: Check `ReactFinalForm.tsx`
