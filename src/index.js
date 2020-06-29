import React from 'react'
import ReactDOM from 'react-dom'
import PrimaryButton,
{
    SecondaryButton,
    TertiaryButton
} from './components/button'


const App = () =>
(
    <div>
        <PrimaryButton>Hello one</PrimaryButton>
        <SecondaryButton>Hello two</SecondaryButton>
        <TertiaryButton>Hello three</TertiaryButton>
    </div>
)

ReactDOM.render(<App />, document.querySelector("#root"))

