import Image, { ImageProps } from "next/image";

export type AvatarProps = ImageProps & { size?: number };

const Avatar = ({ className, size, alt, ...props }: AvatarProps) => {
  return (
    <div className={`relative aspect-square ${className} `}>
      <Image
        className="rounded-full border-4 border-white bg-bg-light"
        fill
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default Avatar;
