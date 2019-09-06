import React from "react"
import "./faq.scss"
/* Utils */
import ExpansionPanel from "utils/expansion-panel/expansion-panel"
import Typography from "utils/typography/typography"
/* Data */
import data from "./data"
/* Presentation Components */
const NetworkHero = React.lazy(() => import("./network-hero"))


const FAQHeader = ({
  number,
  question
}) => (
  <div className="faq-header">
    <div className="faq-number">{number}</div>
    <Typography variant="subtitle2">{question}</Typography>
  </div>
)

const FAQ = () => {

  return(
    <div className="faq">
      <Typography variant="header1" align="center">Frequently Asked <br />Questions.</Typography>

      <div className="faq-questions gutters">
        {data.map((faq, i) => (
          <ExpansionPanel key={i} header={<FAQHeader number={i+1} question={faq.question} />}>
            <div className="faq-answer">
              <Typography variant="body2">{faq.answer}</Typography>
            </div>
          </ExpansionPanel>
        ))}
      </div>

      <NetworkHero />
    </div>
  )
}

export default FAQ
