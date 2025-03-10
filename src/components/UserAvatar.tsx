
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserAvatarProps {
  src?: string;
  fallback?: string;
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ 
  src = "/avatar.png", 
  fallback = "CD", 
  className 
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt="Аватар пользователя" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
