import styled from 'styled-components'

const Button = styled.button `
    padding: 12px 24px;
    fontsize: 1rem;
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: 'Roberto Mono', monospace;
`

const PrimaryButton = styled(Button) `
    background-color: red;
    border: none;
    color: white;
`
export default PrimaryButton