type ChefAvatarProps = {
  className?: string;
};

export default function ChefAvatar({ className = "" }: ChefAvatarProps) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c27c2c]/40 bg-white text-[22px] shadow-sm ${className}`}
      aria-hidden="true"
    >
      👨‍🍳
    </span>
  );
}
