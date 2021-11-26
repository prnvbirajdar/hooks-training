import React, { Fragment, useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { signup } from "app/utils"
import TabsButton from "app/TabsButton"
import { FaDumbbell } from "react-icons/fa"
import { DateFields, MonthField, DayField, YearField } from "app/DateFields"
// import SignupForm from "./SignupForm.final"
// export default SignupForm


const InputElement = ({ id, label, type = "text" }) => {
  return (
    <label htmlFor={id}>
      <input type={type} label={label} placeholder={label} />
    </label>
  )
}

export default function SignupForm() {
  return (
    <form className="SignupForm">
      <InputElement id="displayName" label="Display Name" />
      <InputElement id="photoUrl" label="Photo Url" />
      <InputElement id="email" label="Email" type="email" />
      <InputElement id="password" label="Password" type="password" />

      {/* <DateFields>
          <MonthField/>
          <DayField/>
          <YearField start="1950" end="2021"/>
        </DateFields> */}


      <TabsButton>          
        <FaDumbbell />
      </TabsButton>
    </form>
  )
}
