'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export default function LoginForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										className="border-hidden focus-visible:shadow-none"
										placeholder="Email"
										type="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										className="border-hidden"
										placeholder="Password"
										type="password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="primary-btn w-full mt-4">
						Login
					</Button>
				</form>
			</Form>

			<div className="flex justify-between w-full items-center my-6">
				<hr className="w-full border-secondary opacity-50"></hr>
				<p className="px-4 text-secondary opacity-50">OR</p>
				<hr className="w-full border-secondary opacity-50"></hr>
			</div>

			<div className="flex flex-col w-full gap-6">
				<button className="p-4 border border-secondary rounded-lg hover:bg-secondaryLowOpacity">
					Continue With Wallet
				</button>
			</div>
		</>
	);
}
