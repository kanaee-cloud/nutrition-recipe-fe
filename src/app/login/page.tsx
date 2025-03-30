import LoginForm from "@/components/pages/LoginForm";

export default function LoginPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-black opacity-75" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[120px] opacity-50" />
      </div>
      <div className="relative z-10 p-8 backdrop-blur-lg rounded-xl shadow-lg max-w-sm w-full">
        <h1 className="font-semibold mb-4 text-2xl text-white text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
