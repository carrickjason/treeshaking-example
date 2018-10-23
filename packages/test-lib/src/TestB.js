import React from 'react'
import { TestA } from './TestA'

const TestB = () => <h1>TestB + {TestA}</h1>

TestB.displayName = 'BTest'

export { TestB }
