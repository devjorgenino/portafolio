"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "./language-provider";

const ContactForm = () => {
  const { t } = useLanguage();
  const [successForm, setSuccessForm] = useState(false);
  const [sending, setSending] = useState(false);

  const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        setSuccessForm(true);
        form.reset();
      }
    } catch (e) {
      // optionally show error state
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (!successForm) return;
    const timer = setTimeout(() => {
      setSuccessForm(false);
    }, 5000); // show success message for 5 seconds

    return () => clearTimeout(timer);
  }, [successForm]);

  return (
    <Form {...form}>
      {successForm ? (
        <h4 className="text-lg font-semibold text-green-600">
          {t("send_success")}
        </h4>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <label className="sr-only">{t("name_label")}</label>
                <FormControl>
                  <Input
                    placeholder={t("placeholder_name")}
                    {...field}
                    aria-label={t("name_label")}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label className="sr-only">{t("email_label")}</label>
                <FormControl>
                  <Input
                    placeholder={t("placeholder_email")}
                    {...field}
                    aria-label={t("email_label")}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <label className="sr-only">{t("message_label")}</label>
                <FormControl>
                  <Textarea
                    placeholder={t("placeholder_message")}
                    {...field}
                    aria-label={t("message_label")}
                    className="dark:bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-4">
            <Button type="submit" disabled={sending}>
              {sending ? t("sending") : t("send_button")}
            </Button>
            <div
              aria-live="polite"
              className="text-sm text-slate-600 dark:text-slate-300"
            >
              {/* space for inline status or helper text */}
            </div>
          </div>
        </form>
      )}
    </Form>
  );
};

export default ContactForm;
