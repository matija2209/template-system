"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { twMerge } from "tailwind-merge";
import SectionHeading from "../common/section-heading";
import Spinner from "../common/spinner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
// Helper to build dynamic schema based on form fields
const generateFormSchema = (fields) => {
    const schemaFields = {};
    fields.forEach(field => {
        let validator = z.string();
        if (field.required) {
            validator = validator.min(1, { message: `${field.placeholder} is required.` });
        }
        if (field.type === "email") {
            validator = validator.email({ message: "Please enter a valid email address." });
        }
        schemaFields[field.name] = field.required ? validator : validator.optional();
    });
    return z.object(schemaFields);
};
const FormComponent = ({ form: formConfig, headingClasses, }) => {
    const { fields, replyToEmail, title } = formConfig;
    const [loading, setLoading] = useState(false);
    // Generate schema dynamically based on form fields
    const formSchema = generateFormSchema(fields || []);
    // Define form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: fields?.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {}),
    });
    const onSubmit = async (data) => {
        setLoading(true);
        const domain = window.location.hostname;
        try {
            // Send data to API
            const body = JSON.stringify({
                ...data,
                domain,
                replyToEmail,
                sentTo: replyToEmail
            });
            const response = await fetch("https://us-central1-gmb-scaling.cloudfunctions.net/save_form_data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            form.reset();
        }
        catch (error) {
            console.log(`There was an error. Please forward to katharina@we-hate-copy-pasting.com ${error.message}`, error);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs(_Fragment, { children: [title && (_jsx("div", { className: "text-left space-y-2 mb-6", children: _jsx(SectionHeading, { className: headingClasses, children: title }) })), _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [fields && fields.map((field) => {
                            const isMessageField = field.name?.trim().toLowerCase() === "message" ||
                                field.name?.trim().toLowerCase() === "nachricht";
                            return (_jsx(FormField, { control: form.control, name: field.name, render: ({ field: formField }) => (_jsxs(FormItem, { children: [field.placeholder && (_jsx(FormLabel, { children: field.placeholder })), _jsx(FormControl, { children: isMessageField ? (_jsx(Textarea, { ...formField, rows: 4, placeholder: field.placeholder, className: twMerge("border p-2 w-full") })) : (_jsx(Input, { ...formField, type: field.type, placeholder: field.placeholder, className: twMerge("border p-2 w-full") })) }), _jsx(FormMessage, {})] })) }, field.name));
                        }), _jsx(Button, { type: "submit", disabled: loading, className: twMerge("min-w-48 w-min uppercase", "bg-primary", "hover:bg-primary/90"), children: loading ? _jsx(Spinner, {}) : "Nachricht Senden" })] }) })] }));
};
export default FormComponent;
