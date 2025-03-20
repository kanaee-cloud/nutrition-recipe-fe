import LoginForm from "@/components/custom/LoginForm";


export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-semibold mb-4 text-2xl">Login</h1>
      <LoginForm />
     
    </div>
  );
}