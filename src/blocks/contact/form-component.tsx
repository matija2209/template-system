"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { twMerge } from "tailwind-merge";

import type { Colors, Form as FormType, FormField as FormFieldType } from "@schnellsite/types";
import SectionHeading from "../common/section-heading";
import Spinner from "../common/spinner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";


// Helper to build dynamic schema based on form fields
const generateFormSchema = (fields: FormFieldType[]) => {
  const schemaFields: Record<string, any> = {};

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

const FormComponent = ({
  form: formConfig,
  headingClasses,

}: {
  form: FormType,
  headingClasses?: string,

}) => {
  const { fields, replyToEmail, title } = formConfig;
  const [loading, setLoading] = useState(false);

  // Generate schema dynamically based on form fields
  const formSchema = generateFormSchema(fields || []);

  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: fields?.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as Record<string, string>),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
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
    } catch (error: any) {
      console.log(
        `There was an error. Please forward to katharina@we-hate-copy-pasting.com ${error.message}`,
        error
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {fields && fields.map((field: FormFieldType) => {
            const isMessageField = field.name?.trim().toLowerCase() === "message" ||
              field.name?.trim().toLowerCase() === "nachricht";

            return (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name}
                render={({ field: formField }) => (
                  <FormItem>
                    {field.placeholder && (
                      <FormLabel className="form-label">
                        {field.placeholder}
                      </FormLabel>
                    )}
                    <FormControl>
                      {isMessageField ? (
                        <Textarea
                          {...formField}
                          rows={4}
                          placeholder={field.placeholder}
                          className={twMerge(
                            "border p-2 w-full form-textarea",
                          )}
                        />
                      ) : (
                        <Input
                          {...formField}
                          type={field.type}
                          placeholder={field.placeholder}
                          className={twMerge(
                            "border p-2 w-full form-input",

                          )}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}

          <Button
            type="submit"
            className="form-btn-submit"
            disabled={loading}
          >
            {loading ? <Spinner /> : "Nachricht Senden"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormComponent;