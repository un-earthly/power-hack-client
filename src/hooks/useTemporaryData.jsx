import { useState } from 'react'

export default function useTemporaryData() {
    const [temporaryData, setTemporaryData] = useState(null)
    return [temporaryData, setTemporaryData]
}
