import styled from 'styled-components'

const PrimaryColour = '#E08524'
const SecondaryColour = '#B06617'
const TertiaryColour = '#F2830C'

const Button = styled.button `
    padding: 12px 24px;
    fontsize: 1rem;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: 'Roberto Mono', monospace;
    border: none;
    color: white;
`

const PrimaryButton = styled(Button) `
    background-color: ${PrimaryColour}
`
export const SecondaryButton = styled(Button) `
    background-color: ${SecondaryColour}
`

export const TertiaryButton = styled(Button) `
    background-color: ${TertiaryColour}
`
export default 