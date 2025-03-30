import RegisterForm from "@/components/pages/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-600 to-black opacity-80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 blur-[100px] opacity-50" />
      </div>
      <div className="relative z-10 p-8  backdrop-blur-lg rounded-xl shadow-lg max-w-sm w-full">
        <h1 className="font-semibold mb-4 text-2xl text-white text-center">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
