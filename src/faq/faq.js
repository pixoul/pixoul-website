import React from "react"
import "./faq.scss"

/* Utils */
import ExpansionPanel from "utils/expansion-panel/expansion-panel"
import Typography from "utils/typography/typography"
/* Presentation Components */
import NetworkHero from "./network-hero"
/* Data */
import data from "./data"


const FAQHeader = ({
  number,
  question
}) => (
  <div className="faq-header">
    <div className="faq-number">{number}</div>
    <div className="faq-question">{question}</div>
  </div>
)

const FAQ = () => {

  return(
    <div className="faq">
      <Typography variant="h1" color="primary" align="center" weight="bold">Frequently Asked <br />Questions.</Typography>

      <div className="faq-questions gutters">
        {data.map((faq, i) => (
          <ExpansionPanel key={i} header={<FAQHeader number={i+1} question={faq.question} />}>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </ExpansionPanel>
        ))}
      </div>

      <NetworkHero />
    </div>
  )
}

export default FAQ
