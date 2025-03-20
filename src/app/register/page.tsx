import RegisterForm from "@/components/custom/RegisterForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-semibold mb-4 text-2xl">Register</h1>
      <RegisterForm />
    </div>
  );
}