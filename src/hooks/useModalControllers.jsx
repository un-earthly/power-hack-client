import { useState } from 'react'

export default function useModalControllers() {
    const [modalIsOpen, setIsOpen] = useState(false);
    return [modalIsOpen, setIsOpen]
}
