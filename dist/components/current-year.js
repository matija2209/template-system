'use client';
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export default function CurrentYear() {
    const [year, setYear] = useState('');
    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, []);
    return _jsx(_Fragment, { children: year });
}
