import React from "react"
import "./faq.scss"

/* Utils */
import Opening from "utils/opening/opening"
import ExpansionPanel from "utils/expansion-panel/expansion-panel"
/* Data */
import data from "./data"


const FAQHeader = ({
  number,
  question
}) => (
  <div className="faq-header">
    <div className="faq-number"> {number} </div>
    <div className="faq-question">{question}</div>
  </div>
)

const FAQ = () => {

  return(
    <div className="faq gutters">

      <Opening title="Frequently Asked Questions" />

      {data.map((faq, i) => (
        <ExpansionPanel key={i} header={<FAQHeader number={i+1} question={faq.question} />}>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </ExpansionPanel>
      ))}


    </div>
  )
}

export default FAQ
