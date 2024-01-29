import {useEffect, useRef, useState} from "react";

export const useHeader = () => {
    const menuWrapperRef = useRef<null | HTMLDivElement>(null);
    const burgerButtonRef = useRef<null | HTMLButtonElement>(null);

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!menuWrapperRef.current?.contains(event.target as Node) && !burgerButtonRef.current?.contains(event.target as Node)) {
                setMobileMenuIsOpen(false)
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuIsOpen]);

    useEffect(() => {
        mobileMenuIsOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [mobileMenuIsOpen])

    return { menuWrapperRef, burgerButtonRef, mobileMenuIsOpen, setMobileMenuIsOpen }
}