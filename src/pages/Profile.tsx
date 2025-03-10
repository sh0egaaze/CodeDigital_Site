
import React from "react";
import UserAvatar from "@/components/UserAvatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const avatarPath = "/images/avatar.png"; // Убедитесь, что этот файл существует в папке public/images/

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center">
            <UserAvatar 
              src={avatarPath} 
              fallback="CD" 
              className="h-24 w-24"
            />
            <h1 className="mt-4 text-2xl font-bold">Профиль пользователя</h1>
            <p className="mt-2 text-gray-600">
              Здесь отображается ваша аватарка, загруженная локально
            </p>
            <div className="mt-4 text-sm text-gray-500">
              <p>Для использования своей аватарки:</p>
              <ol className="list-decimal pl-5 mt-2">
                <li>Поместите ваше изображение в папку public/images/</li>
                <li>Назовите файл avatar.png</li>
                <li>Или измените путь к файлу в коде</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
