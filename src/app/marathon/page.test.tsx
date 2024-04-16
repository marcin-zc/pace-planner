import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Page from './page'
import {describe, expect, it} from "@jest/globals";

describe('Marathon Page', () => {

    it('should show label Time', () => {
        render(<Page/>)
        const label = screen.getByTestId('labelId')
        expect(label.textContent).toContain('Time:')
    })

    it('should show button Calculate', () => {
        render(<Page/>)
        const button = screen.getByRole('button')
        expect(button.textContent).toContain('Calculate')
    })
})